import React from 'react';
import Button from '../UI/Button/Button';
import Card from '../UI/Card/Card';

import './ShoppingItem.css';

const ShoppingItem = (props) => {
  const deleteHandler = (event, id) => {
    props.onDeleteShopping(id);
  };

  return (
    <li>
      <Card className="item">
        <div className="item__left">
          <div>{props.category}</div> 
          <div>{props.title}</div>
        </div>
        <div className="item__right">
          <Button type="button" className="edit">Edit</Button>
          <Button type="button" className="delete" onClick={(event) => deleteHandler(event, props.shopItemId)}>Delete</Button>
        </div>
      </Card>
    </li>
  );
};

export default ShoppingItem;
