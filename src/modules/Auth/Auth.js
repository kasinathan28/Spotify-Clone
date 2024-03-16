import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import './auth.css';

// Images
import google from "./assets/google.png";
import Facebook from "./assets/facebook.png";
import Phone from "./assets/phone.png";

function Auth() {
  return (
    <div className='authmain'>
      <Navbar />
      <div className='auth_container'>
        <div className='heading'>
          <h1>Log in to Spotify</h1>
        </div>
        <div className='cta'>
          <button className='google_btn'> <img src={google} alt='google'/> Continue With Google</button>
          <button className='facebook_btn'> <img src={Facebook} alt='facebook'/>  Continue With Facebook</button>
          <button className='phone_btn'> <img src={Phone} alt='Phone' id='phone'/>  Continue With Phone</button>
        </div>
        <div className='login_form_container'>
          <div className='login_form'>
          <label> Email or phone</label>
          <input type='text'  placeholder='Email or Phone'/>
          <label> Email or phone</label>
          <input type='password' placeholder='Password'/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
