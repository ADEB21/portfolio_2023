import React from "react";
import "./projectsCard.scss";

function ProjectsCard({ title, date }) {
  return (
    <li className="ad_projectCard-item">
      <div className="ad_projectCard_text">
        <p className="ad_projectCard_text-title card-title">{title}</p>
        <p className="ad_projectCard_text-date date">{date}</p>
      </div>
      <div className="ad_projectCard_picture"></div>
    </li>
  );
}

export default ProjectsCard;
