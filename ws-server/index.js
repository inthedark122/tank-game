import WebSocket from 'ws'
import { wss } from './core/wss.js'
import { incoming } from './messages/main.js'

function broadcast(message) {
  wss.clients.forEach(function each(client) {
    if (client.readyState === WebSocket.OPEN) {
      client.send(message)
    }
  })
}

wss.on('connection', function connection(ws) {
  ws.on('message', incoming(ws, broadcast))

  ws.send(JSON.stringify({ type: 'connected' }))
})
