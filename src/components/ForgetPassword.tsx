import React from "react";
import REORGLogo from "../assets/REORGLogo.svg";
import { Link } from "react-router-dom";
import "../styles/ForgetPassword.css";

const ForgetPassword: React.FC = () => {
  function handleSubmit(): void {}
  return (
    <div className="forget-container" id="forget-container">
      <img className="logo" id="logo" src={REORGLogo} alt="REORG Logo" />
      <span>Please enter the email registered:</span>
      <form>
        <input type={"email"} placeholder={"Email"} />
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
