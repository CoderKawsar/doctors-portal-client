import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../firebase.init";
import LoadingSpinner from "../Shared/LoadingSpinner";
import UserRow from "./UserRow";

function Users() {
  const [user, loading] = useAuthState(auth);
  const {
    isLoading,
    error,
    data: users,
    refetch,
  } = useQuery(["users"], () =>
    fetch("http://localhost:5000/user", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <h4 className="text-2xl font-semibold mb-4">All Users</h4>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Role</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            {users?.map((user, index) => (
              <UserRow
                user={user}
                index={index}
                key={user?._id}
                refetch={refetch}
              ></UserRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;
