import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="container">
      <div className="clip"></div>
      <div className="clip-1"></div>
      <div className="clip-2"></div>
      <div className="section">
        {/* <span data-tilt> */}
          <img src="./image/SVGs/VGs/undraw_educator_re_ju47.svg" alt="" />
        {/* </span> */}
        <div className="sub">
          <h1>AMAT SOLUTION</h1>
          <p>
            we believe that skill training is a powerful tool for empowering
            women and transforming lives. By providing skill training programs,
            fostering entrepreneurship, and implementing empowering strategies,
            we are committed to breaking the cycle of poverty and dependence in
            Northern, Ghana
          </p>
          <button>Learn More</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
