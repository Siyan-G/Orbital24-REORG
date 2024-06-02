import React, { useState, ChangeEvent } from "react";
import REORGLogo from "../assets/REORGLogo.svg";
import "../styles/ForgetPassword.css";
import { SERVER_URL } from "../constants";
import { Link } from "react-router-dom";

const ForgetPassword: React.FC = () => {
  const [username, setInputUsername] = useState<string>("");
  const [email, setInputEmail] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  
  const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) =>
    setInputUsername(event.target.value);

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) =>
    setInputEmail(event.target.value);

  const handleNewPasswordChange = (event : ChangeEvent<HTMLInputElement>) => 
    setNewPassword(event.target.value);
  
  async function handleSubmit(e: React.FormEvent): Promise<void> {
    e.preventDefault();

    try {
      const response = await fetch(SERVER_URL + "/" + email, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      const name = data.username;
      console.log(name);
    } catch (error) {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
    }
  }

  function handleReset() : void {
    
  }

  return (
    <div>
      <div className="forget-container" id="forget-container">
        <img className="logo" id="logo" src={REORGLogo} alt="REORG Logo" />
        <span>Please enter the username and email registered:</span>
          <form>
            <input
              type={"text"}
              value={username}
              onChange={handleUsernameChange}
              placeholder={"Username"}
            />
            <input
              type={"email"}
              value={email}
              onChange={handleEmailChange}
              placeholder={"Email"}
            />
            <button className="submit" onClick={handleSubmit}>
              Submit
            </button>
          </form>
        <Link to={"/"}>
          <button className="go-back">Back to Log In</button>
        </Link>
      </div>
      <div>
        <div className="reset-container" id="reset-container">
          <img className="logo" id="logo" src={REORGLogo} alt="REORG Logo" />
          <span>Please enter new password:</span>
          <form>
            <input
              type={"text"}
              value={newPassword}
              onChange={handleNewPasswordChange}
              placeholder={"New Password"}
            />
            <button className="submit" onClick={handleReset}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
