import Image from "next/image";

const ExperienceCard = ({ experienceData }) => {
  const {
    title,
    imageUrl,
    companyName,
    tags,
    startedAt,
    isCurrentlyWorkingHere,
    endedAt,
    description,
  } = experienceData;

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  return (
    <article className="card">
      <div className="card-header">
        <div className="card-header-text">
          <h4>{title}</h4>
          <h5>
            At {companyName}:{" "}
            <span className="date">
              {formatDate(startedAt)} -{" "}
              {isCurrentlyWorkingHere ? "Present" : formatDate(endedAt)}
            </span>
          </h5>
        </div>
        <Image src={imageUrl} width={50} height={50} alt={title} className="card-image" />
      </div>
      <div className="card-content">
        <div className="tags-container">
          <p>Worked with: </p>
          <div className="tags">
            {tags.map((tag, idx) => (
              <div className="tag" key={idx}>
                {tag}
              </div>
            ))}
          </div>
        </div>
        <ul>
          {description.map((text, idx) => (
            <li key={idx}>{text}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
