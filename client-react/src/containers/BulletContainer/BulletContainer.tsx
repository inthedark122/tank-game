import React, { useCallback, useEffect } from 'react'
import { Instance } from 'mobx-state-tree'
import { reaction } from 'mobx'
import { BulletModel } from '../../models/BulletModel'
import { store } from '../../models'
import styles from './BulletContainer.module.css'
import { useObserver } from 'mobx-react'

interface Props {
  bullet: Instance<typeof BulletModel>
}

export function BulletContainer(props: Props) {
  const { bullet } = props
  const handleBulletNext = useCallback(() => {
    bullet.position.onNext(bullet.position.key)
  }, [bullet])

  useEffect(() => {
    const interval = setInterval(handleBulletNext, 200)

    return () => {
      clearInterval(interval)
    }
  }, [handleBulletNext])

  useEffect(
    () =>
      reaction(
        () => bullet.position.isOver,
        (isOver: boolean) => {
          console.log(isOver)
          if (isOver) {
            store.bullets.removeBullet(bullet)
          }
        },
        {
          fireImmediately: true,
        }
      ),
    [bullet]
  )

  return useObserver(() => (
    <div
      className={styles.root}
      style={{
        top: 24 * bullet.position.y + 10,
        left: 24 * bullet.position.x + 10,
      }}
    ></div>
  ))
}
