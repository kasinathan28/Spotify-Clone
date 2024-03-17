import React from 'react'
import { GoogleLogout } from 'react-google-login'
import { useNavigate } from 'react-router-dom';

function Index() {

  const navigate = useNavigate();

  const onSucess=()=>{
    console.log("Log out succcess");
    navigate("/");
  }
  return (
    <div>
      <h1>Index page</h1>
      <div>
        <GoogleLogout
        clientId='687027375299-n9gc701kv73j31r3c0uedvkansfi03f2.apps.googleusercontent.com'
        buttonText={"Logout"}
        onLogoutSuccess={onSucess}
        />
      </div>

    </div>
  )
}

export default Index
