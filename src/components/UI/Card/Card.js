import React from "react";

import "./Card.css";

const Card = (props) => {
  const defineClass = "card " + props.className;

  return (
    <div className={defineClass}>
      { props.children }
    </div>
  );
}

export default Card;
