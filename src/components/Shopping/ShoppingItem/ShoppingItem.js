import React from 'react';
import Button from '../../UI/Button/Button';
import Card from '../../UI/Card/Card';

import './ShoppingItem.css';

const ShoppingItem = (props) => {
  const deleteHandler = (event, id) => {
    props.onDeleteShopping(id);
  };

  return (
    <li className="item">
      <Card className="item__list">
        <div className="item__left">
          <span className="item__category">{props.category}</span> 
          <p className="item__name">{props.title}</p>
        </div>
        <div className="item__right">
          <Button type="button" className="item__button item__button--edit">Edit</Button>
          <Button type="button" className="item__button item__button--delete" onClick={(event) => deleteHandler(event, props.shopItemId)}>Delete</Button>
        </div>
      </Card>
    </li>
  );
};

export default ShoppingItem;
