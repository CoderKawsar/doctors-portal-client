import { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const email = user?.user?.email;
    const newUser = { email: email };

    if (email) {
      fetch(`http://localhost:5000/user/${email}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(newUser),
      })
        .then((res) => res.json())
        .then((data) => {
          const accessToken = data.accessToken;
          setToken(accessToken);
          localStorage.setItem("accessToken", accessToken);
        });
    }
  }, [user]);

  return [token];
};

export default useToken;
