import React, { useState } from 'react';
import ShoppingFilter from '../ShoppingFilter/ShoppingFilter';
import ShoppingList from '../ShoppingList/ShoppingList';
import Card from '../UI/Card/Card';

import './Shopping.css';

const Shopping = (props) => {
  const [filteredCategory, setFilteredCategory] = useState('Food');

  const filterChangeHandler = (selectedCategory) => {
    setFilteredCategory(selectedCategory);
  };

  const filteredShopping = props.items.filter((expense) => {
    return expense.category === filteredCategory;
  });

  return (
    <div>
      <Card className="shopping">
        <ShoppingFilter 
          selected={filteredCategory} 
          onChangeFilter={filterChangeHandler} 
        />
        <ShoppingList 
          items={filteredShopping} 
        />
      </Card>
    </div>
  );
};

export default Shopping;
