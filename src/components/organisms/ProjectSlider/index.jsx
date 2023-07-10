import React from "react";
import ProjectSliderStyle from "./projectSlider.module.scss";
import projectsData from "../../../assets/data/projects";
import ProjectCard from "../../molecules/ProjectCard";

const index = () => {
  return (
    <section className={ProjectSliderStyle.ad_projectSlider}>
      <ul>
        {projectsData.projects.map((p, index) => {
          return (
            <li key={index}>
              <ProjectCard
                title={p.title}
                date={p.date}
                images={p.outCover.picture.images}
                slug={p.slug}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default index;
