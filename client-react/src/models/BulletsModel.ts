import { Instance, types } from 'mobx-state-tree'
import { BulletModel } from './BulletModel'

export const BulletsModel = types
  .model({
    bullets: types.array(BulletModel),
  })
  .actions((self) => ({
    addBullet(bullet: Instance<typeof BulletModel>) {
      self.bullets.push(bullet)
    },
    removeBullet(bullet: Instance<typeof BulletModel>) {
      self.bullets.remove(bullet)
    },
  }))
