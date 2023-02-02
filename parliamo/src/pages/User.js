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

 /*  if (!data) {
    return <div>Loading...</div>;
  } */

  console.log("localUser" + localUser);
  console.log(localUser.userId);

  return (
    <>
    <h1>Hej</h1>
    <h2>{localUser.username}</h2>
    <h2>{localUser.userId}</h2>
    </>
  );
}

export default UserData;