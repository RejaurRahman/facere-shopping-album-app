import React from 'react'
import './Button.scss'

const Button = (props) => {
  const defineClass = 'button ' + props.className
  const buttonType = props.type

  return (
    <button
      className={defineClass}
      onClick={props.onClick}
      type={buttonType}
    >
      {props.children}
    </button>
  )
}

export default Button
