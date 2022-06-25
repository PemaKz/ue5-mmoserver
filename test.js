const WebSocketClient = require('ws')

const ws = new WebSocketClient('ws://localhost:8042', {headers: {token: '123'}});

ws.addEventListener('message', function (event) { 
    console.log('Message from server ', event.data); 
});

setTimeout(() => {
    if(ws.readyState === 1) {
        console.log('Its working')
        ws.send('test')
    }
}, 2000)
