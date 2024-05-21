import Image from "next/image";
import React from "react";

const About = ({ data }) => {
  console.log(data);
  return (
    <div className="container">
      <h3>About</h3>
      <Image
        src={data.imageUrl}
        width={1000}
        height={1000}
        className="about-image"
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
      </div>
    </div>
  );
};

export default About;
