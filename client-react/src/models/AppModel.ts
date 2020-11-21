import { types } from 'mobx-state-tree'
import { BulletsModel } from './BulletsModel'
import { TanksModel } from './TanksModels'

export const AppModel = types.model({
  tanks: TanksModel,
  bullets: BulletsModel,
})
