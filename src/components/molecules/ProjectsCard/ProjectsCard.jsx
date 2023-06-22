import React from "react";
import "./projectsCard.scss";
import Picture from "../../atoms/Picture/Picture";

function ProjectsCard(props) {
  const {title, date, img, to} = props
  return (
    <li className="ad_projectCard-item">
      <a href={to}>
        <div className="ad_projectCard_text">
          <p className="ad_projectCard_text-title card-title"><span>{title}</span></p>
          <p className="ad_projectCard_text-date date"><span>{date}</span></p>
        </div>
        <div className="ad_projectCard_picture">
          <Picture img={img} />
        </div>
      </a>
    </li>
  );
}

export default ProjectsCard;
