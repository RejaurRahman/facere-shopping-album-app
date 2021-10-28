import React from 'react';
import Card from '../UI/Card';

import './ShoppingItem.css';

const ShoppingItem = (props) => {
  return (
    <li>
      <Card className="shoppingItem">
        <div>{props.category}</div>
        <div>{props.title}</div> 
      </Card>
    </li>
  );
};

export default ShoppingItem;