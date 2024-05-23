import Image from "next/image";
import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";

const About = ({ data }) => {
  return (
    <div className="container">
      <h3>About</h3>
      <Image
        src={data.imageUrl}
        width={1000}
        height={1000}
        className="about-image"
        alt="Picture of me in london."
        unoptimized
      />
      <div className="text-container">
        <h4>
          Here's a <span>little</span> background.
        </h4>
        <ul>
          {data.aboutText.map((text, idx) => (
            <li key={idx}>{text}</li>
          ))}
        </ul>
        <div className="btn-container">
          <button className="submit-btn" aria-label="Go to Reumé page">
            Resumé <ArrowRightCircleIcon className="arrow-icon icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
