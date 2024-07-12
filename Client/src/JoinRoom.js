// This is for students only. They have to enter their school id. 
// Once they do, it should be sent to the server.
// The event listener should loop through the rooms and find the room which contains the id. 
// Once it does, it has to join the client to that room. 
// Finally, this page has to navigate to the chat page with the socket, and name passed on.
import React from 'react'
import "./Join.css";
import {useState} from 'react'
import io from 'socket.io-client'
import Chat from './ChatRoom'

function Join() {
    const[name,setName] = useState("")
    const[socket,setSocket]= useState(null)
    const [showChat, setShowChat] = useState(false);
    const[roomName,setRoomName] = useState("");
    const joinRoom = async()=>{
        const socket = io.connect('http://localhost:3001')
        setSocket(socket);
        socket.emit('join_room', name)
        socket.on('joined_room',(data)=>{
            setRoomName(data);
        })
        setShowChat(true);
    }
  return (
    <div className="body">
        {!showChat?(
            <div className="wrapper">
            <div clasName="login-box">
                <h2 className="header">Find your group</h2>
    <input className="input" placeholder="Enter your name" value={name} onChange={(event)=>{setName(event.target.value)}}/>
    <button className="button" onClick={joinRoom}>Join your group</button></div></div>):(<Chat socket={socket} username={name} room={roomName} />)
        }
    </div>
  )
}

export default Join 