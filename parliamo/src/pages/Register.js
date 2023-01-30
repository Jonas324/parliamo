import React, {useState} from 'react';

function Register(props) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    }
  return (
    <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input value={username} onChange={(e) => setUsername(e.target.value)} type="username" placeholder="your username" />
            <label htmlFor="password">Password</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="*******"/>
            <button type="submit">Log in</button>
        </form>
        <a href="/login">Logga in</a>
    </>
  );
}

export default Register;