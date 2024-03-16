import React from "react";
import Navbar from "../../components/navbar/Navbar";
import "./auth.css";

import { Switch } from '@mui/material'; // Import Switch from Material-UI

// Images
import google from "./assets/google.png";
import Facebook from "./assets/facebook.png";
import Phone from "./assets/phone.png";

function Auth() {
  return (
    <div className="authmain">
      <Navbar />
      <div className="auth_container">
        <div className="heading">
          <h1>Log in to Spotify</h1>
        </div>
        <div className="cta">
          <button className="google_btn">
            {" "}
            <img src={google} alt="google" /> Continue With Google
          </button>
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
            <input type="text" placeholder="Email or Phone" />
            <label>Password</label>
            <input type="password" placeholder="Password" />
          </div>
          <div className="remember_me">
            {/* Use Switch component from Material-UI with inline styling */}
            <Switch
              id="remember_me_checkbox"
              sx={{
                "& .MuiSwitch-track": {
                  backgroundColor: "#1ed760",
                  opacity: 0.7, // Adjust opacity as needed
                },
                "& .Mui-checked": {
                  color: "#1ed760", // Change thumb color when checked
                },
              }}
            />
            <label htmlFor="remember_me_checkbox">Remember Me</label>
          </div>
          <button>Log in</button>
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
