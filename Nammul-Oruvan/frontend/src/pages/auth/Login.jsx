import React, { useState } from "react";
import "./Login.css";
import loginIllustration from "../../assets/illustrations/Login.jpg";

const Login = ({ onSignupClick, onLoginSuccess }) => {
  // Form field states
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  // Validation error state
  const [errors, setErrors] = useState({});

  // Handle username input change
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    if (errors.username) setErrors((prev) => ({ ...prev, username: "" }));
  };

  // Handle password input change
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    if (errors.password) setErrors((prev) => ({ ...prev, password: "" }));
  };

  // Handle form submit and run simple validation
  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = {};

    // Username validation block
    if (!username.trim()) {
      nextErrors.username = "Username is required.";
    } else if (username.trim().length < 3) {
      nextErrors.username = "Username must be at least 3 characters.";
    }

    // Password validation block
    if (!password.trim()) {
      nextErrors.password = "Password is required.";
    } else if (password.length < 6) {
      nextErrors.password = "Password must be at least 6 characters.";
    }

    // Stop submit if validation fails
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    // Clear errors and continue login flow
    setErrors({});

    // TODO: call login API here.
    if (onLoginSuccess) {
      onLoginSuccess();
    }
  };

  // Login page UI
  return (
    <div className="login-page">
      <h1 className="login-page-title">Login to Find Nammul-Oruvan</h1>

      {/* Main content wrapper */}
      <div className="login-content">
        {/* Left illustration section */}
        <section className="login-left">
          <img
            src={loginIllustration}
            alt="Login illustration"
            className="login-illustration"
          />
        </section>

        {/* Right form section */}
        <section className="login-right">
          <div className="login-form-card">
            <h2 className="login-card-title">Login</h2>
            {/* Login form block */}
            <form className="login-form" onSubmit={handleSubmit}>
              <label htmlFor="username">Username</label>
              <input
                id="username"
                name="username"
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={handleUsernameChange}
                className={errors.username ? "input-error" : ""}
              />
              {errors.username ? (
                <p className="field-error">{errors.username}</p>
              ) : null}

              <label htmlFor="password">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={handlePasswordChange}
                className={errors.password ? "input-error" : ""}
              />
              {errors.password ? (
                <p className="field-error">{errors.password}</p>
              ) : null}

              <button type="submit">Login</button>
            </form>

            {/* Signup navigation block */}
            <h3>
              Don&apos;t have Account -
              <button
                type="button"
                className="text-link-btn"
                onClick={onSignupClick}
              >
                Create One
              </button>
            </h3>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Login;
