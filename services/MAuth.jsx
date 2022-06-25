const WebSocket = require('ws')
const Config = require('../config.jsx')
const ClientWebSocket = new WebSocket.Server({ port: Config.mauth.port})

ClientWebSocket.on("connection", (ws, req) => {
  if(!req.headers.token) return ws.close()
  if(req.headers.token != '123') return ws.close()
  ws.send('{characters: 1, 2 ,3}')
  console.log('New Client Connected')
  ws.on("message", (msg) => {
      if(msg == 'getChtr'){
        //Get Character Info (Inventory, etc...)
      }
      if(msg == 'getCampaignInfo'){
        //Get info of the actual Campaign
      }
      if(msg == 'getVault'){
        //Get info of the items of the Vault
      }
      if(msg == 'createChtr'){
        //Get Morph Targets Value and Model Seed ID
        //Save to Blockchain and take credits from player
      }
      if(msg == 'moveItemToInventory'){
        //Move Items From Vault To Inventory
      }
      if(msg == 'moveItemFromInventory'){
        //Move Items From Inventory to Vault
      }
      if(msg == 'updateSkill'){
        //Update Skill from Skill Tree
      }
      if(msg == 'resetSkillTree'){
        //Reset Skill Tree for a small fe
      }
      if(msg == 'changeChtrName'){
        //Change name of the character. First time is free
      }
      if(msg == 'getServers'){
        //Get Dedicated Servers
        /*
        {
          eu: {
            0: {
              name: "",
              players: "",
              ip: "",
            }
          },
          usa:
        }
        */
      }
      if(msg == 'CLANS'){
        //TO BE DEVELOPED
      }
  })
  ws.on("close", () => console.log(`Client was disconnected`))
  ws.onerror = () => console.log(`Some Error has ocurred!`)
})
  
console.log(`The WebSocket Client is running on port ${Config.mauth.port}`);