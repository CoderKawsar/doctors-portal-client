import React from "react";
import InfoCard from "./InfoCard";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";

const Info = () => {
  const markerBg = "bg-gradient-to-r from-secondary to-primary";
  const titles = ["Opening Hours", "Visit our location", "Contact us now"];
  const descriptions = [
    "Lorem Ipsum is simply dummy text of the pri",
    "Brooklyn, NY 10036, United States",
    "+000 123 456789",
  ];
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 px-5">
      <InfoCard
        image={clock}
        background={markerBg}
        title={titles[0]}
        desc={descriptions[0]}
      />
      <InfoCard
        image={marker}
        className="p-12"
        title={titles[1]}
        desc={descriptions[1]}
        background="bg-accent"
      />
      <InfoCard
        image={phone}
        title={titles[2]}
        desc={descriptions[2]}
        background={markerBg}
      />
    </div>
  );
};

export default Info;
