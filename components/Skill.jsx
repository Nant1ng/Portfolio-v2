import Image from "next/image";

const Skill = ({ data }) => {
  return (
    <div className="container">
      <h3>Skills</h3>
      <div className="skills-grid">
        {data.map((skill) => (
          <div key={skill.id} className="hover-container">
            <Image
              src={skill.imageUrl}
              width={1000}
              height={1000}
              alt={skill.skillName}
              className="skill"
            />
            <div className="hover-label">
              <p>{skill.skillName}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
