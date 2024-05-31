import React, { useState, ChangeEvent } from 'react';
import REORGLogo from '../assets/REORGLogo.svg';
import '../styles/LogInPage.css';
import { Link } from 'react-router-dom';

const LogInPage : React.FC = () => {
    const [inputUsername, setInputUsername] = useState("")
    const [inputEmail, setInputEmail] = useState("");
    const [inputPassword, setInputPassword] = useState("");
    let container = document.getElementById("container");

    const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) =>
      setInputUsername(event.target.value);

    const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) =>
      setInputEmail(event.target.value);

    const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) =>
      setInputPassword(event.target.value);

    function toggleLeft() : void {
        container = document.getElementById("container");
        if (container) {
            setInputUsername("");
            setInputEmail("");
            setInputPassword("");
            container.classList.remove('active');
        }
    }

    function toggleRight() {
        container = document.getElementById("container");
        if (container) {
            setInputUsername("");
            setInputEmail("");
            setInputPassword("");
            container.classList.add('active');
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
                value={inputUsername}
                onChange={handleUsernameChange}
                placeholder="Username"
              />
              <input
                type="email"
                value={inputEmail}
                onChange={handleEmailChange}
                placeholder="Email"
              />
              <input
                type="password"
                value={inputPassword}
                onChange={handlePasswordChange}
                placeholder="Password"
              />
              <button>Sign Up</button>
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
                value={inputUsername}
                onChange={handleUsernameChange}
                placeholder="Username"
              />
              <input
                type="password"
                value={inputPassword}
                onChange={handlePasswordChange}
                placeholder="Password"
              />
              <Link to="/forget">Forget Your Password?</Link>
              <button>Sign In</button>
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