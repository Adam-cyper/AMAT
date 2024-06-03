import React from "react";
import "./Banner.css";


import { FaUserCheck } from "react-icons/fa";
import { FaVolleyball } from "react-icons/fa6";
import { FaUserGroup } from "react-icons/fa6";




function Banner() {
  return (
    <div className="Ban-contianer">
      <div className="ban">
        <div>
          <h2>MENTORSHIP</h2>
          <p>We have improve the lifes of many around Glode </p>
        </div>
        <div className="batt">
          <button type="text">learn More</button>
        </div>
      </div>

      <div className="ban1">
        <div className="ban-cover">
         <div className="font-icon">
          <FaUserGroup />
          </div>
          <div className="line"></div>
          <div>
            <h2>100</h2>
            <p>Girls under coaching</p>
            <h3>Alinea Ghana</h3>
          </div>
        </div>
        <div className="ban-cover">
        <div className="font-icon">
          <FaVolleyball />
          </div>
          <div className="line">
    
          </div>
          <div>
            <h2>36</h2>
            <p>Footballers</p>
            <h3>Plan B</h3>
          </div>
        </div>
        <div className="ban-cover">
         <div className="font-icon">
          <FaUserCheck grow='100' />
          </div>
          <div className="line"></div>
          <div>
            <h2>9</h2>
            <p>Individuals</p>
            <h3>YCI/NIV/NORSAAC</h3>
          </div>
        </div>
        <div className="ban-cover">
          <div className="font-icon">
          <FaUserCheck />
          </div>
          <div className="line"></div>
          <div>
            <h2>15</h2>
            <p>Individuals</p>
            <h3>Hoping Academy</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
