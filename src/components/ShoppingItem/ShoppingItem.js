import React, { useState } from 'react';
import Card from '../UI/Card';

import './ShoppingItem.css';

const ShoppingItem = (props) => {
  const [title, setTitle] = useState(props.title);
  console.log('Shopping Item Item evaluated by React')

  const clickHandler = () => {
    setTitle('Updated!');
    console.log('clicked!');
  };

  return (
    <Card className="list">
      <div>{props.category}</div>
      <div>{title}</div>
      <button onClick={clickHandler}>change title</button>  
    </Card>
  );
};

export default ShoppingItem;
