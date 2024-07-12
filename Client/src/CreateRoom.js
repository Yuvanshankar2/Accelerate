// When you click on the button, it should call create(). 
// In create(), get the specialization subject from the teacher database using the name props. 
// Pass that in the student database, and get the students who scored below in that very subject. This should return a list.
// Once you get the list of users who have scored below 50 marks through mongodb, connect to the server, and you emit the details with a create room event. A room will be created in the server.
// Navigate to the chat page where you pass in the socket, name, and room.
// Extra: Design the page and fields
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
