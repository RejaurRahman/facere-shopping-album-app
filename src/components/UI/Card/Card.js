import React from "react";

import "./Card.scss";

const Card = (props) => {
  const defineClass = "card " + props.className;

  return (
    <div className={defineClass}>
      { props.children }
    </div>
  );
}

export default Card;
