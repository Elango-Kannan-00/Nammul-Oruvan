import React, { useState } from "react";
import "./Signup.css";
import signupIllustration from "../../assets/illustrations/Signup.jpg";

const Signup = ({ onSignupSuccess }) => {
  const [formData, setFormData] = useState({
    username: "",
    phone: "",
    location: "",
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

    if (!values.phone.trim()) {
      nextErrors.phone = "Phone number is required.";
    } else if (!/^\d{10}$/.test(values.phone.trim())) {
      nextErrors.phone = "Phone number must be exactly 10 digits.";
    }

    if (!values.location.trim()) {
      nextErrors.location = "Location is required.";
    } else if (values.location.trim().length < 2) {
      nextErrors.location = "Location must be at least 2 characters.";
    }

    if (!values.password.trim()) {
      nextErrors.password = "Password is required.";
    } else if (values.password.length < 8) {
      nextErrors.password = "Password must be at least 8 characters.";
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

    // TODO: call signup API here.
    if (onSignupSuccess) {
      onSignupSuccess();
    }
  };

  return (
    <div className="signup-page">
      <h1 className="signup-page-title">
        Create Account to Find Nammul-Oruvan
      </h1>

      <div className="signup-content">
        <section className="signup-left">
          <div className="signup-form-card">
            <h2 className="signup-card-title">Signup</h2>
            <form className="signup-form" onSubmit={handleSubmit}>
              <label htmlFor="signup-username">Username</label>
              <input
                id="signup-username"
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

              <label htmlFor="signup-phone">Phone Number</label>
              <input
                id="signup-phone"
                name="phone"
                type="text"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
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
                value={formData.location}
                onChange={handleChange}
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
                value={formData.password}
                onChange={handleChange}
                className={errors.password ? "input-error" : ""}
              />
              {errors.password ? (
                <p className="field-error">{errors.password}</p>
              ) : null}

              <button type="submit">Signup</button>
            </form>
          </div>
        </section>

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
