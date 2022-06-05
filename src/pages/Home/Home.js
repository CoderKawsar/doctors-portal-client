import React from "react";
import HomeAppointment from "./HomeAppointment";
import Banner from "./Banner";
import Info from "./Info";
import ServicesSection from "./ServicesSection";
import "./Home.css";
import HomeTestimonial from "./HomeTestimonial";
import Footer from "../Shared/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Info></Info>
      <ServicesSection />
      <HomeAppointment />
      <HomeTestimonial />
      <Footer />
    </div>
  );
};

export default Home;
