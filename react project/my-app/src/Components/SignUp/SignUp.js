import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    const values = { email: email, password: password };
    const existingValues = JSON.parse(localStorage.getItem("userInfo"));
    if (existingValues === null) {
      localStorage.setItem("userInfo", JSON.stringify([values]));
    } else {
      localStorage.setItem(
        "userInfo",
        JSON.stringify([...existingValues, values])
      );
    }
    navigate("/sign-in");
    e.preventDefault();
  };
  return (
    <div className="form-wrapper">
      <div className="signup-heading">
        <h1>Sign Up</h1>
      </div>
      <div className="signup-form">
        <form action="" onSubmit={handleSubmit}>
          <div className="signup-input-field">
            <input
              type="text"
              placeholder="Name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              name="name"
              required
            />
          </div>
          <div className="signup-input-field">
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              name="email"
              required
            />
          </div>
          <div className="signup-input-field">
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              name="password"
              required
            />
          </div>
          <div className="signup-input-field">
            <input
              type="password"
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
              name="confirm_password"
              required
            />
          </div>
          <div className="signup-btn">
            <button>Sign Up</button>
          </div>

          <p className="signup-acc-created">
            Account Already Exists? <Link to="/sign-in"> LOGIN HERE</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
