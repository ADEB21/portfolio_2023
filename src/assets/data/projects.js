import ExperienceOutCoverRetina from "../images/projects/experience/outCover/experience-outCover-retina.jpg";
import ExperienceOutCoverBase from "../images/projects/experience/outCover/experience-outCover-base.jpg";
import ExperienceOutCoverRetinaWebp from "../images/projects/experience/outCover/experience-outCover-retina.webp";
import ExperienceOutCoverBaseWebp from "../images/projects/experience/outCover/experience-outCover-base.webp";
import ExperienceOutCoverLazy from "../images/projects/experience/outCover/experience-outCover-lazy.jpg";

import SccOutCoverRetina from "../images/projects/scc/outCover/scc-outCover-retina.jpg";
import SccOutCoverBase from "../images/projects/scc/outCover/scc-outCover-base.jpg";
import SccOutCoverRetinaWebp from "../images/projects/scc/outCover/scc-outCover-retina.webp";
import SccOutCoverBaseWebp from "../images/projects/scc/outCover/scc-outCover-base.webp";
import SccOutCoverLazy from "../images/projects/scc/outCover/scc-outCover-lazy.jpg";

import LBQOutCoverRetina from "../images/projects/lbq/outCover/lbq-outCover-retina.jpg";
import LBQOutCoverBase from "../images/projects/lbq/outCover/lbq-outCover-base.jpg";
import LBQOutCoverRetinaWebp from "../images/projects/lbq/outCover/lbq-outCover-retina.webp";
import LBQOutCoverBaseWebp from "../images/projects/lbq/outCover/lbq-outCover-base.webp";
import LBQOutCoverLazy from "../images/projects/lbq/outCover/lbq-outCover-lazy.jpg";

import CambiumOutCoverRetina from "../images/projects/cambium/outCover/cambium-outCover-retina.jpg";
import CambiumOutCoverBase from "../images/projects/cambium/outCover/cambium-outCover-base.jpg";
import CambiumOutCoverRetinaWebp from "../images/projects/cambium/outCover/cambium-outCover-retina.webp";
import CambiumOutCoverBaseWebp from "../images/projects/cambium/outCover/cambium-outCover-base.webp";
import CambiumOutCoverLazy from "../images/projects/cambium/outCover/cambium-outCover-lazy.jpg";

import HeliopolisOutCoverRetina from "../images/projects/heliopolis/outCover/heliopolis-outCover-retina.jpg";
import HeliopolisOutCoverBase from "../images/projects/heliopolis/outCover/heliopolis-outCover-base.jpg";
import HeliopolisOutCoverRetinaWebp from "../images/projects/heliopolis/outCover/heliopolis-outCover-retina.webp";
import HeliopolisOutCoverBaseWebp from "../images/projects/heliopolis/outCover/heliopolis-outCover-base.webp";
import HeliopolisOutCoverLazy from "../images/projects/heliopolis/outCover/heliopolis-outCover-lazy.jpg";

import InceptoOutCoverRetina from "../images/projects/incepto/outCover/incepto-outCover-retina.jpg";
import InceptoOutCoverBase from "../images/projects/incepto/outCover/incepto-outCover-base.jpg";
import InceptoOutCoverRetinaWebp from "../images/projects/incepto/outCover/incepto-outCover-retina.webp";
import InceptoOutCoverBaseWebp from "../images/projects/incepto/outCover/incepto-outCover-base.webp";
import InceptoOutCoverLazy from "../images/projects/incepto/outCover/incepto-outCover-lazy.jpg";

import TertiaviaOutCoverRetina from "../images/projects/tertiavia/outCover/tertiavia-outCover-retina.jpg";
import TertiaviaOutCoverBase from "../images/projects/tertiavia/outCover/tertiavia-outCover-base.jpg";
import TertiaviaOutCoverRetinaWebp from "../images/projects/tertiavia/outCover/tertiavia-outCover-retina.webp";
import TertiaviaOutCoverBaseWebp from "../images/projects/tertiavia/outCover/tertiavia-outCover-base.webp";
import TertiaviaOutCoverLazy from "../images/projects/tertiavia/outCover/tertiavia-outCover-lazy.jpg";

import WebcomponentOutCoverRetina from "../images/projects/webc/outCover/webc-outCover-retina.jpg";
import WebcomponentOutCoverBase from "../images/projects/webc/outCover/webc-outCover-base.jpg";
import WebcomponentOutCoverRetinaWebp from "../images/projects/webc/outCover/webc-outCover-retina.webp";
import WebcomponentOutCoverBaseWebp from "../images/projects/webc/outCover/webc-outCover-base.webp";
import WebcomponentOutCoverLazy from "../images/projects/webc/outCover/webc-outCover-lazy.jpg";

import GongjuOutCoverRetina from "../images/projects/gongju/outCover/gongju-outCover-retina.jpg";
import GongjuOutCoverBase from "../images/projects/gongju/outCover/gongju-outCover-base.jpg";
import GongjuOutCoverRetinaWebp from "../images/projects/gongju/outCover/gongju-outCover-retina.webp";
import GongjuOutCoverBaseWebp from "../images/projects/gongju/outCover/gongju-outCover-base.webp";
import GongjuOutCoverLazy from "../images/projects/gongju/outCover/gongju-outCover-lazy.jpg";


