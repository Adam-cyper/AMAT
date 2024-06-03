import React from "react";
import "./../components/aboutStyle.css";
import { Link } from "react-router-dom";

function Card(props) {
  
  return (
    <>
      <img src={props.meals.imgUrl} alt={props.meals.title} />
      <h3>{props.meals.title}</h3>
      <div className="details">
        <p>{props.meals.description}</p>
      </div>
      <Link to={props.meals.link}>View Meal</Link>
    </>
  );
}

export default Card;
