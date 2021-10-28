
   
import React, { useState } from 'react';
import Card from '../UI/Card';

import './ShoppingItem.css';

const ShoppingItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const [category, setCategory] = useState(props.category);

  const clickTitleHandler = () => {
    setTitle('Updated!');
  };

  const clickCategoryHandler = () => {
    setCategory('Updated Category!');
  };

  return (
    <Card className="list">
      <div>{category}</div>
      <div>{title}</div>
      <button onClick={clickTitleHandler}>change title</button> 
      <button onClick={clickCategoryHandler}>change category</button> 
    </Card>
  );
};

export default ShoppingItem;
