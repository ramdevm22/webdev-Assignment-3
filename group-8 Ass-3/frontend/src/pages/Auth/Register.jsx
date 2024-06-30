import React from "react";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <>
      <Header></Header>
      <div>
        <Header></Header>
        <div className="login-content register-content">
          <h2>Register</h2>
          <img src="./images/sky.jpg" />
          <p>Name</p>
          <div className="input">
            <input type="text" placeholder="Enter Your Name" />
          </div>

          <p>Email Address</p>
          <div className="input">
            <input type="text" placeholder="Enter Email" />
          </div>
          <p>Password</p>
          <div className="input">
            <input type="text" placeholder="Enter Password" />
          </div>
          <p>Confirm Password</p>
          <div className="input">
            <input type="text" placeholder="Confirm Password" />
          </div>
          <div className="button">
            <button>Sign In</button>
          </div>
          <div className="new-customer">
            Already have an account?
            <Link to="/Login" className="register-link">
              Login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
