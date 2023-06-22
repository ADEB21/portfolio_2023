import barba from "@barba/core";
import barbaRouter from "@barba/router";
import { gsap } from "gsap";

// define your routes
const myRoutes = [
  {
    path: "/",
    name: "index",
  },
  {
    path: "/about",
    name: "shop",
  },
  {
    path: "/contact",
    name: "about",
  },
];

// tell Barba to use the router with your routes
barba.use(barbaRouter, {
  routes: myRoutes,
});


const tl = gsap.timeline();

function delay(n) {
  return new Promise((done) => {
    setTimeout(() => {
      done();
    }, n);
  });
}

barba.init({
  sync: true,
  transitions: [
    {
      name: "default-transition",
      leave() {
        gsap.fromTo("main", { opacity: 1 }, {opacity: 0, duration: 10});
      },
      enter() {
        gsap.fromTo("main", {opacity: 0}, { opacity: 1 });
      },
    },
  ],
});
