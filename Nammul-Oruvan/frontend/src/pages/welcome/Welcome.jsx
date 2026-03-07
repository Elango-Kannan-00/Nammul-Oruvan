import React from "react";
import "./Welcome.css";
import welcomeIllustration from "../../assets/illustrations/Welcome.png";

const Welcome = ({ onLoginClick, onSignupClick }) => {
  return (
    <div className="welcome-container">
      <img
        className="welcome-illustration"
        src={welcomeIllustration}
        alt="Welcome illustration"
      />
      <h1 id="line1">Hey Makkaley, Vanakkam !</h1>
      <h1 id="line2">Welcome to,</h1>
      <h1 id="line3">"Nammul-Oruvan"</h1>
      <div className="welcome-button">
        <button id="stu" onClick={onLoginClick}>
          Login
        </button>
        <button id="sta" onClick={onSignupClick}>
          Signup
        </button>
      </div>
    </div>
  );
};

export default Welcome;