export default {
  projects: [

    {
      title: "SCC",
      slug: "scc",
      date: "2023",
      outCover: {
        picture: {
          images: {
            mobile: {
              jpeg: [SccOutCoverBase, SccOutCoverRetina],
              webp: [SccOutCoverBaseWebp, SccOutCoverRetinaWebp],
            },
            desktop: {
              jpeg: [SccOutCoverBase, SccOutCoverRetina],
              webp: [SccOutCoverBaseWebp, SccOutCoverRetinaWebp],
            },
          },
          lazy: {
            desktop: SccOutCoverLazy,
            mobile: SccOutCoverLazy,
          },
          alternativeText: "Image de couverture du projet",
        },
      },
      inCover: {
        picture: {
          images: {
            desktop: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
            mobile: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
          },
          lazy: {
            desktop: "",
            mobile: "",
          },
          alternativeText: "Image de couverture du projet",
        },
      },
      projectDescription: {
        title: "Une histoire qui dure depuis 1973",
        goal: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus metus, mi cursus amet. Sit felis tellus praesent amet, suspendisse nisi at pretium. Tempus lectus facilisis nec viverra est, volutpat pulvinar non velit. Sem sit magna in augue libero ultrices. Elementum eros amet, vivamus id eget diam risus in mattis.",
      },
      marqueeImages: [
        {
          images: {
            desktop: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
            mobile: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
          },
          lazy: {
            desktop: "",
            mobile: "",
          },
          alternativeText: "Image de couverture du projet",
        },
        {
          images: {
            desktop: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
            mobile: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
          },
          lazy: {
            desktop: "",
            mobile: "",
          },
          alternativeText: "Image de couverture du projet",
        },
        {
          images: {
            desktop: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
            mobile: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
          },
          lazy: {
            desktop: "",
            mobile: "",
          },
          alternativeText: "Image de couverture du projet",
        },
        {
          images: {
            desktop: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
            mobile: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
          },
          lazy: {
            desktop: "",
            mobile: "",
          },
          alternativeText: "Image de couverture du projet",
        },
        {
          images: {
            desktop: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
            mobile: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
          },
          lazy: {
            desktop: "",
            mobile: "",
          },
          alternativeText: "Image de couverture du projet",
        },
        {
          images: {
            desktop: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
            mobile: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
          },
          lazy: {
            desktop: "",
            mobile: "",
          },
          alternativeText: "Image de couverture du projet",
        },
        {
          images: {
            desktop: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
            mobile: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
          },
          lazy: {
            desktop: "",
            mobile: "",
          },
          alternativeText: "Image de couverture du projet",
        },
        {
          images: {
            desktop: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
            mobile: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
          },
          lazy: {
            desktop: "",
            mobile: "",
          },
          alternativeText: "Image de couverture du projet",
        },
        {
          images: {
            desktop: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
            mobile: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
          },
          lazy: {
            desktop: "",
            mobile: "",
          },
          alternativeText: "Image de couverture du projet",
        },
      ],
      process:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis euismod ipsum orci urna luctus arcu. Sodales lectus imperdiet sagittis eros, ornare quis. Sagittis egestas convallis pellentesque eget lectus id amet. Sodales a sit aliquet dis. Tincidunt ut nunc leo cursus tempor. Pharetra bibendum magna viverra id. Lobortis non sed quis purus venenatis quis augue id.",
      colorStory: {
        paragraph:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis euismod ipsum orci urna luctus arcu. Sodales lectus imperdiet sagittis eros, ornare quis. Sagittis egestas convallis pellentesque eget lectus id amet.",
        colors: [
          "#79C5D7",
          "#FADD4B",
          "#F98E45",
          "#FFF5E5",
          "#1D1D1D",
          "#E85243",
        ],
      },
      lastImage: {
        picture: {
          images: {
            desktop: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
            mobile: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
          },
          lazy: {
            desktop: "",
            mobile: "",
          },
          alternativeText: "Image de couverture du projet",
        },
      },
    },
    {
      title: "LBQ",
      slug: "les-belles-quilles",
      date: "2023",
      outCover: {
        picture: {
          images: {
            mobile: {
              jpeg: [LBQOutCoverBase, LBQOutCoverRetina],
              webp: [LBQOutCoverBaseWebp, LBQOutCoverRetinaWebp],
            },
            desktop: {
              jpeg: [LBQOutCoverBase, LBQOutCoverRetina],
              webp: [LBQOutCoverBaseWebp, LBQOutCoverRetinaWebp],
            },
          },
          lazy: {
            desktop: LBQOutCoverLazy,
            mobile: LBQOutCoverLazy,
          },
          alternativeText: "Image de couverture du projet",
        },
      },
      inCover: {
        picture: {
          images: {
            desktop: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
            mobile: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
          },
          lazy: {
            desktop: "",
            mobile: "",
          },
          alternativeText: "Image de couverture du projet",
        },
      },
      projectDescription: {
        title: "Une histoire qui dure depuis 1973",
        goal: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus metus, mi cursus amet. Sit felis tellus praesent amet, suspendisse nisi at pretium. Tempus lectus facilisis nec viverra est, volutpat pulvinar non velit. Sem sit magna in augue libero ultrices. Elementum eros amet, vivamus id eget diam risus in mattis.",
      },
      marqueeImages: [
        {
          images: {
            desktop: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
            mobile: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
          },
          lazy: {
            desktop: "",
            mobile: "",
          },
          alternativeText: "Image de couverture du projet",
        },
        {
          images: {
            desktop: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
            mobile: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
          },
          lazy: {
            desktop: "",
            mobile: "",
          },
          alternativeText: "Image de couverture du projet",
        },
        {
          images: {
            desktop: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
            mobile: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
          },
          lazy: {
            desktop: "",
            mobile: "",
          },
          alternativeText: "Image de couverture du projet",
        },
        {
          images: {
            desktop: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
            mobile: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
          },
          lazy: {
            desktop: "",
            mobile: "",
          },
          alternativeText: "Image de couverture du projet",
        },
        {
          images: {
            desktop: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
            mobile: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
          },
          lazy: {
            desktop: "",
            mobile: "",
          },
          alternativeText: "Image de couverture du projet",
        },
        {
          images: {
            desktop: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
            mobile: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
          },
          lazy: {
            desktop: "",
            mobile: "",
          },
          alternativeText: "Image de couverture du projet",
        },
        {
          images: {
            desktop: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
            mobile: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
          },
          lazy: {
            desktop: "",
            mobile: "",
          },
          alternativeText: "Image de couverture du projet",
        },
        {
          images: {
            desktop: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
            mobile: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
          },
          lazy: {
            desktop: "",
            mobile: "",
          },
          alternativeText: "Image de couverture du projet",
        },
        {
          images: {
            desktop: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
            mobile: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
          },
          lazy: {
            desktop: "",
            mobile: "",
          },
          alternativeText: "Image de couverture du projet",
        },
      ],
      process:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis euismod ipsum orci urna luctus arcu. Sodales lectus imperdiet sagittis eros, ornare quis. Sagittis egestas convallis pellentesque eget lectus id amet. Sodales a sit aliquet dis. Tincidunt ut nunc leo cursus tempor. Pharetra bibendum magna viverra id. Lobortis non sed quis purus venenatis quis augue id.",
      colorStory: {
        paragraph:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis euismod ipsum orci urna luctus arcu. Sodales lectus imperdiet sagittis eros, ornare quis. Sagittis egestas convallis pellentesque eget lectus id amet.",
        colors: [
          "#79C5D7",
          "#FADD4B",
          "#F98E45",
          "#FFF5E5",
          "#1D1D1D",
          "#E85243",
        ],
      },
      lastImage: {
        picture: {
          images: {
            desktop: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
            mobile: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
          },
          lazy: {
            desktop: "",
            mobile: "",
          },
          alternativeText: "Image de couverture du projet",
        },
      },
    },
    {
      title: "Experience",
      slug: "experience",
      date: "2022",
      outCover: {
        picture: {
          images: {
            mobile: {
              jpeg: [ExperienceOutCoverBase, ExperienceOutCoverRetina],
              webp: [ExperienceOutCoverBaseWebp, ExperienceOutCoverRetinaWebp],
            },
            desktop: {
              jpeg: [ExperienceOutCoverBase, ExperienceOutCoverRetina],
              webp: [ExperienceOutCoverBaseWebp, ExperienceOutCoverRetinaWebp],
            },
          },
          lazy: {
            desktop: ExperienceOutCoverLazy,
            mobile: ExperienceOutCoverLazy,
          },
          alternativeText: "Image de couverture du projet",
        },
      },
      inCover: {
        picture: {
          images: {
            desktop: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
            mobile: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
          },
          lazy: {
            desktop: "",
            mobile: "",
          },
          alternativeText: "Image de couverture du projet",
        },
      },
      projectDescription: {
        title: "Une histoire qui dure depuis 1973",
        goal: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus metus, mi cursus amet. Sit felis tellus praesent amet, suspendisse nisi at pretium. Tempus lectus facilisis nec viverra est, volutpat pulvinar non velit. Sem sit magna in augue libero ultrices. Elementum eros amet, vivamus id eget diam risus in mattis.",
      },
      marqueeImages: [
        {
          images: {
            desktop: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
            mobile: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
          },
          lazy: {
            desktop: "",
            mobile: "",
          },
          alternativeText: "Image de couverture du projet",
        },
        {
          images: {
            desktop: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
            mobile: {
              jpeg: ["", ""],
              webp: ["", ""],
            },

          },
          lazy: {
            desktop: "",
            mobile: "",
          },
          alternativeText: "Image de couverture du projet",
        },
        {
          images: {
            desktop: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
            mobile: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
          },
          lazy: {
            desktop: "",
            mobile: "",
          },
          alternativeText: "Image de couverture du projet",
        },
        {
          images: {
            desktop: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
            mobile: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
          },
          lazy: {
            desktop: "",
            mobile: "",
          },
          alternativeText: "Image de couverture du projet",
        },
        {
          images: {
            desktop: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
            mobile: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
          },
          lazy: {
            desktop: "",
            mobile: "",
          },
          alternativeText: "Image de couverture du projet",
        },
        {
          images: {
            desktop: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
            mobile: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
          },
          lazy: {
            desktop: "",
            mobile: "",
          },
          alternativeText: "Image de couverture du projet",
        },
        {
          images: {
            desktop: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
            mobile: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
          },
          lazy: {
            desktop: "",
            mobile: "",
          },
          alternativeText: "Image de couverture du projet",
        },
        {
          images: {
            desktop: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
            mobile: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
          },
          lazy: {
            desktop: "",
            mobile: "",
          },
          alternativeText: "Image de couverture du projet",
        },
        {
          images: {
            desktop: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
            mobile: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
          },
          lazy: {
            desktop: "",
            mobile: "",
          },
          alternativeText: "Image de couverture du projet",
        },
      ],
      process:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis euismod ipsum orci urna luctus arcu. Sodales lectus imperdiet sagittis eros, ornare quis. Sagittis egestas convallis pellentesque eget lectus id amet. Sodales a sit aliquet dis. Tincidunt ut nunc leo cursus tempor. Pharetra bibendum magna viverra id. Lobortis non sed quis purus venenatis quis augue id.",
      colorStory: {
        paragraph:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis euismod ipsum orci urna luctus arcu. Sodales lectus imperdiet sagittis eros, ornare quis. Sagittis egestas convallis pellentesque eget lectus id amet.",
        colors: [
          "#79C5D7",
          "#FADD4B",
          "#F98E45",
          "#FFF5E5",
          "#1D1D1D",
          "#E85243",
        ],
      },
      lastImage: {
        picture: {
          images: {
            desktop: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
            mobile: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
          },
          lazy: {
            desktop: "",
            mobile: "",
          },
          alternativeText: "Image de couverture du projet",
        },
      },
    },
    {
      title: "Cambium",
      slug: "cambium",
      date: "2022",
      outCover: {
        picture: {
          images: {
            mobile: {
              jpeg: [CambiumOutCoverBase, CambiumOutCoverRetina],
              webp: [CambiumOutCoverBaseWebp, CambiumOutCoverRetinaWebp],
            },
            desktop: {
              jpeg: [CambiumOutCoverBase, CambiumOutCoverRetina],
              webp: [CambiumOutCoverBaseWebp, CambiumOutCoverRetinaWebp],
            },
          },
          lazy: {
            desktop: CambiumOutCoverLazy,
            mobile: CambiumOutCoverLazy,
          },
          alternativeText: "Image de couverture du projet",
        },
      },
      inCover: {
        picture: {
          images: {
            desktop: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
            mobile: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
          },
          lazy: {
            desktop: "",
            mobile: "",
          },
          alternativeText: "Image de couverture du projet",
        },
      },
      projectDescription: {
        title: "Une histoire qui dure depuis 1973",
        goal: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus metus, mi cursus amet. Sit felis tellus praesent amet, suspendisse nisi at pretium. Tempus lectus facilisis nec viverra est, volutpat pulvinar non velit. Sem sit magna in augue libero ultrices. Elementum eros amet, vivamus id eget diam risus in mattis.",
      },
      marqueeImages: [
        {
          images: {
            desktop: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
            mobile: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
          },
          lazy: {
            desktop: "",
            mobile: "",
          },
          alternativeText: "Image de couverture du projet",
        },
        {
          images: {
            desktop: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
            mobile: {
              jpeg: ["", ""],
              webp: ["", ""],
            },

          },
          lazy: {
            desktop: "",
            mobile: "",
          },
          alternativeText: "Image de couverture du projet",
        },
        {
          images: {
            desktop: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
            mobile: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
          },
          lazy: {
            desktop: "",
            mobile: "",
          },
          alternativeText: "Image de couverture du projet",
        },
        {
          images: {
            desktop: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
            mobile: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
          },
          lazy: {
            desktop: "",
            mobile: "",
          },
          alternativeText: "Image de couverture du projet",
        },
        {
          images: {
            desktop: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
            mobile: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
          },
          lazy: {
            desktop: "",
            mobile: "",
          },
          alternativeText: "Image de couverture du projet",
        },
        {
          images: {
            desktop: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
            mobile: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
          },
          lazy: {
            desktop: "",
            mobile: "",
          },
          alternativeText: "Image de couverture du projet",
        },
        {
          images: {
            desktop: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
            mobile: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
          },
          lazy: {
            desktop: "",
            mobile: "",
          },
          alternativeText: "Image de couverture du projet",
        },
        {
          images: {
            desktop: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
            mobile: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
          },
          lazy: {
            desktop: "",
            mobile: "",
          },
          alternativeText: "Image de couverture du projet",
        },
        {
          images: {
            desktop: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
            mobile: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
          },
          lazy: {
            desktop: "",
            mobile: "",
          },
          alternativeText: "Image de couverture du projet",
        },
      ],
      process:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis euismod ipsum orci urna luctus arcu. Sodales lectus imperdiet sagittis eros, ornare quis. Sagittis egestas convallis pellentesque eget lectus id amet. Sodales a sit aliquet dis. Tincidunt ut nunc leo cursus tempor. Pharetra bibendum magna viverra id. Lobortis non sed quis purus venenatis quis augue id.",
      colorStory: {
        paragraph:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis euismod ipsum orci urna luctus arcu. Sodales lectus imperdiet sagittis eros, ornare quis. Sagittis egestas convallis pellentesque eget lectus id amet.",
        colors: [
          "#79C5D7",
          "#FADD4B",
          "#F98E45",
          "#FFF5E5",
          "#1D1D1D",
          "#E85243",
        ],
      },
      lastImage: {
        picture: {
          images: {
            desktop: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
            mobile: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
          },
          lazy: {
            desktop: "",
            mobile: "",
          },
          alternativeText: "Image de couverture du projet",
        },
      },
    },
    {
      title: "Incepto",
      slug: "incepto-avocats",
      date: "2023",
      outCover: {
        picture: {
          images: {
            mobile: {
              jpeg: [InceptoOutCoverBase, InceptoOutCoverRetina],
              webp: [InceptoOutCoverBaseWebp, InceptoOutCoverRetinaWebp],
            },
            desktop: {
              jpeg: [InceptoOutCoverBase, InceptoOutCoverRetina],
              webp: [InceptoOutCoverBaseWebp, InceptoOutCoverRetinaWebp],
            },
          },
          lazy: {
            desktop: InceptoOutCoverLazy,
            mobile: InceptoOutCoverLazy,
          },
          alternativeText: "Image de couverture du projet",
        },
      },
      inCover: {
        picture: {
          images: {
            desktop: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
            mobile: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
          },
          lazy: {
            desktop: "",
            mobile: "",
          },
          alternativeText: "Image de couverture du projet",
        },
      },
      projectDescription: {
        title: "Une histoire qui dure depuis 1973",
        goal: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus metus, mi cursus amet. Sit felis tellus praesent amet, suspendisse nisi at pretium. Tempus lectus facilisis nec viverra est, volutpat pulvinar non velit. Sem sit magna in augue libero ultrices. Elementum eros amet, vivamus id eget diam risus in mattis.",
      },
      marqueeImages: [
        {
          images: {
            desktop: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
            mobile: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
          },
          lazy: {
            desktop: "",
            mobile: "",
          },
          alternativeText: "Image de couverture du projet",
        },
        {
          images: {
            desktop: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
            mobile: {
              jpeg: ["", ""],
              webp: ["", ""],
            },

          },
          lazy: {
            desktop: "",
            mobile: "",
          },
          alternativeText: "Image de couverture du projet",
        },
        {
          images: {
            desktop: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
            mobile: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
          },
          lazy: {
            desktop: "",
            mobile: "",
          },
          alternativeText: "Image de couverture du projet",
        },
        {
          images: {
            desktop: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
            mobile: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
          },
          lazy: {
            desktop: "",
            mobile: "",
          },
          alternativeText: "Image de couverture du projet",
        },
        {
          images: {
            desktop: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
            mobile: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
          },
          lazy: {
            desktop: "",
            mobile: "",
          },
          alternativeText: "Image de couverture du projet",
        },
        {
          images: {
            desktop: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
            mobile: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
          },
          lazy: {
            desktop: "",
            mobile: "",
          },
          alternativeText: "Image de couverture du projet",
        },
        {
          images: {
            desktop: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
            mobile: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
          },
          lazy: {
            desktop: "",
            mobile: "",
          },
          alternativeText: "Image de couverture du projet",
        },
        {
          images: {
            desktop: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
            mobile: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
          },
          lazy: {
            desktop: "",
            mobile: "",
          },
          alternativeText: "Image de couverture du projet",
        },
        {
          images: {
            desktop: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
            mobile: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
          },
          lazy: {
            desktop: "",
            mobile: "",
          },
          alternativeText: "Image de couverture du projet",
        },
      ],
      process:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis euismod ipsum orci urna luctus arcu. Sodales lectus imperdiet sagittis eros, ornare quis. Sagittis egestas convallis pellentesque eget lectus id amet. Sodales a sit aliquet dis. Tincidunt ut nunc leo cursus tempor. Pharetra bibendum magna viverra id. Lobortis non sed quis purus venenatis quis augue id.",
      colorStory: {
        paragraph:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis euismod ipsum orci urna luctus arcu. Sodales lectus imperdiet sagittis eros, ornare quis. Sagittis egestas convallis pellentesque eget lectus id amet.",
        colors: [
          "#79C5D7",
          "#FADD4B",
          "#F98E45",
          "#FFF5E5",
          "#1D1D1D",
          "#E85243",
        ],
      },
      lastImage: {
        picture: {
          images: {
            desktop: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
            mobile: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
          },
          lazy: {
            desktop: "",
            mobile: "",
          },
          alternativeText: "Image de couverture du projet",
        },
      },
    },
    {
      title: "TertiaVia",
      slug: "tertiavia",
      date: "2023",
      outCover: {
        picture: {
          images: {
            mobile: {
              jpeg: [TertiaviaOutCoverBase, TertiaviaOutCoverRetina],
              webp: [TertiaviaOutCoverBaseWebp, TertiaviaOutCoverRetinaWebp],
            },
            desktop: {
              jpeg: [TertiaviaOutCoverBase, TertiaviaOutCoverRetina],
              webp: [TertiaviaOutCoverBaseWebp, TertiaviaOutCoverRetinaWebp],
            },
          },
          lazy: {
            desktop: TertiaviaOutCoverLazy,
            mobile: TertiaviaOutCoverLazy,
          },
          alternativeText: "Image de couverture du projet",
        },
      },
      inCover: {
        picture: {
          images: {
            desktop: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
            mobile: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
          },
          lazy: {
            desktop: "",
            mobile: "",
          },
          alternativeText: "Image de couverture du projet",
        },
      },
      projectDescription: {
        title: "Une histoire qui dure depuis 1973",
        goal: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus metus, mi cursus amet. Sit felis tellus praesent amet, suspendisse nisi at pretium. Tempus lectus facilisis nec viverra est, volutpat pulvinar non velit. Sem sit magna in augue libero ultrices. Elementum eros amet, vivamus id eget diam risus in mattis.",
      },
      marqueeImages: [
        {
          images: {
            desktop: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
            mobile: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
          },
          lazy: {
            desktop: "",
            mobile: "",
          },
          alternativeText: "Image de couverture du projet",
        },
        {
          images: {
            desktop: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
            mobile: {
              jpeg: ["", ""],
              webp: ["", ""],
            },

          },
          lazy: {
            desktop: "",
            mobile: "",
          },
          alternativeText: "Image de couverture du projet",
        },
        {
          images: {
            desktop: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
            mobile: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
          },
          lazy: {
            desktop: "",
            mobile: "",
          },
          alternativeText: "Image de couverture du projet",
        },
        {
          images: {
            desktop: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
            mobile: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
          },
          lazy: {
            desktop: "",
            mobile: "",
          },
          alternativeText: "Image de couverture du projet",
        },
        {
          images: {
            desktop: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
            mobile: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
          },
          lazy: {
            desktop: "",
            mobile: "",
          },
          alternativeText: "Image de couverture du projet",
        },
        {
          images: {
            desktop: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
            mobile: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
          },
          lazy: {
            desktop: "",
            mobile: "",
          },
          alternativeText: "Image de couverture du projet",
        },
        {
          images: {
            desktop: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
            mobile: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
          },
          lazy: {
            desktop: "",
            mobile: "",
          },
          alternativeText: "Image de couverture du projet",
        },
        {
          images: {
            desktop: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
            mobile: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
          },
          lazy: {
            desktop: "",
            mobile: "",
          },
          alternativeText: "Image de couverture du projet",
        },
        {
          images: {
            desktop: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
            mobile: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
          },
          lazy: {
            desktop: "",
            mobile: "",
          },
          alternativeText: "Image de couverture du projet",
        },
      ],
      process:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis euismod ipsum orci urna luctus arcu. Sodales lectus imperdiet sagittis eros, ornare quis. Sagittis egestas convallis pellentesque eget lectus id amet. Sodales a sit aliquet dis. Tincidunt ut nunc leo cursus tempor. Pharetra bibendum magna viverra id. Lobortis non sed quis purus venenatis quis augue id.",
      colorStory: {
        paragraph:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis euismod ipsum orci urna luctus arcu. Sodales lectus imperdiet sagittis eros, ornare quis. Sagittis egestas convallis pellentesque eget lectus id amet.",
        colors: [
          "#79C5D7",
          "#FADD4B",
          "#F98E45",
          "#FFF5E5",
          "#1D1D1D",
          "#E85243",
        ],
      },
      lastImage: {
        picture: {
          images: {
            desktop: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
            mobile: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
          },
          lazy: {
            desktop: "",
            mobile: "",
          },
          alternativeText: "Image de couverture du projet",
        },
      },
    },
    {
      title: "Heliopolis",
      slug: "heliopolis",
      date: "2023",
      outCover: {
        picture: {
          images: {
            mobile: {
              jpeg: [HeliopolisOutCoverBase, HeliopolisOutCoverRetina],
              webp: [HeliopolisOutCoverBaseWebp, HeliopolisOutCoverRetinaWebp],
            },
            desktop: {
              jpeg: [HeliopolisOutCoverBase, HeliopolisOutCoverRetina],
              webp: [HeliopolisOutCoverBaseWebp, HeliopolisOutCoverRetinaWebp],
            },
          },
          lazy: {
            desktop: HeliopolisOutCoverLazy,
            mobile: HeliopolisOutCoverLazy,
          },
          alternativeText: "Image de couverture du projet",
        },
      },
      inCover: {
        picture: {
          images: {
            desktop: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
            mobile: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
          },
          lazy: {
            desktop: "",
            mobile: "",
          },
          alternativeText: "Image de couverture du projet",
        },
      },
      projectDescription: {
        title: "Une histoire qui dure depuis 1973",
        goal: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus metus, mi cursus amet. Sit felis tellus praesent amet, suspendisse nisi at pretium. Tempus lectus facilisis nec viverra est, volutpat pulvinar non velit. Sem sit magna in augue libero ultrices. Elementum eros amet, vivamus id eget diam risus in mattis.",
      },
      marqueeImages: [
        {
          images: {
            desktop: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
            mobile: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
          },
          lazy: {
            desktop: "",
            mobile: "",
          },
          alternativeText: "Image de couverture du projet",
        },
        {
          images: {
            desktop: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
            mobile: {
              jpeg: ["", ""],
              webp: ["", ""],
            },

          },
          lazy: {
            desktop: "",
            mobile: "",
          },
          alternativeText: "Image de couverture du projet",
        },
        {
          images: {
            desktop: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
            mobile: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
          },
          lazy: {
            desktop: "",
            mobile: "",
          },
          alternativeText: "Image de couverture du projet",
        },
        {
          images: {
            desktop: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
            mobile: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
          },
          lazy: {
            desktop: "",
            mobile: "",
          },
          alternativeText: "Image de couverture du projet",
        },
        {
          images: {
            desktop: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
            mobile: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
          },
          lazy: {
            desktop: "",
            mobile: "",
          },
          alternativeText: "Image de couverture du projet",
        },
        {
          images: {
            desktop: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
            mobile: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
          },
          lazy: {
            desktop: "",
            mobile: "",
          },
          alternativeText: "Image de couverture du projet",
        },
        {
          images: {
            desktop: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
            mobile: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
          },
          lazy: {
            desktop: "",
            mobile: "",
          },
          alternativeText: "Image de couverture du projet",
        },
        {
          images: {
            desktop: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
            mobile: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
          },
          lazy: {
            desktop: "",
            mobile: "",
          },
          alternativeText: "Image de couverture du projet",
        },
        {
          images: {
            desktop: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
            mobile: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
          },
          lazy: {
            desktop: "",
            mobile: "",
          },
          alternativeText: "Image de couverture du projet",
        },
      ],
      process:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis euismod ipsum orci urna luctus arcu. Sodales lectus imperdiet sagittis eros, ornare quis. Sagittis egestas convallis pellentesque eget lectus id amet. Sodales a sit aliquet dis. Tincidunt ut nunc leo cursus tempor. Pharetra bibendum magna viverra id. Lobortis non sed quis purus venenatis quis augue id.",
      colorStory: {
        paragraph:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis euismod ipsum orci urna luctus arcu. Sodales lectus imperdiet sagittis eros, ornare quis. Sagittis egestas convallis pellentesque eget lectus id amet.",
        colors: [
          "#79C5D7",
          "#FADD4B",
          "#F98E45",
          "#FFF5E5",
          "#1D1D1D",
          "#E85243",
        ],
      },
      lastImage: {
        picture: {
          images: {
            desktop: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
            mobile: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
          },
          lazy: {
            desktop: "",
            mobile: "",
          },
          alternativeText: "Image de couverture du projet",
        },
      },
    },
    {
      title: "Gongju",
      slug: "gongju",
      date: "2023",
      outCover: {
        picture: {
          images: {
            mobile: {
              jpeg: [GongjuOutCoverBase, GongjuOutCoverRetina],
              webp: [GongjuOutCoverBaseWebp, GongjuOutCoverRetinaWebp],
            },
            desktop: {
              jpeg: [GongjuOutCoverBase, GongjuOutCoverRetina],
              webp: [GongjuOutCoverBaseWebp, GongjuOutCoverRetinaWebp],
            },
          },
          lazy: {
            desktop: GongjuOutCoverLazy,
            mobile: GongjuOutCoverLazy,
          },
          alternativeText: "Image de couverture du projet",
        },
      },
      inCover: {
        picture: {
          images: {
            desktop: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
            mobile: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
          },
          lazy: {
            desktop: "",
            mobile: "",
          },
          alternativeText: "Image de couverture du projet",
        },
      },
      projectDescription: {
        title: "Une histoire qui dure depuis 1973",
        goal: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus metus, mi cursus amet. Sit felis tellus praesent amet, suspendisse nisi at pretium. Tempus lectus facilisis nec viverra est, volutpat pulvinar non velit. Sem sit magna in augue libero ultrices. Elementum eros amet, vivamus id eget diam risus in mattis.",
      },
      marqueeImages: [
        {
          images: {
            desktop: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
            mobile: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
          },
          lazy: {
            desktop: "",
            mobile: "",
          },
          alternativeText: "Image de couverture du projet",
        },
        {
          images: {
            desktop: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
            mobile: {
              jpeg: ["", ""],
              webp: ["", ""],
            },

          },
          lazy: {
            desktop: "",
            mobile: "",
          },
          alternativeText: "Image de couverture du projet",
        },
        {
          images: {
            desktop: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
            mobile: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
          },
          lazy: {
            desktop: "",
            mobile: "",
          },
          alternativeText: "Image de couverture du projet",
        },
        {
          images: {
            desktop: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
            mobile: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
          },
          lazy: {
            desktop: "",
            mobile: "",
          },
          alternativeText: "Image de couverture du projet",
        },
        {
          images: {
            desktop: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
            mobile: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
          },
          lazy: {
            desktop: "",
            mobile: "",
          },
          alternativeText: "Image de couverture du projet",
        },
        {
          images: {
            desktop: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
            mobile: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
          },
          lazy: {
            desktop: "",
            mobile: "",
          },
          alternativeText: "Image de couverture du projet",
        },
        {
          images: {
            desktop: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
            mobile: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
          },
          lazy: {
            desktop: "",
            mobile: "",
          },
          alternativeText: "Image de couverture du projet",
        },
        {
          images: {
            desktop: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
            mobile: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
          },
          lazy: {
            desktop: "",
            mobile: "",
          },
          alternativeText: "Image de couverture du projet",
        },
        {
          images: {
            desktop: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
            mobile: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
          },
          lazy: {
            desktop: "",
            mobile: "",
          },
          alternativeText: "Image de couverture du projet",
        },
      ],
      process:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis euismod ipsum orci urna luctus arcu. Sodales lectus imperdiet sagittis eros, ornare quis. Sagittis egestas convallis pellentesque eget lectus id amet. Sodales a sit aliquet dis. Tincidunt ut nunc leo cursus tempor. Pharetra bibendum magna viverra id. Lobortis non sed quis purus venenatis quis augue id.",
      colorStory: {
        paragraph:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis euismod ipsum orci urna luctus arcu. Sodales lectus imperdiet sagittis eros, ornare quis. Sagittis egestas convallis pellentesque eget lectus id amet.",
        colors: [
          "#79C5D7",
          "#FADD4B",
          "#F98E45",
          "#FFF5E5",
          "#1D1D1D",
          "#E85243",
        ],
      },
      lastImage: {
        picture: {
          images: {
            desktop: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
            mobile: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
          },
          lazy: {
            desktop: "",
            mobile: "",
          },
          alternativeText: "Image de couverture du projet",
        },
      },
    },
    {
      title: "WebC",
      slug: "webc",
      date: "2023",
      outCover: {
        picture: {
          images: {
            mobile: {
              jpeg: [WebcomponentOutCoverBase, WebcomponentOutCoverRetina],
              webp: [WebcomponentOutCoverBaseWebp, WebcomponentOutCoverRetinaWebp],
            },
            desktop: {
              jpeg: [WebcomponentOutCoverBase, WebcomponentOutCoverRetina],
              webp: [WebcomponentOutCoverBaseWebp, WebcomponentOutCoverRetinaWebp],
            },
          },
          lazy: {
            desktop: WebcomponentOutCoverLazy,
            mobile: WebcomponentOutCoverLazy,
          },
          alternativeText: "Image de couverture du projet",
        },
      },
      inCover: {
        picture: {
          images: {
            desktop: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
            mobile: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
          },
          lazy: {
            desktop: "",
            mobile: "",
          },
          alternativeText: "Image de couverture du projet",
        },
      },
      projectDescription: {
        title: "Une histoire qui dure depuis 1973",
        goal: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus metus, mi cursus amet. Sit felis tellus praesent amet, suspendisse nisi at pretium. Tempus lectus facilisis nec viverra est, volutpat pulvinar non velit. Sem sit magna in augue libero ultrices. Elementum eros amet, vivamus id eget diam risus in mattis.",
      },
      marqueeImages: [
        {
          images: {
            desktop: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
            mobile: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
          },
          lazy: {
            desktop: "",
            mobile: "",
          },
          alternativeText: "Image de couverture du projet",
        },
        {
          images: {
            desktop: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
            mobile: {
              jpeg: ["", ""],
              webp: ["", ""],
            },

          },
          lazy: {
            desktop: "",
            mobile: "",
          },
          alternativeText: "Image de couverture du projet",
        },
        {
          images: {
            desktop: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
            mobile: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
          },
          lazy: {
            desktop: "",
            mobile: "",
          },
          alternativeText: "Image de couverture du projet",
        },
        {
          images: {
            desktop: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
            mobile: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
          },
          lazy: {
            desktop: "",
            mobile: "",
          },
          alternativeText: "Image de couverture du projet",
        },
        {
          images: {
            desktop: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
            mobile: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
          },
          lazy: {
            desktop: "",
            mobile: "",
          },
          alternativeText: "Image de couverture du projet",
        },
        {
          images: {
            desktop: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
            mobile: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
          },
          lazy: {
            desktop: "",
            mobile: "",
          },
          alternativeText: "Image de couverture du projet",
        },
        {
          images: {
            desktop: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
            mobile: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
          },
          lazy: {
            desktop: "",
            mobile: "",
          },
          alternativeText: "Image de couverture du projet",
        },
        {
          images: {
            desktop: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
            mobile: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
          },
          lazy: {
            desktop: "",
            mobile: "",
          },
          alternativeText: "Image de couverture du projet",
        },
        {
          images: {
            desktop: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
            mobile: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
          },
          lazy: {
            desktop: "",
            mobile: "",
          },
          alternativeText: "Image de couverture du projet",
        },
      ],
      process:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis euismod ipsum orci urna luctus arcu. Sodales lectus imperdiet sagittis eros, ornare quis. Sagittis egestas convallis pellentesque eget lectus id amet. Sodales a sit aliquet dis. Tincidunt ut nunc leo cursus tempor. Pharetra bibendum magna viverra id. Lobortis non sed quis purus venenatis quis augue id.",
      colorStory: {
        paragraph:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis euismod ipsum orci urna luctus arcu. Sodales lectus imperdiet sagittis eros, ornare quis. Sagittis egestas convallis pellentesque eget lectus id amet.",
        colors: [
          "#79C5D7",
          "#FADD4B",
          "#F98E45",
          "#FFF5E5",
          "#1D1D1D",
          "#E85243",
        ],
      },
      lastImage: {
        picture: {
          images: {
            desktop: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
            mobile: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
          },
          lazy: {
            desktop: "",
            mobile: "",
          },
          alternativeText: "Image de couverture du projet",
        },
      },
    },
    {
      title: "Cambium",
      slug: "cambium",
      date: "2022",
      outCover: {
        picture: {
          images: {
            mobile: {
              jpeg: [ExperienceOutCoverBase, ExperienceOutCoverRetina],
              webp: [ExperienceOutCoverBaseWebp, ExperienceOutCoverRetinaWebp],
            },
            desktop: {
              jpeg: [ExperienceOutCoverBase, ExperienceOutCoverRetina],
              webp: [ExperienceOutCoverBaseWebp, ExperienceOutCoverRetinaWebp],
            },
          },
          lazy: {
            desktop: ExperienceOutCoverLazy,
            mobile: ExperienceOutCoverLazy,
          },
          alternativeText: "Image de couverture du projet",
        },
      },
      inCover: {
        picture: {
          images: {
            desktop: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
            mobile: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
          },
          lazy: {
            desktop: "",
            mobile: "",
          },
          alternativeText: "Image de couverture du projet",
        },
      },
      projectDescription: {
        title: "Une histoire qui dure depuis 1973",
        goal: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus metus, mi cursus amet. Sit felis tellus praesent amet, suspendisse nisi at pretium. Tempus lectus facilisis nec viverra est, volutpat pulvinar non velit. Sem sit magna in augue libero ultrices. Elementum eros amet, vivamus id eget diam risus in mattis.",
      },
      marqueeImages: [
        {
          images: {
            desktop: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
            mobile: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
          },
          lazy: {
            desktop: "",
            mobile: "",
          },
          alternativeText: "Image de couverture du projet",
        },
        {
          images: {
            desktop: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
            mobile: {
              jpeg: ["", ""],
              webp: ["", ""],
            },

          },
          lazy: {
            desktop: "",
            mobile: "",
          },
          alternativeText: "Image de couverture du projet",
        },
        {
          images: {
            desktop: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
            mobile: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
          },
          lazy: {
            desktop: "",
            mobile: "",
          },
          alternativeText: "Image de couverture du projet",
        },
        {
          images: {
            desktop: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
            mobile: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
          },
          lazy: {
            desktop: "",
            mobile: "",
          },
          alternativeText: "Image de couverture du projet",
        },
        {
          images: {
            desktop: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
            mobile: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
          },
          lazy: {
            desktop: "",
            mobile: "",
          },
          alternativeText: "Image de couverture du projet",
        },
        {
          images: {
            desktop: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
            mobile: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
          },
          lazy: {
            desktop: "",
            mobile: "",
          },
          alternativeText: "Image de couverture du projet",
        },
        {
          images: {
            desktop: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
            mobile: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
          },
          lazy: {
            desktop: "",
            mobile: "",
          },
          alternativeText: "Image de couverture du projet",
        },
        {
          images: {
            desktop: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
            mobile: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
          },
          lazy: {
            desktop: "",
            mobile: "",
          },
          alternativeText: "Image de couverture du projet",
        },
        {
          images: {
            desktop: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
            mobile: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
          },
          lazy: {
            desktop: "",
            mobile: "",
          },
          alternativeText: "Image de couverture du projet",
        },
      ],
      process:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis euismod ipsum orci urna luctus arcu. Sodales lectus imperdiet sagittis eros, ornare quis. Sagittis egestas convallis pellentesque eget lectus id amet. Sodales a sit aliquet dis. Tincidunt ut nunc leo cursus tempor. Pharetra bibendum magna viverra id. Lobortis non sed quis purus venenatis quis augue id.",
      colorStory: {
        paragraph:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis euismod ipsum orci urna luctus arcu. Sodales lectus imperdiet sagittis eros, ornare quis. Sagittis egestas convallis pellentesque eget lectus id amet.",
        colors: [
          "#79C5D7",
          "#FADD4B",
          "#F98E45",
          "#FFF5E5",
          "#1D1D1D",
          "#E85243",
        ],
      },
      lastImage: {
        picture: {
          images: {
            desktop: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
            mobile: {
              jpeg: ["", ""],
              webp: ["", ""],
            },
          },
          lazy: {
            desktop: "",
            mobile: "",
          },
          alternativeText: "Image de couverture du projet",
        },
      },
    },
  ],
};
