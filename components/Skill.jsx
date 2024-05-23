import Image from "next/image";

const Skill = ({ data }) => {
  return (
    <div className="container">
      <h3>Skills</h3>
      <div className="skills-grid">
        {data.map((skill, idx) => (
          <div key={idx} className="hover-container">
            <Image
              key={idx}
              src={skill.imageUrl}
              width={1000}
              height={1000}
              alt={skill.skill}
              className="skill"
            />
            <div className="hover-label">{skill.skill}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
