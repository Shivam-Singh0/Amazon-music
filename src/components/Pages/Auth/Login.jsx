import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../utils/firebas";
import "./AuthForm.css";
import Header from "../../Header/Header";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setMessage("User logged in successfully");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      console.error("Error occurred", error);
      setError("Failed to log in. Please try again.");
    }
  };

  return (
    
    <div>
        <div>
            <Header />
        </div>
        <div className="form-container">
      {message && <div className="message">{message}</div>}
      <form onSubmit={handleSubmit} className="form">
        <div className="input-container">
          <input
            type="text"
            required
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-container">
          <input
            type="password"
            required
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="button-container">
          <button type="submit">Login to your account</button>
        </div>
        {error && <div className="error-message">{error}</div>}
        <div className="account-message">
          Don't have an account?
          <button
            className="login-button"
            onClick={() => navigate("/signup")}
            type="button"
          >
            Signup
          </button>
        </div>
      </form>
    </div>
    </div>
  );
}

export default Login;
