import React from 'react'
import { useEffect, useState } from 'react';
import Logout from "../Components/Logout"


function Conversations(){

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userList, setUserList] = useState();
  const [chosenUser, setChosenUser] = useState('');

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
      var fetchAllUsers = fetch("http://localhost:8080/user/getAllUsers")
        .then((response) => response.json())
        .then((data) => setUserList(data))
        .catch((error) => console.error(error));
      }
  }, []); 

  const saveData = () => {
    localStorage.setItem('chosenUser', chosenUser);
  };

 /*  var usersFlatAndSorted = userList ? userList.flat(1) : [];
  console.log(usersFlatAndSorted); */

/*   const [selectedUsers, setSelectedUsers] = useState(userList.userId);
  const handleChange = event => {
    setSelectedUsers(event.target.value); */

//TODO Få till dropdown meny där man kan se och välja vilken motpart man vill chatta med i chatpage.


    return(
    <div className="App">
      <h1>Pick user to chatt with</h1>
      <p> Chosen user to chat with: {chosenUser}</p>
    
    <button onClick={saveData}>
      <a href='/message'> Start chat </a>
    </button>

    <select
            className="form-control"
            onChange={(event) => {
              setChosenUser(event.target.value);
              localStorage.setItem("chosenUser", chosenUser);
            }}
          >
            <option selected="true" disabled="disabled">
              Username
            </option>
            {userList && userList.map((item, index) => (
              <option key={index} value={item.id}>
                {item.username}
              </option>
            ))}
          </select>
          <Logout></Logout>
    </div>
    )
};
  export default Conversations


  

