import React from 'react';
import ShoppingList from '../ShoppingList/ShoppingList';
import Card from '../../UI/Card/Card';

import './ShoppingBoard.css';

const ShoppingBoard = (props) => {
  const filteredShopping = props.currentCategory === 'All' ? props.items : props.items.filter((expense) => {
    return expense.category === props.currentCategory;
  });

  return (
    <>
      <Card className="shopping">
        <ShoppingList 
          items={filteredShopping}
          onDeleteShopping={props.onDeleteShopping}
          onCompleteShopping={props.onCompleteShopping}
        />
      </Card>
    </>
  );
};

export default ShoppingBoard;
