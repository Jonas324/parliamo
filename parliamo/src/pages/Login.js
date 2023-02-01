import { useState } from "react";

function Register(props) {

const [username, setUsername] = useState('');
const [password, setPassword] = useState('');

function handleSubmit(event) {
    event.preventDefault();

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const payload = JSON.stringify({
            username: username,
            password: password
    });

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: payload,
        redirect: 'follow'
    }

  fetch('http://localhost:8080/login', requestOptions)
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
        <button type="submit">
          <a href="/user">Logga in</a>
        </button>
    </form>
    <a href="/register">Register</a>
</>
);
}

export default Register;
