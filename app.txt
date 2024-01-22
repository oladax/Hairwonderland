import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  signUpWithEmailAndPassword,
  signInWithGoogle,
  checkIfUserExists,
} from "../firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import google from "./google.png";

function Registration() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [showError, setShowError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [userExists, setUserExists] = useState(false); // Added state for user existence

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const handleSignUp = async () => {
    setError(null);
    setShowError(false);
    setUserExists(false); // Reset user existence state

    if (!email || !password) {
      setShowError(true);
      return;
    }

    try {
      // Your logic to check if the user exists with the given email
      const isUserExists = await checkIfUserExists(email);

      if (isUserExists) {
        setUserExists(true);
        alert(
          "User with this email already exists. Please use a different email."
        );
        navigate("/Login");

      } else {
        await signUpWithEmailAndPassword(email, password);
        navigate("/");
      }
    } catch (error) {
      alert(
        "User with this email already exists. Please use a different email."
      );
    }
  };

  const handleSignUpWithGoogle = async () => {
    setError(null);
    setShowError(false);

    try {
      await signInWithGoogle();
      navigate("/");
    } catch (error) {
      setError(`Error signing up with Google: ${error.message}`);
    }
  };

  return (
    <div className="login">
      <div className="login-con">
        <div className="login-details">
          <h2>CREATE ACCOUNT</h2>
          <p>If you want to create an account with us, please enter.</p>
          <div className="input-div">
            <div className="email-container">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
                style={{
                  border:
                    (showError || userExists) && !email ? "2px solid red" : "",
                }}
              />
              <span>
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
            </div>
            {(showError || userExists) && !email && (
              <span className="validation-error">
                {userExists
                  ? "User with this email already exists."
                  : "Email is required."}
              </span>
            )}

            <div className="password-input-container">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
                style={{
                  border:
                    (showError || userExists) && !password
                      ? "2px solid red"
                      : "",
                }}
              />

              <FontAwesomeIcon
                className="fakey"
                icon={showPassword ? faEyeSlash : faEye}
                onClick={togglePasswordVisibility}
              />
            </div>
            {(showError || userExists) && !password && (
              <p className="validation-error">
                {userExists
                  ? "User with this email already exists."
                  : "Password is required."}
              </p>
            )}
          </div>

          <div className="btn-con">
            <button onClick={handleSignUp}>Sign Up</button>
          </div>

          <div className="registercontainer">
            <p>
              Already have an account? <Link to="/login">Login here</Link>
            </p>
          </div>

          <p className="OR">Or</p>

          <div className="google-div">
            <button onClick={handleSignUpWithGoogle}>
              Sign Up with Google
            </button>

            <img src={google} alt="google" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;
