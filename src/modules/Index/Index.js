import React from "react";
import "./index.css";
import { FaHome } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";

function Index() {
  const navigate = useNavigate();
  const { id } = useParams();

  console.log("User ID:", id);

  return (
    <div className="index-page">
      <div className="left">
        <div className="home">
          <div className="opt">
            <FaHome className="icon" />
            <p>Home</p>
          </div>
          <div className="opt">
            <FaSearch className="icon" id="search" />
            <p>Search</p>
          </div>
        </div>
        <div className="playlist"></div>
      </div>
      <div className="right">
        
      </div>
    </div>
  );
}

export default Index;
