import React from "react";
import person1 from "../../assets/images/people1.png";
import person2 from "../../assets/images/people2.png";
import person3 from "../../assets/images/people3.png";
import TestimonialSingle from "./TestimonialSingle";

const HomeTestimonial = () => {
  const testimonials = [
    {
      _id: 1,
      desc: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      name: "Winson Herry",
      location: "California",
      img: person1,
    },
    {
      _id: 2,
      desc: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      name: "Winson Herry",
      location: "California",
      img: person2,
    },
    {
      _id: 3,
      desc: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      name: "Winson Herry",
      location: "California",
      img: person3,
    },
  ];
  return (
    <div className="mt-24 mx-12">
      <h2 className="text-2xl font-bold text-primary mb-2">Testimonial</h2>
      <h4 className="text-4xl font-semibold mb-20">What Our Patients Says</h4>
      <div className="grid grid-cols-3 gap-16">
        {testimonials.map((testimonial) => (
          <TestimonialSingle key={testimonial._id} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
};

export default HomeTestimonial;
