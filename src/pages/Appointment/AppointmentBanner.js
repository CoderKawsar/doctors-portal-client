import React from "react";
import Calendar from "react-calendar";
import bannerImg from "../../assets/images/chair.png";
import "react-calendar/dist/Calendar.css";

const AppointmentBanner = ({ date, onChange }) => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse ">
        <img
          src={bannerImg}
          className="max-w-sm rounded-lg shadow-2xl"
          alt="Appointment"
        />
        <div>
          <Calendar onChange={onChange} value={date} />
          <div className="mt-8"></div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
