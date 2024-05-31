import React, { useState, ChangeEvent } from "react";
import REORGLogo from "../assets/REORGLogo.svg";
import { Link } from "react-router-dom";
import "../styles/ForgetPassword.css";

const ForgetPassword: React.FC = () => {
  const [inputUsername, setInputUsername] = useState("")
  const [inputEmail, setInputEmail] = useState("")
  const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) =>
    setInputUsername(event.target.value);

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) =>
    setInputEmail(event.target.value);
  function handleSubmit(): void {}


  return (
    <div className="forget-container" id="forget-container">
      <img className="logo" id="logo" src={REORGLogo} alt="REORG Logo" />
      <span>Please enter the username and email registered:</span>
      <form>
        <input
          type={"text"}
          value={inputUsername}
          onChange={handleUsernameChange}
          placeholder={"Username"}
        />
        <input
          type={"email"}
          value={inputEmail}
          onChange={handleEmailChange}
          placeholder={"Email"}
        />
        <button className="submit" onSubmit={handleSubmit}>
          Submit
        </button>
      </form>
      <Link to={"/"}>
        <button className="go-back">Back to Log In</button>
      </Link>
    </div>
  );
};

export default ForgetPassword;
