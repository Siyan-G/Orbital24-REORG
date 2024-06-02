import React, { useState, ChangeEvent } from 'react';
import REORGLogo from '../assets/REORGLogo.svg';
import '../styles/LogInPage.css';
import { Link } from 'react-router-dom';
import { SERVER_URL } from '../constants';
import { METHODS } from 'http';
import { promises } from 'dns';

const LogInPage : React.FC = () => {
    //user default
    const [alias, setAlias] = useState("");
    const [colourPalette, setColourPalette] = useState("NORMAL");
    const [dateFormat, setDateFormat] = useState("standard");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let container = document.getElementById("container");

    const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) =>
      setUsername(event.target.value);

    const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) =>
      setEmail(event.target.value);

    const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) =>
      setPassword(event.target.value);

    function toggleLeft() : void {
        container = document.getElementById("container");
        if (container) {
            setUsername("");
            setEmail("");
            setPassword("");
            container.classList.remove('active');
        }
    }

    function toggleRight() {
        container = document.getElementById("container");
        if (container) {
            setUsername("");
            setEmail("");
            setPassword("");
            container.classList.add('active');
        }
    }

    function signUp() : void {
      setAlias(username);
      const newUser = {
        alias,
        email,
        password,
        colourPalette,
        dateFormat,
        username
      };
        fetch(SERVER_URL, 
          {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newUser) 
          }
        )
        console.log(JSON.stringify(newUser));
    }

    async function signIn(e: React.FormEvent) : Promise<void> {
      e.preventDefault();
      try {
        console.log(
          `${SERVER_URL}/userByUsernameAndPassword?username=${username}&password=${password}`
        );
        const response = await fetch(
          `${SERVER_URL}/userByUsernameAndPassword?username=${username}&password=${password}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

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
      console.log(error);
    }
    }

    return (
      <body>
        <div className="container" id="container">
          <div className="form-container sign-up">
            <form>
              <img className="logo" src={REORGLogo} alt="REORG Icon" />
              <h1>Create Account</h1>
              <div className="social-icons">
                <a href="#" className="icon">
                  <i className="fa-brands fa-google-plus-g"></i>
                </a>
                <a href="#" className="icon">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a href="#" className="icon">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a href="#" className="icon">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
              </div>
              <span>or use your email for registration</span>
              <input
                type="text"
                value={username}
                onChange={handleUsernameChange}
                placeholder="Username"
              />
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Email"
              />
              <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Password"
              />
              <button onClick={signUp}>Sign Up</button>
            </form>
          </div>

          <div className="form-container sign-in">
            <form>
              <img className="logo" src={REORGLogo} alt="REORG Icon" />
              <h1>Sign In</h1>
              <div className="social-icons">
                <a href="#" className="icon">
                  <i className="fa-brands fa-google-plus-g"></i>
                </a>
                <a href="#" className="icon">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a href="#" className="icon">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a href="#" className="icon">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
              </div>
              <span>or use your email and password</span>
              <input
                type="text"
                value={username}
                onChange={handleUsernameChange}
                placeholder="Username"
              />
              <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Password"
              />
              <Link to="/forget">Forget Your Password?</Link>
              <button onClick={signIn}>Sign In</button>
            </form>
          </div>

          <div className="toggle-container">
            <div className="toggle">
              <div className="toggle-panel toggle-left" id="toggle left">
                <h1>Welcome Back!</h1>
                <p>
                  Enter your personal details to use all of the site features
                </p>
                <button className="hidden" id="login" onClick={toggleLeft}>
                  Back to Sign In
                </button>
              </div>
              <div className="toggle-panel toggle-right" id="toggle right">
                <h1>Hello Friend!</h1>
                <p>
                  Register with your personal details to use all of the site
                  features
                </p>
                <button className="hidden" id="register" onClick={toggleRight}>
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </body>
    );
};

export default LogInPage;