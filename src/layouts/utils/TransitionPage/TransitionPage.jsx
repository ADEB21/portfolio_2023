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
  async enter() {
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
  async enter() {
    gsap.fromTo(".transition-page", { y: 0 }, { y: "100%" });
  },
};

const handleTransitionCompleted = async (data) => {
  // const htmlPage =  data.next.html;
  // const parser = new DOMParser();
  // const html = parser.parseFromString(htmlPage, "text/html");
  // const newHead = html.head;
  // const oldHead = document.querySelector("head");
  // console.log(oldHead);
  // document.documentElement.replaceChild(newHead, oldHead);
  try {
    // Récupérer le contenu HTML de la page suivante
    const response = await data.next.html;
    console.log(response);
    const parser = new DOMParser();
    const html = parser.parseFromString(response, "text/html");

    // Mettre à jour le <head> de la page actuelle avec le contenu du <head> de la page suivante
    const currentHead = document.querySelector("head");
    console.log(currentHead);
    currentHead.innerHTML = html.head.innerHTML;

    // Détruire l'élément DOM temporaire
  } catch (error) {
    console.error(
      "Une erreur s'est produite lors de la mise à jour du <head>",
      error
    );
  }
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

    barba.hooks.after((data) => {
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
