import React from "react";
import MarqueePictureStyle from "./marqueePicture.module.scss";
import "../../atoms/Picture/index";
import gongju from "../../../assets/scripts/vendor/gongju-es";

import ExperienceInCoverDesktopRetina from "../../../assets/images/projects/experience/inCover/experience-inCover-desktop-retina.jpg";
import ExperienceInCoverDesktopBase from "../../../assets/images/projects/experience/inCover/experience-inCover-desktop-base.jpg";
import ExperienceInCoverDesktopRetinaWebp from "../../../assets/images/projects/experience/inCover/experience-inCover-desktop-retina.webp";
import ExperienceInCoverDesktopBaseWebp from "../../../assets/images/projects/experience/inCover/experience-inCover-desktop-base.webp";
import ExperienceInCoverDesktopLazy from "../../../assets/images/projects/experience/inCover/experience-inCover-desktop-lazy.jpg";
import ExperienceInCoverMobileRetina from "../../../assets/images/projects/experience/inCover/experience-inCover-mobile-retina.jpg";
import ExperienceInCoverMobileBase from "../../../assets/images/projects/experience/inCover/experience-inCover-mobile-base.jpg";
import ExperienceInCoverMobileRetinaWebp from "../../../assets/images/projects/experience/inCover/experience-inCover-mobile-retina.webp";
import ExperienceInCoverMobileBaseWebp from "../../../assets/images/projects/experience/inCover/experience-inCover-mobile-base.webp";
import ExperienceInCoverMobileLazy from "../../../assets/images/projects/experience/inCover/experience-inCover-mobile-lazy.jpg";

const images = {
  mobile: {
    jpeg: [ExperienceInCoverMobileBase, ExperienceInCoverMobileRetina],
    webp: [ExperienceInCoverMobileBaseWebp, ExperienceInCoverMobileRetinaWebp],
  },
  desktop: {
    jpeg: [ExperienceInCoverDesktopBase, ExperienceInCoverDesktopRetina],
    webp: [
      ExperienceInCoverDesktopBaseWebp,
      ExperienceInCoverDesktopRetinaWebp,
    ],
  },
};

