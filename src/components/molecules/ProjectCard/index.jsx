import React from "react";
import ProjectCardStyle from "./projectCard.module.scss";
import "../../atoms/Picture/index";

const index = (props) => {
  const { title, date, images, poster, slug, alt } = props;
  return (
    <a
      className={ProjectCardStyle.ad_projectCard_container}
      href={`/projects/${slug}`}
    >
      <article className={ProjectCardStyle.ad_projectCard}>
        <div className={ProjectCardStyle.ad_projectCard_infos}>
          <span>
            <h2>{title}</h2>
            <p>{date}</p>
          </span>
          <span>
            <h2>{title}</h2>
            <p>{date}</p>
          </span>
        </div>
        <div className={ProjectCardStyle.ad_projectCard_picture}>
          <custom-picture
            images={JSON.stringify(images)}
            poster-desktop={poster}
            poster-mobile={poster}
            alt={"alt"}
            width-desktop="288"
            height-desktop="380"
            width-mobile="288"
            height-mobile="380"
            is-lazy={false}
            is-parallax={false}
            parallax-direction="top"
          ></custom-picture>
        </div>
      </article>
    </a>
  );
};

export default index;
