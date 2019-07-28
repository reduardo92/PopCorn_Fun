import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ButtonLink = ({
  linkAddres = "",
  label,
  styleClass,
  type,
  btnFor = "submit"
}) => {
  const checkTag = {
    linkTag: (
      <Link to={linkAddres} className={`btn ${styleClass}`}>
        {label}
      </Link>
    ),
    aTag: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={linkAddres}
        className={`btn ${styleClass}`}
      >
        {label}
      </a>
    ),
    buttonTag: (
      <button type={btnFor} className={`btn ${styleClass}`}>
        {label}
      </button>
    )
  };

  return <> {checkTag[type]} </>;
};

export default ButtonLink;

ButtonLink.propTypes = {
  linkAddres: PropTypes.string,
  label: PropTypes.string.isRequired,
  styleClass: PropTypes.string,
  type: PropTypes.string.isRequired,
  btnFor: PropTypes.string
};
