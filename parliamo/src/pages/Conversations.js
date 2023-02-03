import React from 'react'
import { useEffect, useState } from 'react';


function Conversations(){


  
const [userList, setUserList] = useState();

  var localUser = localStorage.getItem('user');
  if (localUser) {
    localUser = JSON.parse(localUser);  
  }
  var userId = localUser.userId;
  console.log(userId)

 
   
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "/login";
    } else {
      var fetchAllUsers = fetch(`http://localhost:8080/user/getAllUsers`)
        .then((response) => response.json())
        .then((data) => setUserList(data))
        .catch((error) => console.error(error));
      console.log(userList);
      }
  }, [userList]); 

  var usersFlatAndSorted = userList ? userList.flat(1) : [];
  console.log(usersFlatAndSorted);

  const [selectedUsers, setSelectedUsers] = useState(userList[0].userId);
  const handleChange = event => {
    setSelectedUsers(event.target.value);

//TODO Få till dropdown meny där man kan se och välja vilken motpart man vill chatta med i chatpage.

  };
    return(
    <div className="App">
    <select value={selectedUsers} onChange={handleChange}>
      {userList.map(option => (
        <option key={option.id} value={option.value}>
          {option.value}
        </option>
      ))}
    </select>
    </div>
    )
}
  export default Conversations


  

