import React from "react";
import LastImageStyle from "./lastImage.module.scss";
import "../../atoms/Picture/index";

const Index = (props) => {
  const {images, posterDesktop, posterMobile, alt} = props
  return (
    <section className={LastImageStyle.ad_lastImageStyle}>
      <custom-picture
        images={JSON.stringify(images)}
        poster-desktop={posterDesktop}
        poster-mobile={posterMobile}
        alt={alt}
        width-desktop="1440"
        height-desktop="864"
        width-mobile="320"
        height-mobile="191"
        is-lazy={true}
        is-parallax={true}
        parallax-direction="bottom"
      ></custom-picture>
    </section>
  );
};

export default Index;
