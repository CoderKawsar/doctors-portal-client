import React from "react";

const Service = ({ service, treatment, setTreatment }) => {
  const { name, slots } = service;

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body text-center">
        <h2 className="card-title mx-auto text-secondary font-semibold">
          {name}
        </h2>
        <p>
          {slots.length} {slots.length > 1 ? "spaces" : "space"} available
        </p>
        <div className="card-actions mx-auto">
          <label
            for="booking-modal"
            class="btn modal-button btn-primary uppercase text-white bg-gradient-to-r from-secondary to-primary"
            disabled={!slots.length}
            onClick={() => setTreatment(service)}
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default Service;
