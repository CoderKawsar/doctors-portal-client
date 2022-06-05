import React from "react";

const Service = ({ image, title, desc }) => {
  return (
    <div className="single-service p-12 text-center">
      <img src={image} alt="service" className="mx-auto" />
      <h5 className="mt-8 mb-2 text-xl font-semibold text-[#3A4256]">
        {title}
      </h5>
      <p>{desc}</p>
    </div>
  );
};

export default Service;
