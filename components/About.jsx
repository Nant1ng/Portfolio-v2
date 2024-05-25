import Image from "next/image";
import Link from "next/link";
import { ArrowDownCircleIcon } from "@heroicons/react/24/solid";

const About = ({ data }) => {
  const aboutData = data[0];
  const { imageUrl, aboutText } = aboutData;

  return (
    <div className="container">
      <h3>About</h3>
      <Image
        src={imageUrl}
        width={1000}
        height={1000}
        className="about-image"
        alt="Picture of me in london."
        unoptimized
      />
      <div className="text-container">
        <h4>
        Here&apos;s a <span>little</span> background.
        </h4>
        <ul>
          {aboutText.map((text, idx) => (
            <li key={idx}>{text}</li>
          ))}
        </ul>
        <div className="btn-container">
          <Link
            href="/resume.pdf"
            download="resume.pdf"
            target="_blank"
            className="submit-btn"
            aria-label="Download my Resumé"
          >
            Download my Resumé
            <ArrowDownCircleIcon className="arrow-icon icon" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
