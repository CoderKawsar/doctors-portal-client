import React from "react";

const TestimonialSingle = ({ testimonial }) => {
  return (
    <div>
      <p>{testimonial.desc}</p>
      <div className="flex mt-8 items-center">
        <div>
          <img src={testimonial.img} alt="name" />
        </div>
        <div className="ml-4">
          <h5>{testimonial.name}</h5>
          <h5>{testimonial.location}</h5>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSingle;
