/**
 * This component is for students. As a student, you will be asked to enter your name. On doing so, you will be directed to the chat group
 * you are assigned to based off your performance in class and the amount of experience you have in your major. 
 */
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