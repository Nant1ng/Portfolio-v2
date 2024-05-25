import { useState } from "react";
import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/24/solid";
import ProjectCard from "./project/ProjectCard";

const Project = ({ data }) => {
  const [currentCard, setCurrentCard] = useState(0);

  const handleNext = () => {
    setCurrentCard((prevCard) => (prevCard + 1) % data.length);
  };

  const handlePrev = () => {
    setCurrentCard((prevCard) => (prevCard - 1 + data.length) % data.length);
  };
  console.log(data);
  return (
    <div className="container">
      <h3>Project</h3>
      <div className="slider-content">
        <div className="arrow-btn" onClick={handlePrev}>
          <ArrowLeftCircleIcon />
        </div>
        <div className="slider">
          {data.map((project, idx) => (
            <div
              key={project.id}
              className={`slide ${idx === currentCard ? "active" : ""}`}
              style={{ display: idx === currentCard ? "flex" : "none" }}
            >
              <ProjectCard projectData={project} />
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

export default Project;
