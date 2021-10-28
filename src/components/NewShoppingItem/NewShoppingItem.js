import React, { useState } from 'react';
import ShoppingForm from '../ShoppingForm/ShoppingForm';
import Button from '../UI/Button/Button';

import './NewShoppingItem.css';

const NewShoppingItem = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveShoppingDataHandler = (enteredShoppingData) => {
    const shoppingData = {
      ...enteredShoppingData,
      id: Math.random().toString()
    };

    props.onAddShopping(shoppingData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {
        !isEditing && (
          <Button type="button" className="add" onClick={startEditingHandler}>
            Add New Shopping
          </Button>
        )
      }

      {
        isEditing && (
          <ShoppingForm 
            onSaveShoppingData={saveShoppingDataHandler}
            onCancel={stopEditingHandler}
          />
        )
      }
    </div>
  );
};

export default NewShoppingItem;
