import { types } from 'mobx-state-tree'
import { PositionModel } from './PositionModel'

export const TankModel = types.model('Tank', {
  id: types.number,
  name: types.string,
  position: PositionModel,
})
