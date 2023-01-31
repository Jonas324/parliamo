import React, {useState} from "react";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './Navbar'
import Welcome from './pages/Welcome'
import Register from './pages/Register';
import Login from './pages/Login';

function App() {

  return (
    
    <Router>
      <div className="App">
        <div className="content">
          <Routes>
            <Route path="/" element={<Welcome />}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<Login />}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;