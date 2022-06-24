const WebSocketClient = require('ws')

const ws = new WebSocketClient('ws://localhost:9090');
setTimeout(() => {
    if(ws.readyState === 1) {
        console.log('Its working')
        ws.send('test')
    }
}, 2000)
