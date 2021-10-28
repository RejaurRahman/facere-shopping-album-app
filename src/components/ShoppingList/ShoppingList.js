import React from 'react';
import { useState } from 'react/cjs/react.development';
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
      <ShoppingItem 
        title={props.items[0].title} 
        amount={props.items[0].amount} 
        category={props.items[0].category}
      />
      <ShoppingItem 
        title={props.items[1].title} 
        amount={props.items[1].amount} 
        category={props.items[1].category}
      />
      <ShoppingItem 
        title={props.items[2].title} 
        amount={props.items[2].amount} 
        category={props.items[2].category} 
      />
      <ShoppingItem 
        title={props.items[3].title} 
        amount={props.items[3].amount} 
        category={props.items[3].category} 
      />
    </Card>
  );
};

export default ShoppingList;
