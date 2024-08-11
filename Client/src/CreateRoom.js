/**
 * This component is designed for teachers. As a teacher, you will be asked to provide a name for the group chat. On doing so, you will be directed to the group chat where you wait for other student to join in.
 */
import React from 'react';
import "./App.css";
import { useState } from 'react';
import io from 'socket.io-client';
import Chat from './ChatRoom.js'
const socket = io.connect('http://localhost:3001');
const CreateRoom = ({name , subject }) => {
   const[roomName,setRoomName] = useState("")
   const [showChat, setShowChat] = useState(false);
  const create = async () => {
    console.log('The admin has entered')
    try {
      const roomMetaData = {
        Name: roomName, 
        Subject: subject 
      };
      socket.emit("create_room",roomMetaData);
      console.log(`Room ${roomMetaData.Name} has been created`);
    } catch (error) {
      console.error('Error:', error);
    }
    setShowChat(true)
  };

  return (
    <div className="body">
        {!showChat?(
    <div className="ChatBox">
      <h1>Create Room</h1>
      <input value ={roomName} placeholder="Enter your room name" onChange={(event)=>{setRoomName(event.target.value)}}/>
      <button onClick={create}>Create Room</button>
    </div>) :( <Chat socket={socket} username={name} room={roomName} />)} 
    </div>
  );
};

export default CreateRoom;
