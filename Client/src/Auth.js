/**
 * This component checks your identity. If you are a student, you have to enter your name and you will be directed to your assigned 
 * chat group. If you are a teacher, you will be directed to a page where you will be asked to create a group with students struggling with the subject
 * you specialize in.
 */
import React from 'react'
import { useState } from 'react'
import JoinRoom from './JoinRoom'
import Sign from './Sign'
import "./Auth.css"
function Auth() {
    const[page,setPage] = useState(false);
    const[component,setComponent] = useState(false);
  return (
    <div>
        {!page?
        (<div className="body">
            <div className="container">
             <h1 className="header"> You are logging in as....</h1>
             <div className="options">
             <button className="button" onClick={()=>{setComponent(true); setPage(true)}}>Teacher</button>
             <button className="button" onClick={()=>{setComponent(false); setPage(true)}}>Student</button>
             </div>
             </div>
             </div>
             ):(
                component?<Sign/>: <JoinRoom/>)}
    </div>
  )
}

export default Auth