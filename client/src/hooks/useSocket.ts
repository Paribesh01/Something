import { useEffect, useState } from "react";

export const useSocket = () => {
    const [socket, setSocket] = useState<WebSocket | null>(null);

    useEffect(() => {
        console.log("useSocket");
        const socket = new WebSocket('ws://localhost:8081');
        setSocket(socket);

        socket.onopen = () => { console.log("socket open"); }
        socket.onclose = () => { console.log("socket close"); }
        socket.onmessage = (event) => {
            const data = JSON.parse(event.data);
            messageHandler(data);
        }

        return () => {
            socket.close();
        };
    }, []);

    const messageHandler = (data: any) => {
        console.log("messageHandler");
        console.log(data);
    };

    const sendMessage = (message: string) => {
        if (socket && socket.readyState === WebSocket.OPEN) {
            socket.send(JSON.stringify({ action: 'sendMessage', message }));
        }
    };

    return { socket, sendMessage };
};
