import React, { useState } from "react";
import Footer from "../Shared/Footer/Footer";
import AppointmentBanner from "./AppointmentBanner";
import "./Appointment.css";
import AvailableAppointments from "./AvailableAppointments";

const Appointment = () => {
  const [date, onChange] = useState(new Date());
  return (
    <div className="mx-12">
      <AppointmentBanner date={date} onChange={onChange} />
      <AvailableAppointments date={date} />
      <Footer />
    </div>
  );
};

export default Appointment;
