import React from "react";
import PopCorn_logo from "../../img/popcorn_logo.png";
import Image from "../common/Image";
const ErrorPage = () => {
  return (
    <>
      <div className="mx-auto d-block" role="alert">
        <h4 className="alert-heading">Sorry nothing match search...</h4>
        <p className="">please try again</p>
        <Image
          src={PopCorn_logo}
          style={{ width: "250px" }}
          alt="sorry nothing match that search"
        />
      </div>
    </>
  );
};

export default ErrorPage;
