import React from "react";
import { useState } from "react";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Welcome from "./pages/welcome/Welcome";

const App = () => {
  const [currentPage, setCurrentPage] = useState("welcome");

  const goToLogin = () => {
    setCurrentPage("login");
  };

  const goToSignup = () => {
    setCurrentPage("signup");
  };

  const renderPage = () => {
    if (currentPage === "login") {
      return <Login onSignupClick={goToSignup} />;
    }

    if (currentPage === "signup") {
      return <Signup onSignupSuccess={goToLogin} />;
    }

    return <Welcome onLoginClick={goToLogin} onSignupClick={goToSignup} />;
  };

  return <div>{renderPage()}</div>;
};

export default App;
