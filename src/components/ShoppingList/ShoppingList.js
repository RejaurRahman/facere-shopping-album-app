import React from 'react';
import ShoppingItem from '../ShoppingItem/ShoppingItem';

import './ShoppingList.css';

const ShoppingList = (props) => {
  return (
    <ul className="shoppingList">
      {
        props.items.map((expense) => (
          <ShoppingItem
            key={expense.id}
            title={expense.title}
            category={expense.category}
          />
        ))
      }
    </ul>
  );
};

export default ShoppingList;
