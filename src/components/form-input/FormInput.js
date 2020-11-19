import React from "react";

import "./FormInput.scss";

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <div className="group">
      <input
        type={otherProps.type}
        onChange={handleChange}
        {...otherProps}
        className="form-input"
      />
      {label && (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

FormInput.defaultProps = {
  type: "text",
};

export default FormInput;
