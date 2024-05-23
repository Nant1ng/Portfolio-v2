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
    <div className="container">
      <Image
        className="hero-image"
        src="https://i.postimg.cc/yNKc4Vfg/drawn-picture.jpg"
        width={1000}
        height={1000}
        priority
        alt="Drawn picture representing me"
      />
      <h1 className="role">{data.role}</h1>
      <h2 className="typewriter">
        {text}
        <Cursor cursorColor="white" />
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
