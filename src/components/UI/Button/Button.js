import React from "react";
import "./Button.scss";

const Button = (props) => {
  const defineClass = "button " + props.className;
  const buttonType = props.type;

  return (
    <button className={defineClass} type={buttonType} onClick={props.onClick}>
      { props.children }
    </button>
  );
}

export default Button;
