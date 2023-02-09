import React, {useEffect, useState} from 'react'
import Logout from "../Components/Logout"


function Conversations(){

  const [userList, setUserList] = useState();
  const [chosenUser, setChosenUser] = useState('');

  var localUser = localStorage.getItem('user');
  if (localUser) {
    JSON.parse(localUser);  
  }

  const token = localStorage.getItem("token");

    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    }
   
  useEffect(() => {
      fetch("http://localhost:8080/user/getAllUsers", requestOptions)
        .then((response) => response.json())
        .then((data) => setUserList(data))
        .catch((error) => console.error(error));
  }); 

  const saveData = () => {
    localStorage.setItem('chosenUser', chosenUser);
  };


    return(
    <div className="App">
      <h1>Pick user to chatt with</h1>
      <p> Chosen user to chat with: {chosenUser}</p>
    
    <button onClick={saveData}>
      <a href='/message'> Start chat </a>
    </button>

    <select
            value="username"
            className="form-control"
            onChange={(event) => {
              setChosenUser(event.target.value);
              localStorage.setItem("chosenUser", chosenUser);
            }}
          >
            <option>Välj en användare</option>
            {userList && userList.map((item) => (
              <option key={item.id} value={item.id}>
                {item.username}
              </option>
            ))}
          </select>
          <Logout></Logout>
    </div>
    )
};
  export default Conversations


  

