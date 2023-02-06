import React, { useState, useEffect } from "react";

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

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("chosenUser");
    window.location.href = "/";
  };

  return (
    <>
    <h1>Hej</h1>
    <h2>{localUser.username}</h2>
    <h2>{localUser.id}</h2>

    <button>
    <a href="/conversations">Conversations</a>
    </button>
    
    <button
      onClick={logout}
    >
    Logga ut
    </button>

    </>
  );
}

export default UserData;