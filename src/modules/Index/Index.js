import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import "./index.css";

function Index() {
  const navigate = useNavigate();
  const { id } = useParams(); 

  console.log("User ID:", id); 

  return (
    <div>
      <h1>Index page</h1>
      <h2>User ID: {id}</h2>
    </div>
  );
}

export default Index;
