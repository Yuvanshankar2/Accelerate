

import React from 'react';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Navbar from './navbar';
import Home from '../Home';
import Auth from '../Auth';
import CreateRoom from '../CreateRoom';
import JoinRoom from '../JoinRoom';
import Chat from '../ChatRoom';
import Sign from '../Sign';
import About from "../About";
import StudentList from "../StudentList"

function Start (){
  return (
    <Router>
        <Navbar />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/sign' element={<Sign />} />
          <Route path='/auth' element={<Auth />} />
          <Route path='/create' element={<CreateRoom />} />
          <Route path='/join' element={<JoinRoom />} />
          <Route path='/live' element={<Chat />} />
          <Route path='/roster' element={<StudentList />} />
      </Routes>
    </Router>
  );
};

export default Start;
