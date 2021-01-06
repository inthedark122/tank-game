import { init } from './init.js'
import { onMove } from './move.js'
import { onclose } from './onclose.js'

const messageHandlers = {
  init,
  move: onMove
}

export function incoming(ws, broadcast) {
  const context = {}

  ws.on('close', function () {
    onclose({ data: { type: 'onclose' }, ws, context, broadcast })
  })

  return function (message) {
    console.log('received: %s', message, "; context:", JSON.stringify(context))

    try {
      const data = JSON.parse(message)
      const handler = messageHandlers[data.type]

      if (handler) {
        handler({ data, ws, context, broadcast })
      }
    } catch (e) {
      console.error(e)
    }
  }
}
