import React from "react";

const Button = ({ classes, label, onClick }) => {
  return (
    <button className={classes} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
