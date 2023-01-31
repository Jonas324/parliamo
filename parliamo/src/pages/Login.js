import React, {useState} from "react";

export const Login = (props) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(event){
        event.preventDefault();

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const payload = JSON.stringify({
            username: username,
            password: password
        })

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

    

    return(

        <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">username</label>
            <input type="username" onChange={(e) => setUsername(e.target.value)} 
                placeholder="write username" id="username" name="username"         
                />
            <label htmlFor="password">password</label>
            <input value={password} type="passsword" onChange={(e) => setPassword(e.target.value)}
                placeholder="write password" id="password" name="password" 
                />
            <button type="submit">Log in</button>
        </form>
        <a href="/register">Registrera</a>
        </>
        
    )
}

export default Login;