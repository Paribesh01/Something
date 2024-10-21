import WebSocket from "ws"
import { User } from "./SocketManager"

interface UserType {
    ws: WebSocket
    userid: string
}



export class GameManager {

    public static instance: GameManager



    private constructor() {

    }

    public static getInstance() {
        if (!GameManager.instance) {
            GameManager.instance = new GameManager()
        }
        return GameManager.instance
    }


    addUser(ws: WebSocket) {
        const user = new User(ws)
        console.log(user.userid)
        this.addHandeler(user)

    }
    addHandeler(user: User) {
        user.ws.on('message', function message(data) {
            console.log('message')
            console.log(JSON.parse(data as any))
        });
    }




}