const Index = () => {
  const marquee = React.useRef();

  const animation = () => {
    const marqueeRect = gongju.getRectangle(marquee.current);
    const marqueeTopList = marquee.current.querySelector(".pictures-top ul");
    const marqueeBottomList = marquee.current.querySelector(".pictures-bottom ul");
    if (gongju.isVisible(marquee.current)) {
      let progress =
        (window.innerHeight - marqueeRect.top) /
        (window.innerHeight + marqueeRect.height);
      progress = Math.max(0, Math.min(1, progress));
      marqueeTopList.style = `--smooth-progress: ${progress};`;
      marqueeTopList.style.transform = `translateX(calc(var(--smooth-progress) * 100px))`;
      marqueeBottomList.style = `--smooth-progress: ${progress};`;
      marqueeBottomList.style.transform = `translateX(calc(var(--smooth-progress) * -100px))`;
    }
  };

  React.useEffect(() => {
    document.addEventListener("scroll", animation);
    return () => {
      document.removeEventListener("scroll", animation);
    }
  }, []);

  return (
    <section
      ref={marquee}
      className={`${MarqueePictureStyle.ad_marqueePicture}`}
    >
      <div
        className={`pictures-top ${MarqueePictureStyle.ad_marqueePicture_top}`}
      >
        <ul>
          <li>
            <custom-picture
              images={JSON.stringify(images)}
              poster-desktop={ExperienceInCoverDesktopLazy}
              poster-mobile={ExperienceInCoverMobileLazy}
              alt={"inCover.alternativeText"}
              width-desktop="429"
              height-desktop="300"
              width-mobile="200"
              height-mobile="134"
              is-lazy={true}
              is-parallax={false}
              parallax-direction="top"
            ></custom-picture>
          </li>
          <li>
            <custom-picture
              images={JSON.stringify(images)}
              poster-desktop={ExperienceInCoverDesktopLazy}
              poster-mobile={ExperienceInCoverMobileLazy}
              alt={"inCover.alternativeText"}
              width-desktop="207"
              height-desktop="300"
              width-mobile="97"
              height-mobile="134"
              is-lazy={true}
              is-parallax={false}
              parallax-direction="top"
            ></custom-picture>
          </li>
          <li>
            <custom-picture
              images={JSON.stringify(images)}
              poster-desktop={ExperienceInCoverDesktopLazy}
              poster-mobile={ExperienceInCoverMobileLazy}
              alt={"inCover.alternativeText"}
              width-desktop="692"
              height-desktop="300"
              width-mobile="324"
              height-mobile="134"
              is-lazy={true}
              is-parallax={false}
              parallax-direction="top"
            ></custom-picture>
          </li>
          <li>
            <custom-picture
              images={JSON.stringify(images)}
              poster-desktop={ExperienceInCoverDesktopLazy}
              poster-mobile={ExperienceInCoverMobileLazy}
              alt={"inCover.alternativeText"}
              width-desktop="231"
              height-desktop="300"
              width-mobile="108"
              height-mobile="134"
              is-lazy={true}
              is-parallax={false}
              parallax-direction="top"
            ></custom-picture>
          </li>
          <li>
            <custom-picture
              images={JSON.stringify(images)}
              poster-desktop={ExperienceInCoverDesktopLazy}
              poster-mobile={ExperienceInCoverMobileLazy}
              alt={"inCover.alternativeText"}
              width-desktop="504"
              height-desktop="300"
              width-mobile="236"
              height-mobile="134"
              is-lazy={true}
              is-parallax={false}
              parallax-direction="top"
            ></custom-picture>
          </li>
          <li>
            <custom-picture
              images={JSON.stringify(images)}
              poster-desktop={ExperienceInCoverDesktopLazy}
              poster-mobile={ExperienceInCoverMobileLazy}
              alt={"inCover.alternativeText"}
              width-desktop="429"
              height-desktop="300"
              width-mobile="200"
              height-mobile="134"
              is-lazy={true}
              is-parallax={false}
              parallax-direction="top"
            ></custom-picture>
          </li>
          <li>
            <custom-picture
              images={JSON.stringify(images)}
              poster-desktop={ExperienceInCoverDesktopLazy}
              poster-mobile={ExperienceInCoverMobileLazy}
              alt={"inCover.alternativeText"}
              width-desktop="207"
              height-desktop="300"
              width-mobile="97"
              height-mobile="134"
              is-lazy={true}
              is-parallax={false}
              parallax-direction="top"
            ></custom-picture>
          </li>
          <li>
            <custom-picture
              images={JSON.stringify(images)}
              poster-desktop={ExperienceInCoverDesktopLazy}
              poster-mobile={ExperienceInCoverMobileLazy}
              alt={"inCover.alternativeText"}
              width-desktop="692"
              height-desktop="300"
              width-mobile="324"
              height-mobile="134"
              is-lazy={true}
              is-parallax={false}
              parallax-direction="top"
            ></custom-picture>
          </li>
          <li>
            <custom-picture
              images={JSON.stringify(images)}
              poster-desktop={ExperienceInCoverDesktopLazy}
              poster-mobile={ExperienceInCoverMobileLazy}
              alt={"inCover.alternativeText"}
              width-desktop="231"
              height-desktop="300"
              width-mobile="108"
              height-mobile="134"
              is-lazy={true}
              is-parallax={false}
              parallax-direction="top"
            ></custom-picture>
          </li>
          <li>
            <custom-picture
              images={JSON.stringify(images)}
              poster-desktop={ExperienceInCoverDesktopLazy}
              poster-mobile={ExperienceInCoverMobileLazy}
              alt={"inCover.alternativeText"}
              width-desktop="504"
              height-desktop="300"
              width-mobile="236"
              height-mobile="134"
              is-lazy={true}
              is-parallax={false}
              parallax-direction="top"
            ></custom-picture>
          </li>
        </ul>
      </div>
      <div
        className={`pictures-bottom ${MarqueePictureStyle.ad_marqueePicture_bottom}`}
      >
        <ul>
          <li>
            <custom-picture
              images={JSON.stringify(images)}
              poster-desktop={ExperienceInCoverDesktopLazy}
              poster-mobile={ExperienceInCoverMobileLazy}
              alt={"inCover.alternativeText"}
              width-desktop="721"
              height-desktop="300"
              width-mobile="337"
              height-mobile="134"
              is-lazy={true}
              is-parallax={false}
              parallax-direction="top"
            ></custom-picture>
          </li>
          <li>
            <custom-picture
              images={JSON.stringify(images)}
              poster-desktop={ExperienceInCoverDesktopLazy}
              poster-mobile={ExperienceInCoverMobileLazy}
              alt={"inCover.alternativeText"}
              width-desktop="461"
              height-desktop="300"
              width-mobile="216"
              height-mobile="134"
              is-lazy={true}
              is-parallax={false}
              parallax-direction="top"
            ></custom-picture>
          </li>
          <li>
            <custom-picture
              images={JSON.stringify(images)}
              poster-desktop={ExperienceInCoverDesktopLazy}
              poster-mobile={ExperienceInCoverMobileLazy}
              alt={"inCover.alternativeText"}
              width-desktop="323"
              height-desktop="300"
              width-mobile="151"
              height-mobile="134"
              is-lazy={true}
              is-parallax={false}
              parallax-direction="top"
            ></custom-picture>
          </li>
          <li>
            <custom-picture
              images={JSON.stringify(images)}
              poster-desktop={ExperienceInCoverDesktopLazy}
              poster-mobile={ExperienceInCoverMobileLazy}
              alt={"inCover.alternativeText"}
              width-desktop="509"
              height-desktop="300"
              width-mobile="238"
              height-mobile="134"
              is-lazy={true}
              is-parallax={false}
              parallax-direction="top"
            ></custom-picture>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Index;
