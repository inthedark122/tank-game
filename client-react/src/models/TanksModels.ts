import { Instance, types } from 'mobx-state-tree'
import { TankModel } from './TankModel'

export const TanksModel = types
  .model({
    tanks: types.array(TankModel),
  })
  .actions((self) => ({
    addTank(tank: Instance<typeof TankModel>) {
      self.tanks.push(tank)
    },
    remoteTank(tank: Instance<typeof TankModel>) {
      self.tanks.remove(tank)
    },
  }))
