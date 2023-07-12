import React from "react";
import ProjectDescriptionStyle from "./projectDescription.module.scss";
import TitleParagraph from "../../molecules/TitleParagraph/Index";

const Index = (props) => {
  const { title, goal } = props;
  return (
    <section className={ProjectDescriptionStyle.ad_projectDescription}>
      <h2 className="ad-large-heading">{title}</h2>
      <TitleParagraph title="Objectifs" subTitle={goal} />
    </section>
  );
};

export default Index;
