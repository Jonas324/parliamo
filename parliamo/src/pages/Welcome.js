import React from "react";
import { Link, Route } from "react-router-dom";
import Register from "./Register";

function Welcome() {

  return (
    <div>
      <h1>Welcome to Parliamo</h1>
      <p>Parliamo means we speak</p>


      {/* <Route path="./pages/Welcomejs" component={Register} /> */}

      <div>
        <a href="" target="Register">
          Register here
        </a>
        <a href="./Login" target="Login">
          Login here
        </a>
      </div>
    </div>
  );
}

export default Welcome;
