import React from "react";
import TitleParagraphStyle from "./titleParagraph.module.scss";

const Index = (props) => {
  const {title, subTitle} = props
  return (
    <div className={TitleParagraphStyle.ad_titleParagraph}>
      <div>
      <h3>{title}</h3>
      <p>
        {subTitle}
      </p>
      </div>
    </div>
  );
};

export default Index;
