import React from "react";

const InfoCard = ({ image, title, desc, background }) => {
  return (
    <div
      className={`card lg:card-side shadow-xl ${background} text-white px-12`}
    >
      <figure>
        <img src={image} alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default InfoCard;
