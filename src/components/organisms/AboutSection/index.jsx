import React from "react";
import AboutSectionStyle from "./aboutSection.module.scss";
import "../../atoms/Picture/index";
import Button from "../../atoms/Button"

import AboutDesktopRetina from "../../../assets/images/about/about-desktop-retina.jpg";
import AboutDesktopBase from "../../../assets/images/about/about-desktop-base.jpg";
import AboutDesktopRetinaWebp from "../../../assets/images/about/about-desktop-retina.webp";
import AboutDesktopBaseWebp from "../../../assets/images/about/about-desktop-base.webp";

import AboutMobileRetina from "../../../assets/images/about/about-mobile-retina.jpg";
import AboutMobileBase from "../../../assets/images/about/about-mobile-base.jpg";
import AboutMobileRetinaWebp from "../../../assets/images/about/about-mobile-retina.webp";
import AboutMobileBaseWebp from "../../../assets/images/about/about-mobile-base.webp";

import AboutDesktopLazy from "../../../assets/images/about/about-desktop-lazy.jpg";
import AboutMobileLazy from "../../../assets/images/about/about-mobile-lazy.jpg";

const images = {
  mobile: {
    jpeg: [AboutDesktopBase, AboutDesktopRetina],
    webp: [AboutDesktopBaseWebp, AboutDesktopRetinaWebp],
  },
  desktop: {
    jpeg: [AboutMobileBase, AboutMobileRetina],
    webp: [AboutMobileBaseWebp, AboutMobileRetinaWebp],
  },
};

const index = () => {
  return (
    <section className={`${AboutSectionStyle.ad_aboutSection}`}>
      <div className={`${AboutSectionStyle.ad_aboutSection_container}`}>
        <div
          className={`${AboutSectionStyle.ad_aboutSection_container_picture}`}
        >
          <custom-picture
            images={JSON.stringify(images)}
            poster-desktop={AboutDesktopLazy}
            poster-mobile={AboutMobileLazy}
            alt={"photo de votre futur développeur"}
            width-desktop="466"
            height-desktop="844"
            width-mobile="320"
            height-mobile="368"
            is-lazy={false}
            is-parallax={false}
            parallax-direction="top"
          ></custom-picture>
        </div>
        <div className={`${AboutSectionStyle.ad_aboutSection_container_content}`}>
            <p>Salut ! Je m'appelle Arthur Debruille. Je suis un développeur créatif basé à Lyon et à Dijon, en France.  À mes 21 ans, j'ai déjà une passion dévorante pour le monde du développement web et du design numérique.</p>
            <p>Je suis familier avec des technologies telles que React, Vue, Svelte, Next, Nuxt, Astro et Gatsby, et je suis toujours motivé pour élargir mes compétences et explorer de nouvelles possibilités. Vous pouvez regarder les différents projets que j’ai réalisé en cliquant <a className="bi-mid-body" href="/">ici</a></p>
            <p>Mes compétences englobent également les notions d'UX/UI, car je suis convaincu que la combinaison d'un design esthétique et d'une expérience utilisateur fluide est essentielle pour créer des produits numériques réussis.</p>
            <p>En plus de mes compétences en développement, je maîtrise également les logiciels essentiels tels que Photoshop, Illustrator, Figma et Notion. Ces outils me permettent de donner vie à mes idées créatives et de travailler efficacement tout au long du processus de conception.</p>
            <p>Je suis passionné par la création de solutions numériques qui résolvent des problèmes réels et qui inspirent les utilisateurs. Chaque projet est une opportunité de relever de nouveaux défis et d'apprendre quelque chose de nouveau.</p>
            <p>Si vous recherchez un développeur créatif qui allie compétences techniques et sensibilité artistique, je serais ravi de collaborer avec vous. N'hésitez pas à me <a className="bi-mid-body" href="/contact">contacter</a> pour discuter de vos idées et de vos projets passionnants.</p>
        </div>
      </div>
    </section>
  );
};

export default index;
