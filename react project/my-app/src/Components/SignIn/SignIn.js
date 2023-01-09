import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignIn.css";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    const allUsers = JSON.parse(localStorage.getItem("userInfo"));
    allUsers.forEach((item) => {
      if (item.email === email && item.password === password) {
        navigate("/");
      } else {
        setError(!error);
      }
    });
    e.preventDefault();
  };
  return (
    <>
      <div className="form-wrapper">
        {error && (
          <div className="signin-error">
            <p>Email and Password Combinations do not match!</p>
          </div>
        )}
        <div className="signin-form-heading">
          <h1>Sign In</h1>
        </div>
        <div className="signin-form">
          <form action="" onSubmit={handleSubmit}>
            <div className="signin-field">
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="signin-field">
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="signin-btn">
              <button>Sign in</button>
            </div>

            <div className="signup-link">
              <p>
                Don't have an account? <Link to="/sign-up">SIGNUP HERE</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;
