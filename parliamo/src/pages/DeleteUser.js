import React, { useEffect } from "react";
import Logout from "../Components/Logout";

function DeleteUser(){

    var localUser = localStorage.getItem('user');
    if (localUser) {
      localUser = JSON.parse(localUser);  
    }
    var userId = localUser.userId;
    console.log(userId)

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const token = localStorage.getItem("token");
    const requestOptions = {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`}
    }

    useEffect(() => {
          fetch(`http://localhost:8080/user/delete/${userId}`, requestOptions)
            .then((response) => response.json())
            .catch((error) => console.error(error));
      }); 



    return(
      <div>
        <p>Your account hass been removed</p>
        <Logout />
      </div>
        
    );
}

export default DeleteUser;