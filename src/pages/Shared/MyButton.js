import React from "react";

const MyButton = ({ children, disabled }) => {
  return (
    <button
      className="btn btn-primary uppercase text-white bg-gradient-to-r from-secondary to-primary"
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default MyButton;
