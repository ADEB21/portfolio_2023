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
    const itemWidth = firstItem.offsetWidth + 20;
    

    console.log(
      itemWidth
    );
    if (currentScroll < itemWidth / 2) {
      slider.current.querySelector(".previousBtn").classList.add(ProjectSliderStyle["left"]);
    } else {
      slider.current.querySelector(".previousBtn").classList.remove(ProjectSliderStyle["left"]);
    }

    if (currentScroll > scroller.offsetWidth + itemWidth / 2 + 1000) {
      slider.current.querySelector(".nextBtn").classList.add(ProjectSliderStyle["right"]);
    } else {
      slider.current.querySelector(".nextBtn").classList.remove(ProjectSliderStyle["right"]);
    }
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

// const HomeSlider = ({ data }) => {
//   const { first, second, actuData, baseUrl, solutions } = data;
//   const slider = useRef();
//   const [currentScroll, setCurrentScroll] = React.useState(0);

//   const getElements = (slider) => {
//     return [...slider.querySelectorAll(".bi_home-slider-content li")];
//   };

//   const nextItem = () => {
//     let scroller = slider.current.querySelector('.bi_home-slider-content');
//     const items = scroller.querySelectorAll('li');
//     const firstItem = items[0];
//     const itemWidth = firstItem.offsetWidth + 20; // inclut la largeur de l'élément et de l'espace
//     const scrollAmount = scroller.scrollLeft + itemWidth;
//     setCurrentScroll(scrollAmount);
//     scroller.scrollTo({
//       left: scrollAmount,
//       behavior: "smooth"
//     });
//   }

//   const previousItem = () => {
//     let scroller = slider.current.querySelector('.bi_home-slider-content');
//     const items = scroller.querySelectorAll('li');
//     const firstItem = items[0];
//     const itemWidth = firstItem.offsetWidth + 20; // inclut la largeur de l'élément et de l'espace
//     const scrollAmount = scroller.scrollLeft - itemWidth;
//     setCurrentScroll(scrollAmount);
//     scroller.scrollTo({
//       left: scrollAmount,
//       behavior: "smooth"
//     });
//   }

//   React.useEffect(() => {
//     const guides = [
//       ...slider.current.querySelectorAll(".bi_home-slider-mobile-guides span"),
//     ];

//     const observer = new IntersectionObserver(
//       (entries, index) => {
//         entries.forEach((entry, index) => {
//           const intersectingIndex = getElements(slider.current).indexOf(
//             entry.target
//           );
//           if (entry.isIntersecting) {
//             guides[intersectingIndex].classList.add("active");
//           } else {
//             guides[intersectingIndex].classList.remove("active");
//           }
//         });
//       },
//       {
//         rootMargin: "0px",
//         threshold: 0.5,
//       }
//     );
//     getElements(slider.current).forEach((v) => {
//       observer.observe(v);
//     });
//   }, []);

//   React.useEffect(() => {
//     let scroller = slider.current.querySelector('.bi_home-slider-content');
//     const items = scroller.querySelectorAll('li');
//     const firstItem = items[0];
//     const itemWidth = firstItem.offsetWidth + 20;

//     console.log("currentScroll", currentScroll, scroller.scrollRight, slider.current);
//     if(currentScroll < itemWidth / 2){
//       slider.current.querySelector('.arrows').classList.add('left');
//     } else {
//       slider.current.querySelector('.arrows').classList.remove('left');
//     }

//     if(currentScroll > scroller.offsetWidth - (itemWidth / 2)){
//       slider.current.querySelector('.arrows').classList.add('right');
//     } else {
//       slider.current.querySelector('.arrows').classList.remove('right');
//     }
//   }, [currentScroll]);
//   return (
//     <section ref={slider} className="bi_home-slider">
//       <div className="bi_home-slider-arrows">
//         <div className="arrows">
//           <button
//           aria-label="Precedent"
//             onClick={() => {
//              previousItem();
//             }}
//           >
//             <svg
//               width="40"
//               height="40"
//               viewBox="0 0 40 40"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <ellipse
//                 cx="20"
//                 cy="20"
//                 rx="20"
//                 ry="20"
//                 transform="rotate(-180 20 20)"
//                 fill="#0F0F0F"
//               />
//               <path
//                 d="M22.892 27.2637L24.668 25.5484L18.8992 19.9648L24.668 14.3812L22.892 12.666L15.3346 19.9648L22.892 27.2637Z"
//                 fill="white"
//               />
//             </svg>
//           </button>
//           <button
//           aria-label="suivant"
//             onClick={() => {
//               nextItem();
//             }}
//           >
//             <svg
//               width="40"
//               height="40"
//               viewBox="0 0 40 40"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <ellipse cx="20" cy="20" rx="20" ry="20" fill="#0F0F0F" />
//               <path
//                 d="M17.108 12.7354L15.332 14.4506L21.1008 20.0342L15.332 25.6178L17.108 27.3331L24.6654 20.0342L17.108 12.7354Z"
//                 fill="white"
//               />
//             </svg>
//           </button>
//         </div>
//       </div>
//       <ul className={`bi_home-slider-content ${second ? "second" : ""}`}>
//         {second &&
//           actuData.slice(0, 6).map((actu) => {
//             return (
//               <li className="actu-card">
//                 <a href={`${baseUrl + actu.slug.current}`}>
//                   <Picture
//                     url={actu.coverImage.asset._ref}
//                     lazy={false}
//                     // poster={actu.coverImage.asset._ref}
//                     alt={"Couverture de " + actu.title}
//                     widthDesktop={"440"}
//                     heightDesktop={"440"}
//                     widthMobile={"288"}
//                     heightMobile={"288"}
//                     data-responsive="true"
//                     data-content-picture="true"
//                   />
//                   <div>
//                     <Tag className={"bi-lil-tag active"}>{actu.tag}</Tag>
//                     <Title type="h5">{actu.title}</Title>
//                   </div>
//                 </a>
//               </li>
//             );
//           })}
//         {first &&
//           solutions &&
//           solutions.map((el) => {
//             const pathBuilder = () => {
//               return "/solutions/" + el._type + "/" + el.slug.current;
//             };
//             return (
//               <li className="card bi-solutions-card">
//                 <a href={pathBuilder()}>
//                   <Picture
//                     url={el.coverImage.asset._ref}
//                     alt={"Couverture de " + el.title}
//                     lazy={false}
//                     widthDesktop={"440"}
//                     heightDesktop={"300"}
//                     widthMobile={"288"}
//                     heightMobile={"160"}
//                     data-responsive="true"
//                     data-content-picture="true"
//                   />
//                   <p>{el.title}</p>
//                   <p>Voir l'offre</p>
//                 </a>
//               </li>
//             );
//           })}
//       </ul>
//       <div className="bi_home-slider-mobile-guides">
//         {second &&
//           actuData.slice(0, 6).map((actu) => {
//             return <span></span>;
//           })}
//         {first &&
//           solutions &&
//           solutions.slice(0, solutions.length).map((el) => {
//             return <span></span>;
//           })}
//       </div>
//       {second ? (
//         <Button isDark={true} link="/scc-france/nos-actualites/">
//           Lire nos actualités
//         </Button>
//       ) : (
//         ""
//       )}
//     </section>
//   );
// };
