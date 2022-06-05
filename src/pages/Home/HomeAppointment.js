import React from "react";
import doctorImg from "../../assets/images/doctor.png";
import MyButton from "../Shared/MyButton";

const HomeAppointment = () => {
  return (
    <section className="appointment-section relative mt-48 flex">
      <div className="w-3/6 absolute bottom-0 left-0 invisible sm:invisible md:visible lg:visible">
        <img height="636" width="605" src={doctorImg} alt="doctor" />
      </div>
      <div className="w-3/6 text-white lg:pr-16 py-24 ml-auto">
        <h4 className="text-2xl font-bold text-primary mb-2">Appointment</h4>
        <h5 className="text-4xl font-semibold mb-3">
          Make an appointment Today
        </h5>
        <p className="mb-4">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsumis that it has a more-or-less normal distribution of
          letters,as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page
        </p>
        <MyButton>Get Started</MyButton>
      </div>
    </section>
  );
};

export default HomeAppointment;
