import React from "react";
import barba from "@barba/core";
import axios from "axios";
import gsap from "gsap";
import TransitionPageStyle from "./transitionPage.module.scss";
import projectsData from "../../../assets/data/projects";

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
  async leave() {
    const done = this.async();
    gsap.fromTo(".transition-page", { x: "-100%", y: 0 }, { x: 0 });
    setTimeout(() => {
      done();
    }, 500);
  },
  enter() {
    gsap.fromTo(".transition-page", { x: 0 }, { x: "100%" });
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
  enter() {
    gsap.fromTo(".transition-page", { y: 0 }, { y: "100%" });
  },
};

const handleTransitionCompleted = (data) => {
  const nextHtml = data.next.html
  const nextHead = new DOMParser().parseFromString(nextHtml, "text/html").head;
  const currentHead = document.head
  console.log(currentHead);
  currentHead.innerHTML = nextHead.innerHTML
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

    barba.hooks.afterEnter((data) => {
      handleTransitionCompleted(data);
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
