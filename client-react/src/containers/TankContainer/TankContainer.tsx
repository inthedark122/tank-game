import React, { useCallback, useEffect } from 'react'
import { useObserver } from 'mobx-react'
import { Instance } from 'mobx-state-tree'
import { TankIcon } from '../../components/TankIcon'
import { TankModel } from '../../models/TankModel'
import styles from './TankContainer.module.css'
import { store } from '../../models'
import { PositionModel } from '../../models/PositionModel'

interface PropsType {
  tank: Instance<typeof TankModel>
}

export function TankContainer(props: PropsType) {
  const { tank } = props
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      const key = event.key as
        | 'ArrowUp'
        | 'ArrowRight'
        | 'ArrowDown'
        | 'ArrowLeft'

      if (event.key === ' ') {
        store.bullets.addBullet({
          id: +new Date(),
          tankId: tank.id,
          position: PositionModel.create({
            ...tank.position.nextPosition,
            direction: tank.position.direction,
          }),
        })
      } else if (tank.position.canMove(key)) {
        tank.position.onNext(key)
      }
    },
    [tank]
  )

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleKeyDown])

  return useObserver(() => (
    <div
      className={styles.tank}
      style={{
        top: 24 * tank.position.y,
        left: 24 * tank.position.x,
        transform: `rotate(${tank.position.rotation}deg)`,
      }}
    >
      <TankIcon />
    </div>
  ))
}
