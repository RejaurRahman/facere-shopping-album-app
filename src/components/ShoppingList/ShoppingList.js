import React from 'react';
import ShoppingItem from '../ShoppingItem/ShoppingItem';
import Card from '../UI/Card';

import './ShoppingList.css';

const ShoppingList = (props) => {
  return (
    <Card className="list">
      <ShoppingItem 
        title={props.items[0].title} 
        category={props.items[0].category}
      />
      <ShoppingItem 
        title={props.items[1].title}
        category={props.items[1].category}
      />
      <ShoppingItem 
        title={props.items[2].title}
        category={props.items[2].category}
      />
      <ShoppingItem 
        title={props.items[3].title}
        category={props.items[3].category}
      />
    </Card>
  );
}

export default ShoppingList;
