import React, { useState } from 'react';
import ShoppingFilter from '../ShoppingFilter/ShoppingFilter';
import ShoppingList from '../ShoppingList/ShoppingList';
import Card from '../../UI/Card/Card';

import './ShoppingBoard.css';

const ShoppingBoard = (props) => {
  const [filteredCategory, setFilteredCategory] = useState('Food');

  const filterChangeHandler = (selectedCategory) => {
    setFilteredCategory(selectedCategory);
  };

  const filteredShopping = props.items.filter((expense) => {
    return expense.category === filteredCategory;
  });

  return (
    <>
      <Card className="shopping">
        <ShoppingFilter 
          selected={filteredCategory} 
          onChangeFilter={filterChangeHandler} 
        />
        <ShoppingList 
          items={filteredShopping}
          onDeleteShopping={props.onDeleteShopping}
        />
      </Card>
    </>
  );
};

export default ShoppingBoard;
