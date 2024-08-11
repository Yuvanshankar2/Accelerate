/**
 * This component is designed for teachers. As a teacher, you will be asked for your name and the subject you teach. On entering these details,
 * you will be directed to a page where you will be asked to provide a name for the group chat.  
 */

import React from 'react'
import {useState} from 'react'
import './App.css'
import CreateRoom from './CreateRoom';
function Sign() {
    const[name,setName]= useState("");
    const[subject,setSubject]= useState("");
    const[show,setShow]=useState(false);
  return (
    <div>
    {!show?(<div className="body"><div className="ChatBox">
        <h1>Enter your details</h1>
            <input type="text" placeholder='Enter your name' value={name} onChange={(event)=>{setName(event.target.value)}}/>
            <input type="text" placeholder='Enter the subject you specialize in' value={subject} onChange={(event)=>{setSubject(event.target.value)}}/>
            <button onClick={()=>{setShow(true)}}>Send</button>
    </div></div>):(<CreateRoom name={name} subject={subject}/>)}
    </div>
  )
}

export default Sign