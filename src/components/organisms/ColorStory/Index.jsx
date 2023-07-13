import React from "react";
import ColorStoryStyle from "./colorStory.module.scss";
import TitleParagraph from "../../molecules/TitleParagraph/Index";
import gongju from "../../../assets/scripts/vendor/gongju-es";

const Index = (props) => {
  const { paragraph, colors } = props;
  const color = React.useRef();

  const [progress, setProgress] = React.useState(0);

  const leftToRight = () => {
    const colorRect = gongju.getRectangle(color.current);
    const colorsHexs = color.current.querySelectorAll(".color-bg");
    if (gongju.isVisible(color.current)) {
      let smoothProgress = 1.3 - colorRect.top / window.innerHeight;
      smoothProgress = Math.max(0, Math.min(1, smoothProgress));
      setProgress(smoothProgress);
      setProgress((value) => {
        colorsHexs.forEach((e) => {
          e.style.setProperty("--smooth-progress", value);
        });
        return value;
      });
    }
  };

  React.useEffect(() => {
    document.addEventListener("scroll", leftToRight);

    return () => {
      document.removeEventListener("scroll", leftToRight);
    };
  }, []);

  return (
    <section className={ColorStoryStyle.ad_colorStory}>
      <h2 className="ad-large-heading">Une histoire de couleurs</h2>
      <TitleParagraph title="Une histoire de couleurs" subTitle={paragraph} />
      <div ref={color} className={ColorStoryStyle.ad_colorStory_colors}>
        {colors.map((c, index) => {
          if (c !== "none") {
            return (
              <div
                className={`color-bg ${ColorStoryStyle.ad_colorStory_colors_bg}`}
                key={index}
                style={{ backgroundColor: c, $smoothProgress: progress }}
              >
                <p className={ColorStoryStyle.ad_colorStory_colors_bg_hex}>{c}</p>
              </div>
            );
          }
        })}
      </div>
    </section>
  );
};

export default Index;
