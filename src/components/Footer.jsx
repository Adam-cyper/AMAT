import React from "react";
import "./Footer.css";
import { AiFillMail } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineFacebook } from "react-icons/ai";

function Footer() {
  return (
    <div className="footer-contianer">
      <div className="sub">
        <h3>About Us</h3>
        <p>Impact Measurement: </p>
        <p>Skill Training Programs: </p>
        <p>Entrepreneurship Support: </p>

      <div className="media">
          <AiFillMail />
          <AiFillYoutube />
          <AiOutlinePhone />
          <FaWhatsapp />
          <AiOutlineFacebook />
        </div>
      </div>
      <div className="sub">
        <h3>SERVICE</h3>
        <p>3D Epoxy</p>
        <p>Leatherwork</p>
        <p>Beads Making</p>
        <p>Bakery Skills</p>
      </div>
      <div className="sub">
        <h3>COMPANY</h3>
        <div className="help">
        <h2><FaWhatsapp /> </h2>
        <p>+233 541219969</p>
        </div>
        <div className="help">
        <h2><AiOutlineFacebook /> </h2>
        <p>Lorem ipsu</p>
        </div>
        <div className="help">
        <h2><AiOutlinePhone /> </h2>
        <p>+233 541219969</p>
        </div>
        <div className="help">
        <h2> <AiFillMail /></h2>
        <p>amismultiarts@gmail.com</p>
        </div>
      </div>
      <div className="sub">
        <h3>Target Groups</h3>
        <p>Single Mothers.</p>
        <p>Young Females (15-35 years):</p>
        <p>School Graduates and Dropouts: </p>
        <p>Less Privileged Individuals: </p>
      </div>
    </div>
  );
}

export default Footer;
