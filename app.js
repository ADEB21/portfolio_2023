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
    path: "/scc",
    name: "scc",
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
      name: "fade",
      async leave() {
        const done = this.async();
        gsap.to("main", { opacity: 0 });

        await delay(500);
        done();
      },
      enter() {
        gsap.fromTo("main", { opacity: 0 }, { opacity: 1 });
      },
    },
  ],
});
