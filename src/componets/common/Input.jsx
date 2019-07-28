import React from "react";
import PropTypes from "prop-types";

const Input = ({
  name,
  style,
  styleClass,
  type = "text",
  label,
  placeholder,
  reff
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        style={style}
        className={`form-control ${styleClass}`}
        placeholder={placeholder}
        type={type}
        id={name}
        ref={reff}
      />
    </div>
  );
};

export default Input;

Input.propTypes = {
  name: PropTypes.string,
  style: PropTypes.object,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  reff: PropTypes.object.isRequired
};
