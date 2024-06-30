import React from "react";
import Header from "../../components/Header";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <Header></Header>
      <div className="login-content">
        <h2>Sign In</h2>
        <img src="./images/sky.jpg" />

        <p>Email Address</p>
        <div className="input">
          <input type="text" placeholder="Enter Email" />
        </div>
        <p>Password</p>
        <div className="input">
          <input type="text" placeholder="Enter Password" />
        </div>

        <div className="button">
          <button>Sign In</button>
        </div>
        <div className="new-customer">
          New Customer?{" "}
          <Link to="/Register" className="register-link">
            Register
          </Link>
        </div>
      </div>
    </>
  );
};

export default Login;
