import { format } from "date-fns";
import React, { useState } from "react";
import { useQuery } from "react-query";
import LoadingSpinner from "../Shared/LoadingSpinner";

import BookingModal from "./BookingModal";
import Service from "./Service";

const AvailableAppointments = ({ date }) => {
  const formattedDate = format(date, "PP");
  // const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState({});
  // useEffect(() => {
  //   fetch(`http://localhost:5000/available?date=${formattedDate}`)
  //     .then((res) => res.json())
  //     .then((data) => setServices(data));
  // }, [formattedDate]);
  const {
    isLoading,
    error,
    data: services,
    refetch,
  } = useQuery(["available", formattedDate], () =>
    fetch(`http://localhost:5000/available?date=${formattedDate}`).then((res) =>
      res.json()
    )
  );

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <h3 className="text-center text-xl text-secondary font-bold">
        Available Appointments on {format(date, "PP")}
      </h3>
      <div className="grid grid-cols-3 gap-12 mt-24">
        {services?.map((service) => (
          <Service
            key={service._id}
            service={service}
            treatment={treatment}
            setTreatment={setTreatment}
          />
        ))}
      </div>
      {treatment && (
        <BookingModal
          date={date}
          treatment={treatment}
          setTreatment={setTreatment}
          refetch={refetch}
        />
      )}
    </div>
  );
};

export default AvailableAppointments;
