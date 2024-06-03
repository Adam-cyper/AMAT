import React from "react";
import { Link } from "react-router-dom";
import "./../components/aboutStyle.css";

function ContactCard({item}) {
    const {imgUrl,description,link, title} = item
  return (
    <>
      <img src={imgUrl} alt="" />
      <h3>{title}</h3>
      <div className="details">
        <p>{description}</p>
      </div>
      <Link to={link}>view more</Link>
    </>
  );
}

export default ContactCard;
