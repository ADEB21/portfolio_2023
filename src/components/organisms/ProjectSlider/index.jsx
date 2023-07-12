import React from "react";
import ProjectSliderStyle from "./projectSlider.module.scss";
import projectsData from "../../../assets/data/projects";
import ProjectCard from "../../molecules/ProjectCard";

const index = () => {
  const slider = React.useRef();
  const [currentScroll, setCurrentScroll] = React.useState(0);

  const nextItem = () => {
    let scroller = slider.current.querySelector(".bi_home-slider-content");
    const items = scroller.querySelectorAll("li");
    const firstItem = items[0];
    const itemWidth = firstItem.offsetWidth + 20; // inclut la largeur de l'élément et de l'espace
    const scrollAmount = scroller.scrollLeft + itemWidth;
    setCurrentScroll(scrollAmount);
    scroller.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  const previousItem = () => {
    let scroller = slider.current.querySelector(".bi_home-slider-content");
    const items = scroller.querySelectorAll("li");
    const firstItem = items[0];

    const itemWidth = firstItem.offsetWidth + 20; // inclut la largeur de l'élément et de l'espace
    const scrollAmount = scroller.scrollLeft - itemWidth;
    setCurrentScroll(scrollAmount);
    scroller.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  React.useEffect(() => {
    let scroller = slider.current.querySelector(".bi_home-slider-content");
    const items = scroller.querySelectorAll("li");
    const firstItem = items[0];
    const lastItem = items.length - 1;
    const previousSvg = slider.current.querySelector(".previousBtn");
    const previousBtn = slider.current.querySelector(
      '[aria-label="Precedent"]'
    );
    const nextSvg = slider.current.querySelector(".nextBtn");
    const nextBtn = slider.current.querySelector('[aria-label="Suivant"]');

    const observer = new IntersectionObserver(
      (entries, index) => {
        entries.forEach((entry, index) => {
          const intersectingIndex = [...items].indexOf(entry.target);
          const isFirstItem = intersectingIndex === 0;
          const isLastItem = intersectingIndex === lastItem;
          if (entry.isIntersecting) {
            if (isFirstItem) {
              previousSvg.classList.add(ProjectSliderStyle["left"]);
              previousBtn.style.pointerEvents = "none";
            }
            if (isLastItem) {
              nextSvg.classList.add(ProjectSliderStyle["right"]);
              nextBtn.style.pointerEvents = "none";
            }
          }else{
            if (isFirstItem) {
              previousSvg.classList.remove(ProjectSliderStyle["left"]);
              previousBtn.style.pointerEvents = "";
            }
            if (isLastItem) {
              nextSvg.classList.remove(ProjectSliderStyle["right"]);
              nextBtn.style.pointerEvents = "";
            }
          }
        });
      },
      {
        rootMargin: "0px",
        threshold: 1,
      }
    );
    items.forEach((i) => {
      observer.observe(i);
    });
  }, [currentScroll]);

  return (
    <section ref={slider} className={ProjectSliderStyle.ad_projectSlider}>
      <ul className="bi_home-slider-content">
        {projectsData.projects.map((p, index) => {
          return (
            <li key={index}>
              <ProjectCard
                title={p.title}
                date={p.date}
                images={p.outCover.picture.images}
                slug={p.slug}
              />
            </li>
          );
        })}
      </ul>
      <div className={ProjectSliderStyle.ad_projectSlider_btns}>
        <div>
          <button
            aria-label="Precedent"
            onClick={() => {
              previousItem();
            }}
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`previousBtn ${ProjectSliderStyle.previous}`}
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20 5.88094e-06C31.0457 3.03189e-06 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.9543 40 7.8281e-07 31.0457 -2.06624e-06 20C-1.1006e-06 8.95431 8.9543 8.72999e-06 20 5.88094e-06ZM24.667 25.5489L22.891 27.2642L15.3337 19.9653L22.891 12.6664L24.667 14.3817L18.8982 19.9653L24.667 25.5489Z"
                fill="#4C2B24"
              />
            </svg>
          </button>
          <button
            aria-label="Suivant"
            onClick={() => {
              nextItem();
            }}
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`nextBtn ${ProjectSliderStyle.next}`}
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20 40C31.0457 40 40 31.0457 40 20C40 8.95431 31.0457 5.4282e-06 20 3.49691e-06C8.9543 1.56562e-06 -1.56562e-06 8.9543 -3.49691e-06 20C-5.4282e-06 31.0457 8.9543 40 20 40ZM15.333 14.4506L17.109 12.7354L24.6663 20.0342L17.109 27.3331L15.333 25.6178L21.1018 20.0342L15.333 14.4506Z"
                fill="#4C2B24"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default index;