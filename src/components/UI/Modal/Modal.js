import React from 'react'
import { ReactComponent as CloseIcon } from '../../../assets/icons/close.svg'
import './Modal.scss'

const Modal = (props) => {
  return (
    <div className="modal">
      <div className="modal__box">
        <div className="modal__box--top">
          <span className="modal__close" onClick={props.onClick}>
            <CloseIcon />
          </span>
        </div>
        {props.children}
      </div>
      <div className="modal__overlay" onClick={props.onClick}></div>
    </div>
  )
}

export default Modal
