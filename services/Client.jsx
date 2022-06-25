const WebSocket = require('ws')
const Config = require('../config.jsx')
const ClientWebSocket = new WebSocket.Server({ port: Config.client.port})

ClientWebSocket.on("connection", ws => {
  console.log('New Client Connected')
  ws.on("message", data => console.log(`Client has sent the following message: ${data}`))
  ws.on("close", () => console.log(`Client was disconnected`))
  ws.onerror = () => console.log(`Some Error has ocurred!`)
})

console.log(`The WebSocket Client is running on port ${Config.client.port}`);


exports.module = ClientWebSocket