import React from "react";
import { format } from "date-fns";

const BookingModal = ({ treatment, date, setTreatment }) => {
  const { name, slots } = treatment;
  const handleBooking = (event) => {
    event.preventDefault();
    const date = event.target.date.value;
    const slot = event.target.slot.value;
    const name = event.target.name.value;
    const phone = event.target.phone.value;
    const email = event.target.email.value;
    setTreatment(null);
  };
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            for="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg mb-4">{name}</h3>
          <form onSubmit={handleBooking}>
            <input
              type="text"
              name="date"
              className="input input-bordered w-full max-w-xs"
              defaultValue={format(date, "PP")}
              disabled
              readOnly
            />
            <br />
            <select
              name="slot"
              className="select select-bordered w-full max-w-xs mt-2"
            >
              {slots &&
                slots.map((slot, index) => (
                  <option key={index} value={slot}>
                    {slot}
                  </option>
                ))}
            </select>
            <br />
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="input input-bordered w-full max-w-xs mt-2"
            />
            <br />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="input input-bordered w-full max-w-xs mt-2"
            />
            <br />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input input-bordered w-full max-w-xs mt-2"
            />
            <input
              type="submit"
              className="w-full btn btn-primary bg-secondary max-w-xs mt-2 text-white"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
