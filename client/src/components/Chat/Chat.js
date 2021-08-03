import React,{useState,useEffect} from 'react';
import queryString from 'query-string';
import io from "socket.io-client";
let socket;
const ENDPOINT='localhost:5000';
const Chat = ({location}) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    useEffect(()=>{
        const {name,room}=queryString.parse(location.search);
        socket= io(ENDPOINT);
        setName(name);
        setRoom(room);
        console.log(socket);
        socket.emit('join',{name,room});
    },[ENDPOINT,location.search]);
    return (
        <div>
            Chat
        </div>
    )
}

export default Chat