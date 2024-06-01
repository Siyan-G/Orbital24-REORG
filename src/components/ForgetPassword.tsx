import React, { useState, ChangeEvent } from "react";
import REORGLogo from "../assets/REORGLogo.svg";
import { Link } from "react-router-dom";
import "../styles/ForgetPassword.css";
import { SERVER_URL } from "../constants";

const ForgetPassword: React.FC = () => {
  const [username, setInputUsername] = useState("")
  const [email, setInputEmail] = useState("")
  const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) =>
    setInputUsername(event.target.value);

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) =>
    setInputEmail(event.target.value);
  
  function handleSubmit(): void {
    fetch("http://localhost:8080/api/user/email/gsy7418@gmail.com", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify("username")
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      });
  }

  return (
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
