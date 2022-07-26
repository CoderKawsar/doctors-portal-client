import React from "react";
import { toast } from "react-toastify";

function UserRow({ user, refetch, index }) {
  const { email, role } = user;
  const makeAdmin = () => {
    fetch(`http://localhost:5000/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("Failed to make an admin");
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          toast.success("Successfully made an admin");
        }
      });
  };
  return (
    <tr key={user?._id}>
      <th>{index + 1}</th>
      <td>{email}</td>
      <td>
        {role !== "admin" && (
          <button className="btn btn-xs" onClick={() => makeAdmin()}>
            Make Admin
          </button>
        )}
      </td>
      <td>
        <button className="btn btn-xs">Remove User</button>
      </td>
    </tr>
  );
}

export default UserRow;
