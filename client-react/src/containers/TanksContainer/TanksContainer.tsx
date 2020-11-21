import React from 'react'
import { useObserver } from 'mobx-react'
import { store } from '../../models'
import { TankContainer } from '../TankContainer'
import { Instance } from 'mobx-state-tree'
import { TankModel } from '../../models/TankModel'

export function TanksContainer() {
  return useObserver(() => (
    <>
      {store.tanks.tanks.map((tank: Instance<typeof TankModel>) => (
        <TankContainer key={tank.id} tank={tank} />
      ))}
    </>
  ))
}
