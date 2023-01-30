import React, {useState} from "react";

export const Login = (props) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return(

        <>
        <form>
            <label htmlFor="username">username</label>
            <input type="username" onChange={(e) => setUsername(e.target.value)} placeholder="write username" id="username" name="username"/>
            <label htmlFor="password">password</label>
            <input type="passsword" onChange={(e) => setPassword(e.target.value)} placeholder="write password" id="password" name="password"/>
            <button>Log in</button>
        </form>
        <a href="/register">Registrera</a>
        </>
        
    )
}

export default Login;