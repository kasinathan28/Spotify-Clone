import React, { useState } from "react";
import "./index.css";
import { FaHome, FaSearch, FaLayerGroup } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";

function Index() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [searchVisible, setSearchVisible] = useState(false);

  const toggleSearchBar = () => {
    setSearchVisible(!searchVisible);
  };

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
            <input type="text" placeholder="Search" />
          </div>
        </div>
        <div className="playlist">
          <div className="head">
            <FaLayerGroup className="icon" id="search" />
            <p>Your Library</p>
          </div>
          <div className="category">
            <div className="cat">Cat 1 </div>
            <div className="cat">Cat 2 </div>
            <div className="cat">Cat 2 </div>
            <div className="cat">Cat 2 </div>
            <div className="cat">Cat 2 </div>
            <div className="cat">Cat 2 </div>
            <div className="cat">Cat 3 </div>
            <div className="cat">Cat 4 </div>
          </div>

          <div className="play-search">
            <FaSearch className="search2" onClick={toggleSearchBar} />
            <div className={`search-bar ${searchVisible ? "visible" : ""}`}>
              <input type="text" placeholder="Search" />
            </div>
          </div>
        </div>
      </div>
      <div className="right"></div>
    </div>
  );
}

export default Index;
