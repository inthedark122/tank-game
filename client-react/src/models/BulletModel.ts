import { types } from 'mobx-state-tree'
import { PositionModel } from './PositionModel'

export const BulletModel = types.model('Bullet', {
  id: types.number,
  tankId: types.number,
  position: PositionModel,
})
