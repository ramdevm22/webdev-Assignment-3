import React, { useState } from "react";
import axios from "axios";
import Header from "../../components/Header";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });
      localStorage.setItem("token", res.data.token);
      setMessage("Login successful");
    } catch (err) {
      setMessage(err.response.data.message);
    }
  };

  return (
    <>
      <Header></Header>
      <div className="login-content">
        <h2>Login</h2>
        <img src="./images/sky.jpg" alt="" />
        <form onSubmit={handleSubmit}>
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
          <button type="submit">Login</button>
          <div className="new-customer">
            New Customer?
            <Link to="/Register" className="register-link">
              register
            </Link>
          </div>
        </form>
        {message && <p>{message}</p>}
      </div>
    </>
  );
};

export default Login;
