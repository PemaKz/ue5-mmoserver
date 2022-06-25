const WebSocket = require('ws')
const Config = require('../config.jsx')
const ServerWebSocket = new WebSocket.Server({ port: Config.server.port})

ServerWebSocket.on("connection", ws => {
  console.log('New Client Connected')
  ws.on("message", (msg) => {
    if(msg == 'calculatePossibleSpawns'){
      //Calculate what items are possible to Spawn
      /*
        {
          0:{
            id: 'ak-47'
            qnty: 3
            rarity: 0.02
          },
          1:{
            id: 'roasted potato'
            qnty: 50
            rarity: 0.52
          },
        }
      */
    }
    if(msg == 'addItemTemp'){
      //Add Item to Temporal
    }
    if(msg == 'deleteItemTemp'){
      //Delete Item from Temporal
    }
    if(msg == 'isPossibleToSpawn'){
      //Check if item is possible to spawn
    }
  })
  ws.on("close", () => console.log(`Client was disconnected`))
  ws.onerror = () => console.log(`Some Error has ocurred!`)
})

console.log(`The WebSocket Server is running on port ${Config.server.port}`);


exports.module = ServerWebSocket