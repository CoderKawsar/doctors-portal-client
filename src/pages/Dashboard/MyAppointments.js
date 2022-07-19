import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import LoadingSpinner from "../Shared/LoadingSpinner";

export default function MyAppointments() {
  const [user, loading, error] = useAuthState(auth);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    if (loading) {
      return <LoadingSpinner />;
    } else {
      fetch(`http://localhost:5000/booking?patient=${user?.email}`)
        .then((res) => res.json())
        .then((data) => setAppointments(data));
    }
  }, [user, loading]);

  return (
    <div>
      <h2>My Appointments:</h2>
      <div class="overflow-x-auto">
        <table class="table table-zebra w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Treatment</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            {appointments.map((appointment, index) => (
              <tr key={appointment?._id}>
                <th>{index + 1}</th>
                <td>{appointment?.patientName}</td>
                <td>{appointment?.treatment}</td>
                <td>{appointment?.date}</td>
                <td>{appointment?.slot}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
