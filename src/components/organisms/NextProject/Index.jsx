import React from "react";
import NextProjectStyle from "./nextProject.module.scss";
import data from "../../../assets/data/projects";
import "../../atoms/Picture/index";

const Index = (props) => {
  const { nextProject } = props;
  console.log("le slug", nextProject, data.projects[0]);
  return (
    <section className={NextProjectStyle.ad_nextProject}>
      <a
        className={NextProjectStyle.ad_nextProject_link}
        onClick={() => {
          lenis.scrollTo(0, 0);
        }}
        href={`/projects/${
          nextProject ? nextProject.slug : data.projects[0].slug
        }`}
      >
        <div className={NextProjectStyle.ad_nextProject_link_picture}>
          <custom-picture
            images={JSON.stringify(
              nextProject
                ? nextProject.inCover.picture.images
                : data.projects[0].inCover.picture.images
            )}
            poster-desktop={
              nextProject
                ? nextProject.inCover.picture.lazy.desktop
                : data.projects[0].inCover.picture.lazy.desktop
            }
            poster-mobile={
              nextProject
                ? nextProject.inCover.picture.lazy.mobile
                : data.projects[0].inCover.picture.lazy.mobile
            }
            alt="This is the default alternative text"
            width-desktop="1130"
            height-desktop="608"
            width-mobile="1130"
            height-mobile="608"
            is-lazy={true}
            is-parallax={true}
            parallax-direction="top"
          ></custom-picture>
          <div className={NextProjectStyle.ad_nextProject_link_picture_text}>
            <p>Projet suivant</p>
            <h1>{nextProject ? nextProject.title : data.projects[0].title}</h1>
          </div>
        </div>
      </a>
    </section>
  );
};

export default Index;
