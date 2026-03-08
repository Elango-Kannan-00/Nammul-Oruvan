import React, { useState } from "react";
import "./Signup.css";
import signupIllustration from "../../assets/illustrations/Signup.jpg";

const Signup = ({ onSignupSuccess }) => {
  // Form field states
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [password, setPassword] = useState("");
  // Validation error state
  const [errors, setErrors] = useState({});

  // Handle username input change
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    if (errors.username) setErrors((prev) => ({ ...prev, username: "" }));
  };

  // Handle phone input change
  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
    if (errors.phone) setErrors((prev) => ({ ...prev, phone: "" }));
  };

  // Handle location input change
  const handleLocationChange = (event) => {
    setLocation(event.target.value);
    if (errors.location) setErrors((prev) => ({ ...prev, location: "" }));
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

    // Phone validation block
    if (!phone.trim()) {
      nextErrors.phone = "Phone number is required.";
    } else if (!/^\d{10}$/.test(phone.trim())) {
      nextErrors.phone = "Phone number must be exactly 10 digits.";
    }

    // Location validation block
    if (!location.trim()) {
      nextErrors.location = "Location is required.";
    } else if (location.trim().length < 2) {
      nextErrors.location = "Location must be at least 2 characters.";
    }

    // Password validation block
    if (!password.trim()) {
      nextErrors.password = "Password is required.";
    } else if (password.length < 8) {
      nextErrors.password = "Password must be at least 8 characters.";
    }

    // Stop submit if validation fails
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    // Clear errors and continue signup flow
    setErrors({});

    // TODO: call signup API here.
    
    // Trigger success callback after valid submit
    if (onSignupSuccess) {
      onSignupSuccess();
    }
  };

  // Signup page UI
  return (
    <div className="signup-page">
      <h1 className="signup-page-title">
        Create Account to Find Nammul-Oruvan
      </h1>

      {/* Main content wrapper */}
      <div className="signup-content">
        {/* Left form section */}
        <section className="signup-left">
          <div className="signup-form-card">
            <h2 className="signup-card-title">Signup</h2>
            {/* Signup form block */}
            <form className="signup-form" onSubmit={handleSubmit}>
              <label htmlFor="signup-username">Username</label>
              <input
                id="signup-username"
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

              <label htmlFor="signup-phone">Phone Number</label>
              <input
                id="signup-phone"
                name="phone"
                type="text"
                placeholder="Enter your phone number"
                value={phone}
                onChange={handlePhoneChange}
                className={errors.phone ? "input-error" : ""}
              />
              {errors.phone ? (
                <p className="field-error">{errors.phone}</p>
              ) : null}

              <label htmlFor="signup-location">Location</label>
              <input
                id="signup-location"
                name="location"
                type="text"
                placeholder="Enter your location"
                value={location}
                onChange={handleLocationChange}
                className={errors.location ? "input-error" : ""}
              />
              {errors.location ? (
                <p className="field-error">{errors.location}</p>
              ) : null}

              <label htmlFor="signup-password">Password</label>
              <input
                id="signup-password"
                name="password"
                type="password"
                placeholder="Create a password"
                value={password}
                onChange={handlePasswordChange}
                className={errors.password ? "input-error" : ""}
              />
              {errors.password ? (
                <p className="field-error">{errors.password}</p>
              ) : null}

              <button type="submit">Signup</button>
            </form>
          </div>
        </section>

        {/* Right illustration section */}
        <section className="signup-right">
          <img
            src={signupIllustration}
            alt="Signup illustration"
            className="signup-illustration"
          />
        </section>
      </div>
    </div>
  );
};

export default Signup;
