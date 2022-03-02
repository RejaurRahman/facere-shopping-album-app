import React from 'react';

import './Modal.css';

const Modal = (props) => {
  return (
    <div className="modal">
      <div className="modal__box">
        <span 
          className="modal__close" 
          onClick={props.onClick}
        >
          close
        </span>
        { props.children }
      </div>
      <div 
        className="modal__overlay" 
        onClick={props.onClick}
      ></div> 
    </div>    
  );
}

export default Modal;
