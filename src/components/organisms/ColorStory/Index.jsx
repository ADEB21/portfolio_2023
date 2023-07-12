import React from "react";
import ColorStoryStyle from "./colorStory.module.scss";
import TitleParagraph from "../../molecules/TitleParagraph/Index";

const Index = (props) => {
  const { paragraph, colors } = props;
  console.log(paragraph, colors);
  return (
    <section className={ColorStoryStyle.ad_colorStory}>
      <h2 className="ad-large-heading">Une histoire de couleurs</h2>
      <TitleParagraph title="Une histoire de couleurs" subTitle={paragraph} />
      <div className={ColorStoryStyle.ad_colorStory_colors}>
        {colors.map((c, index) => {
          return (
            <div
              className={ColorStoryStyle.ad_colorStory_colors_bg}
              key={index}
              style={{ backgroundColor: c }}
            >
              <p className={ColorStoryStyle.ad_colorStory_colors_bg_hex}>{c}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Index;
