import { useState } from "react";
import ExperienceCard from "./experience/ExperienceCard";
import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/24/solid";

const Experience = ({ data }) => {
  const [currentCard, setCurrentCard] = useState(0);

  const handleNext = () => {
    setCurrentCard((prevCard) => (prevCard + 1) % data.length);
  };

  const handlePrev = () => {
    setCurrentCard((prevCard) => (prevCard - 1 + data.length) % data.length);
  };

  return (
    <div className="container">
      <h3>Experience</h3>
      <div className="slider-content">
        <div className="arrow-btn" onClick={handlePrev}>
          <ArrowLeftCircleIcon />
        </div>
        <div className="slider">
          {data.map((experience, idx) => (
            <div
              key={idx}
              className={`slide ${idx === currentCard ? "active" : ""}`}
              style={{ display: idx === currentCard ? "flex" : "none" }}
            >
              <ExperienceCard experienceData={experience} />
            </div>
          ))}
        </div>
        <div className="arrow-btn" onClick={handleNext}>
          <ArrowRightCircleIcon />
        </div>
      </div>
    </div>
  );
};

export default Experience;
