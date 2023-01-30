import React, {useState} from 'react';
import Axios from 'axios';

function Register(props) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    var jsonData =
          {
              "username":username,
              "password":password,
              "isAccountNonExpired":"true",
              "isAccountNonLocked":"true",
              "isCredentialsNonExpired":"true",
              "isEnabled":"true"
          };
    
  
    function handleSubmit() {
      console.log(jsonData)
      // Send data to the backend via POST
      fetch('http://localhost:8080/user/register', {  // Enter your IP address here
  
        method: 'POST', 
        mode: 'cors', 
        body: JSON.stringify(jsonData) // body data type must match "Content-Type" header

      },console.log("data sent"))      
    }

  return (
    <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input value={username} onChange={(e) => setUsername(e.target.value)} type="username" placeholder="your username" />
            <label htmlFor="password">Password</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="*******"/>
            <button type="submit">Register User</button>
        </form>
        <a href="/login">Logga in</a>
    </>
  );
}

export default Register;