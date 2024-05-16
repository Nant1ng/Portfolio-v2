import Image from "next/image";
import Link from "next/link";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Hero = ({ data }) => {
  const [text] = useTypewriter({
    words: data.greeting,
    loop: true,
    delaySpeed: 2000,
    typeSpeed: 50,
    deleteSpeed: 50,
  });

  return (
    <div id="hero">
      <h1 className="">{data.role}</h1>
      <h2>
        <span>
            {text} <Cursor cursorColor="white" />
        </span>
      </h2>
      <div className="link-buttons">
        <Link href="#about">
          <button className="link-button" aria-label="Learn more about me">
            About
          </button>
        </Link>
        <Link href="#experience">
          <button className="link-button" aria-label="View my work experience">
            Experience
          </button>
        </Link>
        <Link href="#skills">
          <button className="link-button" aria-label="Explore my skills">
            Skills
          </button>
        </Link>
        <Link href="#projects">
          <button className="link-button" aria-label="See my projects">
            Projects
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
