import { useEffect, useState } from "react";

const useIsAdmin = (user) => {
  const [admin, setAdmin] = useState(false);
  const [adminLoading, setAdminLoading] = useState(true);
  const { email } = user;
  useEffect(() => {
    fetch(`http://localhost:5000/user/admin/${email}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setAdmin(data.admin);
        setAdminLoading(false);
      });
  }, [email]);

  return [admin, adminLoading];
};

export default useIsAdmin;
