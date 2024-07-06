import React, { useState } from "react";
import axios from "axios";
import Header from "../../components/Header";
import { Link } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", {
        username,
        email,
        password,
      });
      localStorage.setItem("token", res.data.token);
      setMessage("Registration successful");
    } catch (err) {
      setMessage(err.response.data.message);
    }
  };

  return (
    <>
      <Header></Header>
      <div className="login-content register-content">
        <h2>Register</h2>
        <img src="./images/sky.jpg" alt="" />
        <form onSubmit={handleSubmit}>
          <p>Username</p>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <p>Email</p>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p>Password</p>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Register</button>
          <div className="new-customer">
            Already have an account?
            <Link to="/Login" className="login-link">
              login
            </Link>
          </div>
        </form>
        {message && <p>{message}</p>}
      </div>
    </>
  );
};

export default Register;
