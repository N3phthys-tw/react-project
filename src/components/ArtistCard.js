import { useState } from "react";
import "./ArtistCard.css";
import Modal from "./Modal";

const ArtistCard = ({ bands }) => {
  const [openIndex, setOpenIndex] = useState(-1);

  const handleClick = (index) => {
    setOpenIndex(index);
  };

  const renderedArtists = bands.map((artist, index) => {
    const isOpen = index === openIndex;

    const handleClose = () => {
      setOpenIndex(-1);
    };

    const modal = (
      <Modal handleClose={handleClose}>
        <h1>{artist.title}</h1>
        <img src={artist.bandpics} alt=""></img>
        <div className="description">
          <p>{artist.desc}</p>
        </div>
      </Modal>
    );

    return (
      <div key={artist.id} className="card-container">
        <div className="img-container">
          <img
            onClick={() => handleClick(index)}
            src={artist.bandpics}
            alt=""
          ></img>
        </div>
        <div className="card-title">
          <h3>{artist.title}</h3>
        </div>
        <div>{isOpen && modal}</div>
      </div>
    );
  });

  return <div className="artist">{renderedArtists}</div>;
};

export default ArtistCard;
