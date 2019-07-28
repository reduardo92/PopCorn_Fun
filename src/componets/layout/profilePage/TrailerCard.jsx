import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

const TrailerCard = ({ data }) => {
  const [toggle, setToggle] = useState(false);
  const [video, setVideo] = useState({});

  return (
    <>
      <section className="trailer text-dark mx-auto mb-2">
        <h3>
          <strong>Trailer's</strong>
        </h3>
        <div style={flexSlider}>
          {data.map(t => (
            <div
              key={t.id}
              className="thumbnail px-1 shadow hover"
              style={{ flexShrink: "0", position: "relative" }}
            >
              <div className="rounded" style={setImg(t.key)} />
              <button
                onClick={() => {
                  setToggle(true);
                  setVideo({ name: t.name, key: t.key });
                }}
                className="btn btn-success rounded-pill"
                style={centerButton}
              >
                Play
              </button>
            </div>
          ))}
        </div>

        <Modal centered size="lg" show={toggle} onHide={() => setToggle(false)}>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              className="embed-responsive-item"
              src={`https://www.youtube.com/embed/${video.key}`}
              title={video.name}
              allowFullScreen
            />
          </div>
        </Modal>
      </section>
    </>
  );
};

export default TrailerCard;

const flexSlider = {
  display: "flex",
  overflowX: "auto",
  WebkitOverflowScrolling: "touch",
  scrollSnapPointsX: "repeat(480px)",
  scrollSnapType: "mandatory"
};
const centerButton = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)"
};

const setImg = key => ({
  backgroundImage: `url(http://img.youtube.com/vi/${key}/0.jpg)`,
  backgroundSize: "cover",
  objectFit: "cover",
  width: "480px",
  height: "270px",
  backgroundPositionY: "-45px"
});
