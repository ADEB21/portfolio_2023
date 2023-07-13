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
  beforeEnter(data) {
    console.log("beforeEnter", data);

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
  beforeEnter(data) {
    console.log("beforeEnter", data);

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
};

const handleTransitionCompleted = (data) => {
  const nextHtml = data.next.html;
  const nextHead = new DOMParser().parseFromString(nextHtml, "text/html").head;
  const currentHead = document.head;
  currentHead.innerHTML = nextHead.innerHTML;
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

    // barba.hooks.beforeEnter((data) => {
    //   console.log("coucou");
    //   handleTransitionCompleted(data);
    // });

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
