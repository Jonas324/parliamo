import React, { useState, useEffect } from "react";

function UserData() {
  const [data, setData] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    fetch("http://localhost:8080/user")
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => setError(error));
  }, []);

  if (error) {
    return <div>An error occurred: {error.message}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <ul>
      {data.map(item => (
        <li key={item.id}>{item.username}</li>
      ))}
    </ul>
  );
}

export default UserData;