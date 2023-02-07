import React, { useState, useEffect } from "react";
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

    const requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
    }

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
          window.location.href = "/login";
        } else {
          var fetchDeleteUser = fetch(`http://localhost:8080/user/delete/${userId}`, requestOptions)
            .then((response) => response.json())
            .catch((error) => console.error(error));
          }
      }, []); 



    return(
        <Logout />
    );
}

export default DeleteUser;