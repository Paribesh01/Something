import WebSocket from "ws";
import { v4 as uuidv4 } from 'uuid';

export class User {
    public ws: WebSocket
    public userid: string
    constructor(ws: WebSocket) {
        this.ws = ws
        this.userid = uuidv4()
    }
}

