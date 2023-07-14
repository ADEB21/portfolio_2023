import React from "react";
import barba from "@barba/core";
import axios from "axios";
import gsap from "gsap";
import TransitionPageStyle from "./transitionPage.module.scss";
import projectsData from "../../../assets/data/projects";
import ProjectSliderStyle from "../../../components/molecules/ProjectCard/projectCard.module.scss";
import gongju from "../../../assets/scripts/vendor/gongju-es";

const projectTransition = {
  name: "fade",
  from: {
    custom: (data) => {
      return ["/"].includes(data.current.url.path);
    },
  },
  to: {
    custom: (data) => {
      return [
        ...projectsData.projects.map((el) => "/projects/" + el.slug),
      ].includes(data.next.url.path);
    },
  },
  async leave(data) {
    window.lenis.stop();
    const triggeredProject = data.trigger;
    const triggeredProjectTitle = data.trigger.querySelector(
      "article div:nth-child(1)"
    );
    const triggeredProjectPicture = data.trigger.querySelector(
      "article div:nth-child(2)"
    );

    const section = document.querySelector(".ad_projectSlider-container");
    const sectionBtns = document.querySelector(
      ".ad_projectSlider-container > div"
    );
    const triggeredProjectPictureRect = gongju.getRectangle(
      triggeredProjectPicture
    );

    const projectsCards = [
      ...document.querySelectorAll(".ad_projectSlider-container ul li a"),
    ];
    const projectsCardsFiltered = projectsCards.filter(
      (card) => card !== triggeredProject
    );
    const done = this.async();
    let tl = gsap.timeline({
      onComplete: () => {
        done();
      },
    });
    tl.fromTo(
      triggeredProjectTitle,
      {
        clipPath: "inset(0)",
      },
      {
        clipPath: "inset(0 0 0 100%)",
      }
    );
    tl.fromTo(
      projectsCardsFiltered,
      {
        clipPath: "inset(0)",
      },
      {
        clipPath: "inset(100% 0 0 0)",
        stagger: 0.1,
      },
      ">-0.2"
    );
    tl.fromTo(
      sectionBtns,
      {
        opacity: 1,
      },
      {
        opacity: 0,
      },
      ">-1"
    );
    tl.fromTo(
      triggeredProjectPicture,
      {
        position: "absolute",
        width: 288,
        top: triggeredProjectPictureRect.top,
        left: triggeredProjectPictureRect.left,
      },
      {
        position: "absolute",
        width: 626,
        height: "80vh",
        left: "50%",
        top: "50%",
        x: "-50%",
        y: "-50%",
      },
      ">"
    );
    tl.to(
      section,
      {
        mixBlendMode: "luminosity",
        opacity: 0.3,
        filter: "blur(5px)",
      },
      "<"
    );
  },
  beforeEnter(data) {
    // Get the existing styles in the current document head
    var existingStyles = Array.from(
      document.head.querySelectorAll('link[rel="stylesheet"]')
    );

    // Create a temporary document object
    var tempDoc = document.implementation.createHTMLDocument();
    tempDoc.documentElement.innerHTML = data.next.html;

    // Get the styles from the <head> of the HTML string
    var newStyles = Array.from(
      tempDoc.head.querySelectorAll('link[rel="stylesheet"]')
    );

    // Filter out the styles that don't exist in the current document head
    var stylesToInject = newStyles.filter(function (style) {
      return !existingStyles.some(function (existingStyle) {
        return existingStyle.href === style.href;
      });
    });

    // Inject the filtered styles into the current document head
    stylesToInject.forEach(function (style) {
      document.head.appendChild(style.cloneNode(true));
    });
  },
  enter() {},
  after() {
    window.lenis.start();
  },
};

const defaultTransition = {
  name: "pan",
  from: {
    custom: (data) => {
      return [
        "/",
        "/about",
        "/contact",
        ...projectsData.projects.map((el) => "/projects/" + el.slug),
      ].includes(data.current.url.path);
    },
  },
  to: {
    custom: (data) => {
      return ["/", "/about", "/contact"].includes(data.next.url.path);
    },
  },

  async leave() {
    const done = this.async();
    gsap.fromTo(".transition-page", { y: "-100%", x: 0 }, { y: 0 });
    setTimeout(() => {
      done();
    }, 500);
  },
  beforeEnter(data) {
    window.lenis.stop();
    // Get the existing styles in the current document head
    var existingStyles = Array.from(
      document.head.querySelectorAll('link[rel="stylesheet"]')
    );

    // Create a temporary document object
    var tempDoc = document.implementation.createHTMLDocument();
    tempDoc.documentElement.innerHTML = data.next.html;

    // Get the styles from the <head> of the HTML string
    var newStyles = Array.from(
      tempDoc.head.querySelectorAll('link[rel="stylesheet"]')
    );

    // Filter out the styles that don't exist in the current document head
    var stylesToInject = newStyles.filter(function (style) {
      return !existingStyles.some(function (existingStyle) {
        return existingStyle.href === style.href;
      });
    });

    // Inject the filtered styles into the current document head
    stylesToInject.forEach(function (style) {
      document.head.appendChild(style.cloneNode(true));
    });
  },
  enter() {
    gsap.fromTo(".transition-page", { y: 0 }, { y: "100%" });
  },
  after() {
    window.lenis.start();
  },
};

const TransitionPage = () => {
  const delay = (n) => {
    return new Promise((done) => {
      setTimeout(() => {
        done();
      }, n);
    });
  };

  React.useEffect(() => {
    barba.init({
      sync: true,
      transitions: [defaultTransition, projectTransition],
    });

    console.log(
      "Routes",
      projectsData.projects.map((el) => el.slug)
    );
  }, []);

  return (
    <div
      className={`${TransitionPageStyle.transition_page} transition-page`}
    ></div>
  );
};

export default TransitionPage;
