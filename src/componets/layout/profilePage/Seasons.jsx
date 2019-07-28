import React from "react";
import { Link } from "react-router-dom";
import Image from "../../common/Image";

const Seasons = ({ status, currentSeason }) => (
  <>
    <section className="seasons">
      <h3>
        <strong>{status === "Ended" ? "Last Season" : "Current Season"}</strong>
      </h3>
      <div className="media shadow p-2 mb-3 bg-white rounded">
        <Image
          src={
            currentSeason.poster_path !== undefined
              ? `https://image.tmdb.org/t/p/original/${
                  currentSeason.poster_path
                }`
              : undefined
          }
          style={{ width: "130px", height: "190px" }}
          styleClass="mr-3"
          alt={currentSeason.name}
        />
        <div className="media-body">
          <h5 className="mt-0">
            <strong>Season {currentSeason.season_number}</strong>
            <span className="text-dark font-weight-bold">
              {currentSeason.air_date.slice(0, 4)} |{" "}
              {currentSeason.episode_count} Episodes
            </span>
          </h5>{" "}
          <p className="text-dark">
            {currentSeason.overview === "" ? "N/A" : currentSeason.overview}
          </p>
        </div>
      </div>
      <Link to="" className="btn btn-secondary  my-2">
        View All Seasons
      </Link>
    </section>
  </>
);

export default Seasons;
