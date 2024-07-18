import React from "react";
import "./intro.css";
import introimg from "../../assets/introimg.jpg";
import { useNavigate } from "react-router-dom";

const Intro = () => {


  const navigate = useNavigate();
  const handleToEnter = () => {
navigate("/login");
  };

  return (
    <section id="intro">
      <div className="introContent">
        <p className="introPara">
          "Empowering Your Peace of Mind: Providing Comprehensive Insurance
          Solutions Tailored to Safeguard What Matters Most.".
        </p>
      </div>
      <img src={introimg} alt="profile" className="intro" />

      <div className="enter">
        <button className="enter-btn" onClick={handleToEnter}>
          Click here to enter
        </button>
      </div>
    </section>
  );
};

export default Intro;
