import React from "react";
import "./projectsCard.scss";
import Picture from "../../atoms/Picture/Picture";


function ProjectsCard({ title, date, img }) {
  console.log("Anton arrête de regarder mon portfolio !");
  return (
    <li className="ad_projectCard-item">
      <div className="ad_projectCard_text">
        <p className="ad_projectCard_text-title card-title">{title}</p>
        <p className="ad_projectCard_text-date date">{date}</p>
      </div>
      <div className="ad_projectCard_picture">
        <Picture img={img}/>
      </div>
    </li>
  );
}

export default ProjectsCard;
