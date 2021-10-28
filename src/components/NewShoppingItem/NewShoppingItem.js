import React from 'react';
import ShoppingForm from '../ShoppingForm/ShoppingForm';

import './NewShoppingItem.css';

const NewShoppingItem = (props) => {
  const saveShoppingDataHandler = (enteredShoppingData) => {
    const shoppingData = {
      ...enteredShoppingData,
      id: Math.random.toString()
    };

    props.onAddShopping(shoppingData);
  };

  return (
    <div className="newExpense">
      <ShoppingForm onSaveShoppingData={saveShoppingDataHandler} />
    </div>
  );
}

export default NewShoppingItem;
