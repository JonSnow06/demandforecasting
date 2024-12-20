import React from "react";
// import "./Card.css";

const Card = ({ title, value, details }) => {
  return (
    <div className="card" style={{ backgroundColor: "#f6f4ff" }}>
      <h3>{title}</h3>
      <h2>{value}</h2>
      <p>{details}</p>
    </div>
  );
};

export default Card;
