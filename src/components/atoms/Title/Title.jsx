import React from "react";
import "./title.scss";

function Title({ type, children }) {
    console.log(type);
  switch (type) {
    case "date":
      return <p className="date">{children}</p>;
      break;
    case "header":
      return <p className="header">{children}</p>;
      break;

    default:
        <p>Erreur</p>
      break;
  }
}

export default Title;
