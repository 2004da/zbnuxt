const { createServer } = require('http');
const { WebSocketServer } = require('ws');

const server = createServer();

const wss = new WebSocketServer({ server });

wss.on('connection', (ws) => {
  console.log('WebSocket connection established');
  ws.on('message', (message) => {
    console.log('Received:', message);
  });
  ws.send('Hello from server');
});

server.listen(3001, () => {
  console.log('WebSocket server is running on port 3001');
});
