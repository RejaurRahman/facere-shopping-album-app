import React from "react";

import "./Background.scss";

const Background = () => {

  return (
    <div className="background">
      <div className="background__left">
        <div className="background__left--side"></div>
      </div>
      <div className="background__right">
        <div className="background__right--top"></div>
        <div className="background__right--bottom"></div>
      </div>
    </div>
  );
}

export default Background;
