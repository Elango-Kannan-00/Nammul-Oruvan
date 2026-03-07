import React, { useState } from "react";
import "./Login.css";
import loginIllustration from "../../assets/illustrations/Login.jpg";

const Login = ({ onSignupClick }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const validate = (values) => {
    const nextErrors = {};

    if (!values.username.trim()) {
      nextErrors.username = "Username is required.";
    } else if (values.username.trim().length < 3) {
      nextErrors.username = "Username must be at least 3 characters.";
    }

    if (!values.password.trim()) {
      nextErrors.password = "Password is required.";
    } else if (values.password.length < 8) {
      nextErrors.password = "Password must be at least 6 characters.";
    }

    return nextErrors;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate(formData);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    // TODO: call login API here.
  };

  return (
    <div className="login-page">
      <h1 className="login-page-title">Login to Find Nammul-Oruvan</h1>

      <div className="login-content">
        <section className="login-left">
          <img
            src={loginIllustration}
            alt="Login illustration"
            className="login-illustration"
          />
        </section>

        <section className="login-right">
          <div className="login-form-card">
            <h2 className="login-card-title">Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
              <label htmlFor="username">Username</label>
              <input
                id="username"
                name="username"
                type="text"
                placeholder="Enter your username"
                value={formData.username}
                onChange={handleChange}
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
                value={formData.password}
                onChange={handleChange}
                className={errors.password ? "input-error" : ""}
              />
              {errors.password ? (
                <p className="field-error">{errors.password}</p>
              ) : null}

              <button type="submit">Login</button>
            </form>
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
