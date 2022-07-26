import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import auth from "../../firebase.init";
import LoadingSpinner from "../Shared/LoadingSpinner";
import { toast } from "react-toastify";

export default function MyAppointments() {
  const [user, loading, error] = useAuthState(auth);
  const [appointments, setAppointments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      return <LoadingSpinner />;
    } else {
      fetch(`http://localhost:5000/booking?patient=${user?.email}`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => {
          if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem("accessToken");
            toast.warning("Please, Login again");
            navigate("/");
          } else return res.json();
        })
        .then((data) => setAppointments(data));
    }
  }, [user, loading, navigate]);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">My Appointments:</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
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
            {appointments?.map((appointment, index) => (
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
