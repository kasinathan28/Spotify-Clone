import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import "./auth.css";
import { Switch } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { Login } from "../../api/AuthAPI";
import Loader from "../../components/loader/Loader";
// import googleIcon from "./assets/google.png";
import Facebook from "./assets/facebook.png";
import Phone from "./assets/phone.png";
import { GoogleLoginButton } from "react-social-login-buttons";
import { LoginSocialGoogle } from "reactjs-social-login";
import FacebookLogin from 'react-facebook-login';


function Auth() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  const handleUserLogin = async () => {
    if (!username || !password) {
      setShowWarning(true);
      setTimeout(() => setShowWarning(false), 2000); // Hide warning after 3 seconds
      return;
    }
    
    setLoading(true);
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
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLoginSuccess = (response) => {
    console.log("Google login success:", response);
    navigate("/index");
  };

  const handleGoogleLoginFailure = (error) => {
    console.error("Google login failure:", error);
    // Handle Google login failure
  };


  return (
    <div className="authmain">
      <Navbar />
      <div className="auth_container">
        <div className="heading">
          <h1>Log in to Spotify</h1>
        </div>
        <div className="cta">
          <LoginSocialGoogle
            client_id={"511565921941-ug4fmmbmoag00u302p2p3cgmdgvur7ef.apps.googleusercontent.com"}
            scope="openid profile email"
            discoveryDocs="claims_supported"
            access_type="offline"
            onResolve={handleGoogleLoginSuccess}
            onReject={handleGoogleLoginFailure}
          >
            <GoogleLoginButton />
          </LoginSocialGoogle>
          <button className="facebook_btn">
            <img src={Facebook} alt="facebook" /> Continue With Facebook
          </button>
          <button className="phone_btn">
            <img src={Phone} alt="Phone" id="phone" /> Continue With Phone
          </button>
        </div>



        <div className="login_form_container">
          <div className="login_form">
            <label>Email or Username</label>
            <input
              type="text"
              placeholder="Email or Phone"
              value={username}
              required
              onChange={(e) => setUsername(e.target.value)}
            />
            <label>Password</label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
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
          {showWarning && <p style={{ color: "red", textDecoration: "none" }}>Please fill in all fields</p>}
          <button onClick={handleUserLogin}>
            {loading ? <Loader /> : "Log in"}
          </button>
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
