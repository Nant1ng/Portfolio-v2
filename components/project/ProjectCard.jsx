import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ projectData }) => {
  const { description, imageUrl, link, tags, title } = projectData;
  return (
    <article className="card">
      <div className="card-header">
        <div className="card-header-text">
          <h4>{title}</h4>
          <h5 className="tags-container">
            <span>Made with: </span>
            {tags.map((tag, idx) => (
              <div className="tag" key={idx}>
                {tag}
              </div>
            ))}
          </h5>
        </div>
      </div>
      <div className="card-content">
        <Link href={link} target="_blank">
          <Image
            src={imageUrl}
            width={300}
            height={150}
            alt={title}
            className="card-image"
          />
        </Link>
        <p className="description">{description}</p>
        <Link href={link} target="_blank">
          <button type="submit" className="submit-btn">
            Go to Project
          </button>
        </Link>
      </div>
    </article>
  );
};

export default ProjectCard;
