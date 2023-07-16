import React from "react";
import LoaderStyle from "./loader.module.scss";

const Index = () => {
  const [progress, setProgress] = React.useState(0);
  const [completed, setCompleted] = React.useState(false);

  React.useEffect(() => {
    if (progress < 100) {
      const interval = setInterval(() => {
        setProgress((prevProgress) => prevProgress + 1);
      }, 15);

      return () => {
        clearInterval(interval);
      };
    } else {
      setCompleted(true);
    }

    return () => {
      // Nettoyer l'intervalle lors du démontage du composant
      clearInterval(interval);
    };
  }, [progress]);

  const loaderStyle = {
    transform: completed ? "translateY(-100%)" : "none",
    transition: "transform 0.5s ease",
  };

  return (
    <div className={LoaderStyle.ad_loader}  style={loaderStyle}>
      <h1>{progress}%</h1>
    </div>
  );
};

export default Index;
