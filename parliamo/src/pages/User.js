import React, { useState, useEffect } from "react";

function UserData() {
  const [user, setUser] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    fetch("http://localhost:8080/user/getUser/morran")
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch(error => setError(error));
      
  }, []);

  if (error) {
    return <div>An error occurred: {error.message}</div>;
  }

  if (!user) {
    return <div>Loading...</div>;
  }
  console.log(user);
  return (
    <>
    <h1>Hej</h1>
    <h2>{user.username}</h2>
    </>
    
  );
}

export default UserData;