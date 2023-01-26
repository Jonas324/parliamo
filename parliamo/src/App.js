import { useEffect, useState, Component } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  
  return (
    <div>
      <Welcome />
    </div>
  );
}

export default App;

// {
//   /* {conversation.map((item) => (
//           <p key={item.posted}>{item.content}</p>
//         ))} */
// }
