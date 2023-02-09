import React from "react";
import Logout from "../Components/Logout";

function UserData() {

  var localUser = localStorage.getItem("user");
  if (localUser) {
    localUser = JSON.parse(localUser);
  }

  const adminPage =
    localUser.role === "ROLE_ADMIN" ? (
      <button>
        <a href="/readAllMessages">Message bank</a>
      </button>
    ) : null;

  return (
    <>
      <h1>Hej</h1>
      <h2>{localUser.username}</h2>
      <h2>{localUser.userId}</h2>

      <button>
        <a href="/conversations">Conversations</a>
      </button>

      <button>
        <a href="/deleteUser">Delete user</a>
      </button>

      <div>{adminPage}</div>

      <Logout></Logout>
    </>
  );
}

export default UserData;
