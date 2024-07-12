// This page only wants to check if you are a student or teacher. If teacher, it will take you to the reguster page. If student, it will take 
// you to the join room page.
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