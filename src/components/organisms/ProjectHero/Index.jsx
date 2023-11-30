import React from "react";
import ProjectHeroStyle from "./projectHero.module.scss";
import "../../atoms/Picture/";

const index = (props) => {
  const { title, date, inCover } = props;
  return (
    <section className={`project-hero ${ProjectHeroStyle.ad_projectHero}`}>
      <div className={ProjectHeroStyle.ad_projectHero_container}>
        <div className={ProjectHeroStyle.ad_projectHero_container_picture}>
          <custom-picture
            images={JSON.stringify(inCover.images)}
            poster-desktop={inCover.lazy.desktop}
            poster-mobile={inCover.lazy.mobile}
            alt={inCover.alternativeText}
            width-desktop="626"
            height-desktop="846"
            width-mobile="286"
            height-mobile="412"
            is-lazy={true}
            is-parallax={true}
            parallax-direction="top"
          ></custom-picture>
        </div>
        <div className={ProjectHeroStyle.ad_projectHero_container_text}>
          <h1 style={{width: "150%", textAlign: "center"}}><span>{title}</span></h1>
          <p><span>{date}</span></p>
        </div>
      </div>
    </section>
  );
};

export default index;
