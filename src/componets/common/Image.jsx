import React from "react";
import PropTypes from "prop-types";
import NoImage from "../../img/no_img.jpeg";

const Image = ({ src = NoImage, style, styleClass, alt }) => {
  return (
    <>
      <img style={style} className={styleClass} src={src} alt={alt} />
    </>
  );
};

export default Image;

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string.isRequired
};
