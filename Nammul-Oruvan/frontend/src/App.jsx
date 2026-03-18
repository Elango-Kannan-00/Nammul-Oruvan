import React from "react";
import "./App.css";
import { useState } from "react";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Welcome from "./pages/welcome/Welcome";
import Home from "./pages/user/Home";
import Services from "./pages/user/Services";

const App = () => {
  const [currentPage, setCurrentPage] = useState("welcome");

  const goToLogin = () => {
    setCurrentPage("login");
  };

  const goToSignup = () => {
    setCurrentPage("signup");
  };

  const goToHome = () => {
    setCurrentPage("home");
  };

  const goToServices = () => {
    setCurrentPage("services");
  };

  const renderPage = () => {
    if (currentPage === "login") {
      return <Login onSignupClick={goToSignup} onLoginSuccess={goToHome} />;
    }

    if (currentPage === "signup") {
      return <Signup onSignupSuccess={goToLogin} />;
    }

    if (currentPage === "home") {
      return <Home onServicesClick={goToServices} />;
    }

    if (currentPage === "services") {
      return <Services onHomeClick={goToHome} onServicesClick={goToServices} />;
    }

    return <Welcome onLoginClick={goToLogin} onSignupClick={goToSignup} />;
  };

  return <div>{renderPage()}</div>;
};

export default App;
