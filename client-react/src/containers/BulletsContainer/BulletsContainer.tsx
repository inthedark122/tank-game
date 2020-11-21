import React from 'react'
import { useObserver } from 'mobx-react'
import { store } from '../../models'
import { BulletContainer } from '../BulletContainer'

export function BulletsContainer() {
  return useObserver(() => (
    <>
      {store.bullets.bullets.map((bullet) => (
        <BulletContainer key={bullet.id} bullet={bullet} />
      ))}
    </>
  ))
}
