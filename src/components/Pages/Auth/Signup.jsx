import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../utils/firebas";
import Header from "../../Header/Header";
import "./AuthForm.css";

function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rpassword, setRpassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    if (password !== rpassword) {
      setError("Passwords do not match!");
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setMessage("Registered successfully! Redirecting...");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      console.error("Error occurred", error);
      setError("Failed to register. Please try again.");
    }
  };

  return (
    <div className="main-content">
      <Header />
    <div className="form-container">
      {message && <div className="message">{message}</div>}
      <form onSubmit={handleRegister} className="form">
        <div className="input-container">
          <input
            type="text"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-container">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="input-container">
          <input
            type="password"
            placeholder="Repeat Password"
            value={rpassword}
            onChange={(e) => setRpassword(e.target.value)}
            required
          />
        </div>
        <div className="button-container">
          <button type="submit">Create an account</button>
        </div>
        {error && <div className="error-message">{error}</div>}
        <div className="account-message">
          Already have an account?
          <button
            className="login-button"
            onClick={() => navigate("/login")}
            type="button"
          >
            Login
          </button>
        </div>
      </form>
    </div>
    </div>
  );
}

export default Signup;