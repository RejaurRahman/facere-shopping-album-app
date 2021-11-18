import React, { useState } from 'react';
import AddShoppingForm from '../Form/AddShoppingForm/AddShoppingForm';
import Button from '../UI/Button/Button';
import ShoppingFilter from '../Shopping/ShoppingFilter/ShoppingFilter';

import './NewShoppingItem.css';

import { ReactComponent as AddIcon } from '../../assets/icons/add-plus.svg';

const NewShoppingItem = (props) => {
  const [isAdding, setIsAdding] = useState(false);

  const [filteredCategory, setFilteredCategory] = useState('All');	

  const filterChangeHandler = async (selectedCategory) => {	
    await setFilteredCategory(selectedCategory);	
    props.onFilterValueChange(selectedCategory);	
  };
  
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
          <AddShoppingForm 
            onSaveShoppingData={saveShoppingDataHandler}
            onCancel={stopAddingHandler}
          />
        )
      }

      {
        props.isExpenseAdded ? (
          <ShoppingFilter	
            selected={filteredCategory}	
            onChangeFilter={filterChangeHandler}	
          />
        ) : ''
      }
    </div>
  );
};

export default NewShoppingItem;
