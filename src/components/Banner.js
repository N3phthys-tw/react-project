import "./Banner.css";
import Navbar from "./Navbar";

const Banner = () => {
  return (
    <div className="banner">
      <Navbar />
      <div className="intro">
        <p className="address">Taipei, Taiwan</p>
        <p className="title">Band Festival</p>
        <p className="time">30 May 2023</p>
      </div>
    </div>
  );
};

export default Banner;
