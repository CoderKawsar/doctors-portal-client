import React from "react";
import heroImg from "../../assets/images/chair.png";
import MyButton from "../Shared/MyButton";

const Banner = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse px-16">
        <img
          src={heroImg}
          className="max-w-sm rounded-lg shadow-2xl"
          alt="chair"
        />
        <div className="px-12">
          <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p className="py-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the
          </p>
          <MyButton>Get Started</MyButton>
        </div>
      </div>
    </div>
  );
};

export default Banner;
