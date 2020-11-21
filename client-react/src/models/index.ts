import { AppModel } from './AppModel'

export const store = AppModel.create({
  tanks: {
    tanks: [
      {
        id: 0,
        name: 'Oleh',
        position: {
          x: 0,
          y: 0,
          direction: 'right',
        },
      },
    ],
  },
  bullets: {
    bullets: [],
  },
})
