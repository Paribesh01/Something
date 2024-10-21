import { WebSocketServer } from 'ws';
import { GameManager } from './GameManager';

const wss = new WebSocketServer({ port: 8081 });
console.log("wss");
wss.on('connection', function connection(ws) {
    console.log("connected");
    GameManager.getInstance().addUser(ws);

    ws.on('close', () => {
        console.log("disconnected");

    });

    ws.on('error', (error) => {
        console.error("WebSocket error:", error);
    });
});
