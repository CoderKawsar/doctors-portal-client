import React from "react";
import Service from "./Service";
import fluorideImg from "../../assets/images/fluoride.png";
import whiteningImg from "../../assets/images/whitening.png";
import cavityImg from "../../assets/images/cavity.png";

const Services = () => {
  const images = [fluorideImg, whiteningImg, cavityImg];
  const titles = ["Fluoride Treatment", "Cavity Filling", "Teeth Whitening"];
  const descriptions = [
    "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-y-14 md:gap-x-8 lg:gap-x-8 mt-16">
      {titles.map((title, index) => (
        <Service
          key={index}
          title={title}
          desc={descriptions[index]}
          image={images[index]}
        />
      ))}
    </div>
  );
};

export default Services;
