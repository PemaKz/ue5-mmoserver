const WebSocketServer = require('ws')

const serverPort = 9090
const clientsPort = 9091


const ServerWebSocket = new WebSocketServer.Server({ port: serverPort})
const ClientWebSocket = new WebSocketServer.Server({ port: clientsPort})

const connectedPlayers = []

ServerWebSocket.on("connection", socket => {
    connectedPlayers.push(connectedPlayers.length + 1)
    console.log(`Server Connected`)
    socket.on('message', (data) => {
        const info = JSON.parse(`${data.toString()}`)
        if(info.type == 'ZoneExit') return console.log(`Player exited from ${info.type}`)
        if(info.type == 'ZoneDetection') return console.log(`Player entered to ${info.type}`)
    })
    socket.on("close", () => {
        console.log(`Server was disconnected`)
    })
    socket.onerror = () => console.log(`Some Error has ocurred!`)
})

console.log(`The WebSocket server is running on port ${serverPort}`);

ClientWebSocket.on("connection", ws => {
    console.log('New Client Connected')
    ws.on("message", data => console.log(`Client has sent the following message: ${data}`))
    ws.on("close", () => console.log(`Client was disconnected`))
    ws.onerror = () => console.log(`Some Error has ocurred!`)
})

console.log(`The WebSocket server is running on port ${clientsPort}`);