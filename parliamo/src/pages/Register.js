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
    
  
    function handleSubmit(event) {
        event.preventDefault();

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const payload = JSON.stringify({
                username: username,
                password: password,
                "isAccountNonExpired": "true",
                "isAccountNonLocked": "true",
                "isCredentialsNonExpired": "true",
                "isEnabled": "true"
        });

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: payload,
            redirect: 'follow'
        }
   
      fetch('http://localhost:8080/user/register', requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));      
    }

  return (
    <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input value={username} onChange={(e) => setUsername(e.target.value)} 
              type="username" placeholder="your username" />
            <label htmlFor="password">Password</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} 
            type="password" placeholder="*******"/>
            <button type="submit">Register User</button>
        </form>
        <a href="/login">Logga in</a>
    </>
  );
}

export default Register;