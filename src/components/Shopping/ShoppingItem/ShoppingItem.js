import React from 'react';
import Button from '../../UI/Button/Button';
import Card from '../../UI/Card/Card';

import './ShoppingItem.css';

import { ReactComponent as EditIcon } from '../../../assets/icons/edit-pencil.svg';
import { ReactComponent as DeleteIcon } from '../../../assets/icons/trash-bin.svg';

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
          <Button 
            type="button" 
            className="item__button item__button--edit"
          >
            <EditIcon />
          </Button>
          <Button 
            type="button" 
            className="item__button item__button--delete" 
            onClick={(event) => deleteHandler(event, props.shopItemId)}
          >
            <DeleteIcon />
          </Button>
        </div>
      </Card>
    </li>
  );
};

export default ShoppingItem;
