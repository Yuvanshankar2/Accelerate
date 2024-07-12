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