import React from "react";
import dayjs from "dayjs";

import "./forcastCard.css";

const ForcastCard = ({ image, max, min, timestamp }) => {
  return (
    <div className={`card`}>
      <p className="card--timestamp">{dayjs(timestamp).format("D ddd")}</p>
      <img className="card--image" src={image} alt="" />
      <p>{`${Math.round(min)}°C / ${Math.round(max)}°C`}</p>
    </div>
  );
};

export default ForcastCard;
