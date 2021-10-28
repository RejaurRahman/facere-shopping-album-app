import React, { useState } from 'react';
import ShoppingForm from '../ShoppingForm/ShoppingForm';

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
    <div className="newExpense">
      {
        !isEditing && (
          <button onClick={startEditingHandler}>Add New Shopping</button>
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
