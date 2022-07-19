import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { format } from "date-fns";
import { toast } from "react-toastify";

const BookingModal = ({ treatment, date, setTreatment, refetch }) => {
  const { _id, name, slots } = treatment;
  const [user, loading, error] = useAuthState(auth);
  const formattedDate = format(date, "PP");
  const handleBooking = (event) => {
    event.preventDefault();
    const slot = event.target.slot.value;
    const booking = {
      treatmentId: _id,
      treatment: name,
      date: formattedDate,
      slot,
      patientName: user.displayName,
      patient: user.email,
      phone: event.target.phone.value,
    };

    fetch("http://localhost:5000/booking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
        setTreatment(null);
        if (data.success) {
          toast.success(`${name} booked at ${formattedDate}, time: ${slot}`);
        } else {
          toast.error(
            `Already have an appointment at ${formattedDate}, time: ${slot}`
          );
        }
      });
  };
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="booking-modal"
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
              defaultValue={formattedDate}
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
              defaultValue={user?.displayName}
              readOnly
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
              defaultValue={user?.email}
              disabled
              readOnly
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
