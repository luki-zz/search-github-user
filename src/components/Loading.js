import React from "react";
import preloader from "../images/preloader.gif";

const Loading = () => {
  return (
    <main>
      <img src={preloader} alt="loading spinner" className="loading-img" />
    </main>
  );
};

export default Loading;
