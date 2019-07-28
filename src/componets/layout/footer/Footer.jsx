import React from "react";
import PopCorn_logo from "../../../img/popcorn_logo.png";
import Image from "../../common/Image";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: " #020407",
        backgroundImage: "linear-gradient(0deg, #020407 0%, #122e5a 100%)"
      }}
      className="navbar-dark  h-100 text-center"
    >
      <Link className="navbar-brand" to="/movie">
        <Image
          src={PopCorn_logo}
          alt="Popcorn Fun"
          style={{ width: "40px" }}
          styleClass="d-inline-block align-bottom"
        />
        {"  "}
        <span className="d-block">PopCorn Fun</span>
      </Link>
      <p className="">Coded by Eduardo Rivas</p>
    </div>
  );
};

export default Footer;
