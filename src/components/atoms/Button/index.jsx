import React from "react";
import ButtonStyle from "./button.module.scss";

const index = (props) => {
  const { type, to, children, state } = props;
  switch (type) {
    case "submit":
      return <button disabled={state} className={ButtonStyle.ad_submit_btn} type="submit">Envoyer</button>;
      break;
    case "link":
      return (
        <button className={ButtonStyle.ad_link_btn}>
          <a href={to}>{children}</a>
        </button>
      );
      break;
    default:
      break;
  }
};

export default index;
