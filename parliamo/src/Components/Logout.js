import React from 'react'

function Logout() {

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("chosenUser");
    window.location.href = "/";
  };

  return (
    <button
    onClick={logout}
  >
  Sign out
  </button>
  )
}

export default Logout;