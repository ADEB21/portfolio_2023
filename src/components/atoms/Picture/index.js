/**
 *
 * @author Arthur Debruille
 * @brief Web image component, responsive image, lazy loading
 *
 */

// IsVisible function wich detect if an element
const isVisible = (element) => {
  if (element) {
    const object = element.getBoundingClientRect();
    return object.top < window.innerHeight && object.bottom > 0;
  }
};

const getRectangle = (element) => {
  const object = element.getBoundingClientRect();
  object.relativeRight = window.innerWidth - object.right;
  object.relativeBottom = window.innerHeight - object.bottom;

  return object;
};

class Picture extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    // Props
    const images = JSON.parse(this.getAttribute("images"));
    const alt = this.getAttribute("alt");
    const posterMobile = this.getAttribute("poster-mobile");
    const posterDesktop = this.getAttribute("poster-desktop");
    const widthDesktop = this.getAttribute("width-desktop");
    const heightDesktop = this.getAttribute("height-desktop");
    const isLazy = this.getAttribute("is-lazy");
    const isParallax = this.getAttribute("is-parallax");
    const parallaxDirection = this.getAttribute("parallax-direction");
    const isMobile = window.innerWidth < 769;

    console.log(isLazy, isParallax);


    // SetIntersect function
    const setIntersect = () => {
      // Check whether the picture is visible using the isVisible function
      if (isVisible(picture)) {
        let sources = picture.querySelectorAll("source");
        let img = picture.querySelector("img");
        // When the image in the first <img> tag is loaded
        // we animate the <div class="picture-blur"> containing the lazy image
        // with an opacity of 1 to 0.
        img.onload = () => {
          picture.querySelector(".picture-blur").animate(
            [
              // keyframes
              { opacity: 1 },
              { opacity: 0 },
            ],
            {
              // timing options
              duration: 500,
              fill: "forwards",
            }
          );
        };
        // Change source url
        sources.forEach((element) => {
          element.srcset = element.dataset.srcSet;
        });

        // Change img url
        img.src = img.dataset.src;
        document.removeEventListener("scroll", setIntersect);
      }
    };

    const parallax = () => {
      let img = picture.querySelector("img");
      const pictureRect = getRectangle(img);
      if (isVisible(img)) {
        let progress =
          (window.innerHeight - pictureRect.top) /
          (window.innerHeight + pictureRect.height);
        progress = Math.max(0, Math.min(1, progress));

        switch (parallaxDirection) {
          case "top":
            img.style = `--smooth-progress: ${progress};`;
            img.style.transform = `translateY(calc(var(--smooth-progress) * ${isMobile ? "50px" : "100px"})) scale(1.5)`;
            break;
          case "bottom":
            img.style = `--smooth-progress: ${progress};`;
            img.style.transform = `translateY(calc(var(--smooth-progress) * ${isMobile ? "-50px" : "-100px"})) scale(1.5)`;
            break;
          default:
            img.style = `--smooth-progress: ${progress};`;
            img.style.transform = `translateY(calc(var(--smooth-progress) * ${isMobile ? "50px" : "100px"})) scale(1.5)`;
            break;
        }
      }
    };

    const customIntersect = () => {
      document.addEventListener("scroll", setIntersect);
    };


    // HTML
    if (isLazy === "true") {
      this.shadowRoot.innerHTML = `
      <style>
        picture{
         display: block;
         position: relative;
         height: 100%;
         overflow: hidden;
        }
        picture img{
         object-fit: cover;
         display: block;
         width: 100%;
         height: 100%;
        }
        picture .picture-blur {
         position: absolute;
         inset: 0;
         width: 100%;
         height: 100%;
         transform: scale(1.05);
         filter: blur(5px)
        }
      </style>
      <picture part="picture">
        <source
          type="image/webp"
          media="(max-width: 767px)"
          data-src-set="${images.mobile.webp[0]} 1x, ${images.mobile.webp[1]} 2x"
        />
        <source
          type="image/jpeg"
          media="(max-width: 767px)"
          data-src-set="${images.mobile.jpeg[0]} 1x, ${images.mobile.jpeg[1]} 2x"
        />
        <source
          type="image/webp"
          media="(min-width: 768px)"
          data-src-set="${images.desktop.webp[0]} 1x, ${images.desktop.webp[1]} 2x"
        />
        <source
          type="image/jpeg"
          media="(min-width: 768px)"
          data-src-set="${images.desktop.jpeg[0]} 1x, ${images.desktop.jpeg[1]} 2x"
        />
        <img
           part="img"
           alt="${alt}"
           src="${null}"
           data-src="${images.desktop.jpeg[0]}"
           width="${widthDesktop}"
           height="${heightDesktop}"
        />
        <div class="picture-blur">
         <img
           src="${isMobile ? posterMobile : posterDesktop}"
           alt="${alt}"
           width="${widthDesktop}"
           height="${heightDesktop}"
         />
       </div>
        <noscript>
          <source
            type="image/webp"
            media="(max-width: 767px)"
            srcset="${images.mobile.webp[0]} 1x, ${images.mobile.webp[1]} 2x"
          />
          <source
            type="image/jpeg"
            media="(max-width: 767px)"
            srcset="${images.mobile.jpeg[0]} 1x, ${images.mobile.jpeg[1]} 2x"
          />
          <source
            type="image/webp"
            media="(min-width: 768px)"
            srcset="${images.desktop.webp[0]} 1x, ${images.desktop.webp[1]} 2x"
          />
          <source
            type="image/jpeg"
            media="(min-width: 768px)"
            srcset="${images.desktop.jpeg[0]} 1x, ${images.desktop.jpeg[1]} 2x"
          />
          <img
            part="img"
            src="${images.desktop.jpeg[0]}"
            alt="${alt}"
            width="${widthDesktop}"
            height="${heightDesktop}"
          />
        </noscript>
      </picture>
   `;
    } else {
      this.shadowRoot.innerHTML = `
      <style>
        picture{
         display: block;
         position: relative;
         height: 100%;
         overflow: hidden;
        }
        picture img{
         object-fit: cover;
         display: block;
         width: 100%;
         height: 100%;
        }
        picture .picture-blur {
         position: absolute;
         inset: 0;
         width: 100%;
         height: 100%;
         transform: scale(1.05);
        }
      </style>
      <picture part="picture">
        <source
          type="image/webp"
          media="(max-width: 767px)"
          srcset="${images.mobile.webp[0]} 1x, ${images.mobile.webp[1]} 2x"
        />
        <source
          type="image/jpeg"
          media="(max-width: 767px)"
          srcset="${images.mobile.jpeg[0]} 1x, ${images.mobile.jpeg[1]} 2x"
        />
        <source
          type="image/webp"
          media="(min-width: 768px)"
          srcset="${images.desktop.webp[0]} 1x, ${images.desktop.webp[1]} 2x"
        />
        <source
          type="image/jpeg"
          media="(min-width: 768px)"
          srcset="${images.desktop.jpeg[0]} 1x, ${images.desktop.jpeg[1]} 2x"
        />
        <img
           part="img"
           alt="${alt}"
           src="${images.desktop.jpeg[0]}"
           width="${widthDesktop}"
           height="${heightDesktop}"
        />
        <noscript>
          <source
            type="image/webp"
            media="(max-width: 767px)"
            srcset="${images.mobile.webp[0]} 1x, ${images.mobile.webp[1]} 2x"
          />
          <source
            type="image/jpeg"
            media="(max-width: 767px)"
            srcset="${images.mobile.jpeg[0]} 1x, ${images.mobile.jpeg[1]} 2x"
          />
          <source
            type="image/webp"
            media="(min-width: 768px)"
            srcset="${images.desktop.webp[0]} 1x, ${images.desktop.webp[1]} 2x"
          />
          <source
            type="image/jpeg"
            media="(min-width: 768px)"
            srcset="${images.desktop.jpeg[0]} 1x, ${images.desktop.jpeg[1]} 2x"
          />
          <img
            part="img"
            src="${images.desktop.jpeg[0]}"
            alt="${alt}"
            width="${widthDesktop}"
            height="${heightDesktop}"
          />
        </noscript>
      </picture>
   `;
    }

    const picture = this.shadowRoot.querySelector("picture");

    if (isLazy && isLazy === "true") {
      customIntersect();
    }

    if (isParallax && isParallax === "true") {
      let img = picture.querySelector("img");
      img.style.transform = "scale(1.5)"
      document.addEventListener("scroll", parallax);
    }
  }
}

customElements.define("custom-picture", Picture);



/* How to use it


import "path/picture.js" or <script src="path/picture.js"></script>

const images = {
  mobile: {
    jpeg: [path/mobile-base.jpg, path/mobile-retina.jpg],
    webp: [path/mobile-base.webp, path/mobile-retina.webp],
  },
  desktop: {
    jpeg: [path/desktop-base.jpg, path/desktop-retina.jpg],
    webp: [path/desktop-base.webp, path/desktop-retina.webp],
  },
};


<custom-picture
  images={JSON.stringify(images)}
  poster-desktop={"path/poster-desktop"}
  poster-mobile={"path/poster-desktop"}
  alt="This is the default alternative text"
  width-desktop="value"
  height-desktop="value"
  width-mobile="value"
  height-mobile="value"
  is-lazy={true} or false
  is-parallax={true} or false
  parallax-direction="top" or bottom
></custom-picture>
*/
