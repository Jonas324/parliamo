import React, {useState} from "react";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './Navbar'
import Welcome from './pages/Welcome'
import Register from './pages/Register';
import Login from './pages/Login';
import User from './pages/User';
import Chatpage from "./pages/Chatpage";

function App() {

  return (
    
    <Router>
      <div className="App">
        <div className="content">
          <Routes>
            <Route path="/" element={<Welcome />}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/user" element={<User />}/>
            <Route path="/message" element={<Chatpage />}/>

          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;