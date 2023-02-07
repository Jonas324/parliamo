import React, { useState, useEffect } from "react";

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

      const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        localStorage.removeItem("chosenUser");
        window.location.href = "/";
      };

    return(
        <div>
            <h1>User deleted</h1>
            <button onClick={logout}>
               <a href="/Login">Logga in</a>
            </button>
        </div>
    );
}

export default DeleteUser;