import React, { useState } from 'react';
import ShoppingForm from '../Shopping/ShoppingForm/ShoppingForm';
import Button from '../UI/Button/Button';

import './NewShoppingItem.css';

import { ReactComponent as AddIcon } from '../../assets/icons/add-plus.svg';

const NewShoppingItem = (props) => {
  const [isAdding, setIsAdding] = useState(false);

  const saveShoppingDataHandler = (enteredShoppingData) => {
    const shoppingData = {
      ...enteredShoppingData,
      id: Math.random().toString()
    };

    props.onAddShopping(shoppingData);
    setIsAdding(false);
  };

  const startAddingHandler = () => {
    setIsAdding(true);
  };

  const stopAddingHandler = () => {
    setIsAdding(false);
  };

  return (
    <div className="new-expense">
      {
        !isAdding && (
          <Button 
            type="button" 
            className="button--rounded button__add" 
            onClick={startAddingHandler}
          >
            <AddIcon />
          </Button>
        )
      }

      {
        isAdding && (
          <ShoppingForm 
            onSaveShoppingData={saveShoppingDataHandler}
            onCancel={stopAddingHandler}
          />
        )
      }
    </div>
  );
};

export default NewShoppingItem;
