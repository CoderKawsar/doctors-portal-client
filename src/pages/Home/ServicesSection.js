import React from "react";
import Services from "./Services";
import serviceHeroImg from "../../assets/images/treatment.png";
import MyButton from "../Shared/MyButton";

const ServicesSection = () => {
  return (
    <div className="mt-24 mx-12">
      <h2 className="text-center uppercase text-2xl text-secondary font-bold">
        Our Services
      </h2>
      <p className="mt-1 text-3xl text-center">Services We Provide</p>
      <Services />

      {/* --------------------Service Hero Section------------------ */}
      <div className="service-hero flex items-center lg:pl-40 lg:pr-16 mt-12">
        <div className="w-3/6 rounded">
          <img
            height="576"
            className="rounded"
            width="458"
            src={serviceHeroImg}
            alt="hero"
          />
        </div>
        <div className="w-3/6 pl-24">
          <h4 className="font-bold text-4xl mb-4">
            Exceptional Dental Care, on Your Terms
          </h4>
          <p className="mb-4">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <MyButton>Get Started</MyButton>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
