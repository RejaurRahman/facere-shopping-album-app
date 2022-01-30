import React from 'react';

import './ShoppingCounter.css';

const ShoppingCounter = () => {

  return (
    <>
      <div className="counter">
        <div className="counter__left"></div> 
        <div className="counter__right">
          <span className="counter__amount">0</span>
          <span className="counter__divider">/</span>
          <span className="counter__amount">0</span>
          <span className="counter__text">completed</span>
        </div> 
      </div>
    </>
  );
};

export default ShoppingCounter;