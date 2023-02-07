import React, { useState, useEffect } from "react";
import Logout from "../Components/Logout";

function UserData() {
  const [user, setUser] = useState('');
  const [data, setData] = useState('');
  const [error, setError] = useState('');

  var localUser = localStorage.getItem('user');
  if (localUser) {
    localUser = JSON.parse(localUser);  
  }

  // useEffect(() => {
  //   fetch(`http://localhost:8080/user/getUser/${localUser.userId}`)
  //     .then((response) => response)
  //     .then((data) => setUser(data))
  //     .catch(error => setError(error));
  //     console.log(id)
  // }, []);


  
  if (error) {
    return <div>An error occurred: {error.message}</div>;
  }

  return (
    <>
    <h1>Hej</h1>
    <h2>{localUser.username}</h2>
    <h2>{localUser.userId}</h2>

    <button>
    <a href="/conversations">Conversations</a>
    </button>

    <button>
    <a href="/deleteUser">Delete user</a>
    </button>
    
    <Logout></Logout>

    </>
  );
}

export default UserData;