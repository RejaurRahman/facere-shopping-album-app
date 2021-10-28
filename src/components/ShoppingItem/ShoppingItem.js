import React from 'react';
import Card from '../UI/Card/Card';

import './ShoppingItem.css';

const ShoppingItem = (props) => {
  return (
    <li>
      <Card className="item">
        <div>{props.title}</div>
        <div>{props.category}</div> 
      </Card>
    </li>
  );
};

export default ShoppingItem;
