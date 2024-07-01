import React, { useState } from 'react';
import classNames from 'classnames';
const InputBox = ({ type, classes, placeHolder }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  if (type === "checkbox") {
    return (
      <input
        type="checkbox"
        className={classNames(
          "form-checkbox h-5 w-5 cursor-pointer appearance-none border border-gray-400 rounded",
          isChecked ? "bg-black" : "bg-white",
          isChecked ? "checked:text-white" : "",
          classes
        )}
        onChange={handleCheckboxChange}
      />
    );
  }

  return (
    <input
      type={type || "text"}
      placeholder={placeHolder}
      className={classes}
    />
  );
};

export default InputBox;
