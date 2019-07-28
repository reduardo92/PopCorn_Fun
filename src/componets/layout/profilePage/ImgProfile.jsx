import React from "react";
import Image from "../../common/Image";

const ImgProfile = ({ data }) => {
  return (
    <>
      <div className="col-10 mx-auto col-md-5 mt-5">
        <Image
          src={
            data !== null
              ? `https://image.tmdb.org/t/p/original/${data}`
              : undefined
          }
          style={{ maxWidth: "300px" }}
          styleClass="card-img-top mx-auto d-block shadow"
          alt="Poster"
        />
      </div>
    </>
  );
};

export default ImgProfile;
