import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import "./auth.css";
import { Switch } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { Login } from "../../api/AuthAPI";
import GoogleLogin from "react-google-login";
import google from "./assets/google.png";
import Facebook from "./assets/facebook.png";
import Phone from "./assets/phone.png";

function Auth() {
  const navigate = useNavigate();
  const [username, setUsername] = useState(""); // State to store username
  const [password, setPassword] = useState(""); // State to store password

  const handleUserLogin = async () => {
    try {
      const response = await Login(username, password);
      console.log(response.message);
      if (response.message === "Login success") {
        navigate("/index");
      } else {
        console.log(response.message);
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  const handleGoogleLoginSuccess = (res) => {
    console.log("Google login success:", res);
    // Navigate to the next page
    navigate("/index");
  };

  const handleGoogleLoginFailure = (error) => {
    console.error("Google login failure:", error);
    // Handle Google login failure
  };

  const handleGoogleLogin = () => {
    return (
        <GoogleLogin
          clientId="687027375299-n9gc701kv73j31r3c0uedvkansfi03f2.apps.googleusercontent.com"
          buttonText="Continue With Google"
          onSuccess={handleGoogleLoginSuccess}
          onFailure={handleGoogleLoginFailure}
          cookiePolicy={'single_host_origin'}
          className="google_btn"
          icon={<img src={google} alt="google" />}
        />
    );
  };

  return (
    <div className="authmain">
      <Navbar />
      <div className="auth_container">
        <div className="heading">
          <h1>Log in to Spotify</h1>
        </div>
        <div className="cta">
          {handleGoogleLogin()}
          <button className="facebook_btn">
            {" "}
            <img src={Facebook} alt="facebook" /> Continue With Facebook
          </button>
          <button className="phone_btn">
            {" "}
            <img src={Phone} alt="Phone" id="phone" /> Continue With Phone
          </button>
        </div>
        <div className="login_form_container">
          <div className="login_form">
            <label>Email or Username</label>
            <input type="text" placeholder="Email or Phone" value={username} onChange={(e) => setUsername(e.target.value)} />
            <label>Password</label>
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="remember_me">
            <Switch
              id="remember_me_checkbox"
              sx={{
                "& .MuiSwitch-track": {
                  backgroundColor: "#1ed760",
                  opacity: 0.7,
                },
                "& .Mui-checked": {
                  color: "#1ed760",
                },
              }}
            />
            <label htmlFor="remember_me_checkbox">Remember Me</label>
          </div>
          <button onClick={handleUserLogin}>Log in</button>
          <p>Forgot your password?</p>
        </div>
        <div className="lastdiv">
          <h3>Don't have an account? <span>Sign up</span> </h3>
        </div>
      </div>
    </div>
  );
}

export default Auth;
