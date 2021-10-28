import React, { useState } from 'react';
import ShoppingFilter from '../ShoppingFilter/ShoppingFilter';
import ShoppingItem from '../ShoppingItem/ShoppingItem';
import Card from '../UI/Card';

import './ShoppingList.css';

const ShoppingList = (props) => {
  const [filteredCategory, setFilteredCategory] = useState('Food');

  const filterChangeHandler = selectedCategory => {
    setFilteredCategory(selectedCategory);
  };

  return (
    <Card className="list">
      <ShoppingFilter selected={filteredCategory} onChangeFilter={filterChangeHandler} />
      {
        props.items.map((expense) => (
          <ShoppingItem 
            title={expense.title}
            amount={expense.amount}
            category={expense.category}
          />
        ))
      }
    </Card>
  );
};

export default ShoppingList;