import { types } from 'mobx-state-tree'
import { GRID_SIZE } from '../constants'

const ROTATIONS = {
  top: 0 as const,
  right: 90 as const,
  bottom: 180 as const,
  left: 270 as const,
}
const KEYS = {
  top: 'ArrowUp' as const,
  right: 'ArrowRight' as const,
  bottom: 'ArrowDown' as const,
  left: 'ArrowLeft' as const,
}

export const PositionModel = types
  .model({
    x: types.number,
    y: types.number,
    direction: types.union(
      types.literal('top'),
      types.literal('right'),
      types.literal('bottom'),
      types.literal('left')
    ),
  })
  .views((self) => ({
    get rotation(): number {
      return ROTATIONS[self.direction]
    },
    get key(): 'ArrowUp' | 'ArrowRight' | 'ArrowDown' | 'ArrowLeft' {
      return KEYS[self.direction]
    },
    get isOver(): boolean {
      return (
        self.x < 0 || self.y < 0 || self.x >= GRID_SIZE || self.y >= GRID_SIZE
      )
    },
    get nextPosition(): { x: number; y: number } {
      switch (self.direction) {
        case 'top':
          return { x: self.x, y: self.y - 1 }
        case 'right':
          return { x: self.x + 1, y: self.y }
        case 'bottom':
          return { x: self.x, y: self.y + 1 }
        case 'left':
          return { x: self.x - 1, y: self.y }
      }
    },
  }))
  .actions((self) => ({
    canMove(key: 'ArrowUp' | 'ArrowRight' | 'ArrowDown' | 'ArrowLeft') {
      switch (key) {
        case 'ArrowUp':
          return self.y > 0
        case 'ArrowRight':
          return self.x < GRID_SIZE - 1
        case 'ArrowDown':
          return self.y < GRID_SIZE - 1
        case 'ArrowLeft':
          return self.x > 0
      }
    },
    onNext(key: 'ArrowUp' | 'ArrowRight' | 'ArrowDown' | 'ArrowLeft') {
      switch (key) {
        case 'ArrowUp':
          self.y -= 1
          self.direction = 'top'
          break
        case 'ArrowRight':
          self.x += 1
          self.direction = 'right'
          break
        case 'ArrowDown':
          self.y += 1
          self.direction = 'bottom'
          break
        case 'ArrowLeft':
          self.x -= 1
          self.direction = 'left'
          break
      }
    },
  }))
