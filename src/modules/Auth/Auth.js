import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import "./auth.css";


function Auth() {
  return (
    <div>
        <Navbar/>
        <div className='auth_container'>
          <div className='heading'>
            <h1>Login to Spotify</h1>
          </div>
        </div>
    </div>
  )
}

export default Auth