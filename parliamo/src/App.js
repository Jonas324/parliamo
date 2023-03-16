import React from "react";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Welcome from './pages/Welcome'
import Register from './pages/Register';
import Login from './pages/Login';
import User from './pages/User';
import Chatpage from "./pages/Chatpage";
import Conversations from "./pages/Conversations";
import DeleteUser from "./pages/DeleteUser";
import ReadAllMessages from "./pages/ReadAllMessages";

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
            <Route path="/conversations" element={<Conversations />}/>
            <Route path="/deleteUser" element={<DeleteUser />}/>
            <Route path="/readAllMessages" element={<ReadAllMessages />}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;