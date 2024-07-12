import React from 'react'
import "./Home.css"
import { useNavigate } from 'react-router-dom';
function Home() {
    const navigate = useNavigate();
  return (
    <div className="body">
        <div className="container">
        <h1 className="welcome-message" >ACCELERATE</h1>
        <button className='start-button'  onClick={()=> navigate("/auth")}>Start</button>
        </div>
    </div>
  )
}

export default Home