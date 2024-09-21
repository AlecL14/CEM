import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "./img/Logo.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // Use the navigate hook to programmatically navigate
  const navigate = useNavigate();

  const onButtonClick = () => {
    // Set initial error values to empty
    setEmailError("");
    setPasswordError("");

    // Check if the user has entered both fields correctly
    if ("" === email) {
      setEmailError("Please enter your email");
      return;
    }

    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setEmailError("Please enter a valid email");
      return;
    }

    if ("" === password) {
      setPasswordError("Please enter a password");
      return;
    }

    if (password.length < 7) {
      setPasswordError("The password must be 8 characters or longer");
      return;
    }

    if (email === "admin@admin.com") {
        navigate("/adminHomePage", { state: { loggedIn: true, email } });
    } else {
      setEmailError("Invalid email or password");
    }

    if (email === "user@user.com") {
        navigate("/userHomePage", { state: { loggedIn: true, email } });
    } else {
      setEmailError("Invalid email or password");
    }
    if (email === "s3910654@student.remit.edu.au") {
      navigate("/userHomePage", { state: { loggedIn: true, email } });
  } else {
    setEmailError("Invalid email or password");
  }

  };

  return (
    <div className={"mainContainer"}>
      <div className={"mainLoginBox"}>
        <div className={"titleContainer"}>
          <img className={"loginLogo"} src={logo} alt="Logo"/>
        </div>
        <br />
        <div className={"inputContainer"}>
          <input
            value={email}
            placeholder="Enter your email here"
            onChange={(ev) => setEmail(ev.target.value)}
            className={"inputBox"}
          />
          <label className="errorLabel">{emailError}</label>
        </div>
        <br />
        <div className={"inputContainer"}>
          <input
            value={password}
            placeholder="Enter your password here"
            type="password"  
            onChange={(ev) => setPassword(ev.target.value)}
            className={"inputBox"}
          />
          <label className="errorLabel">{passwordError}</label>
        </div>
        <br />
        <div className={"inputContainer"}>
          <input
            className={"inputButton"}
            type="button"
            onClick={onButtonClick}
            value={"Log in"}
          />
        </div>
        <div className="loginFooter">Powered by Devblokes</div>
      </div>
    </div>
  );
};

export default Login;