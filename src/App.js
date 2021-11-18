import React, { useState } from 'react';
import NewShoppingItem from './components/NewShoppingItem/NewShoppingItem';
import ShoppingBoard from './components/Shopping/ShoppingBoard/ShoppingBoard';
import Background from './components/UI/Background/Background';

import './App.css';
import './styles/fonts.css'

const App = () => {
  const [expenses, setExpenses] = useState([]);

  const [filteredCategory, setFilteredCategory] = useState('All');

  const [isExpenseAdded, setIsExpenseAdded] = useState(false);

  const addShoppingHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    }, [expenses])

    setIsExpenseAdded(true);
  };

  const filterItems = (currentCategory) => {
    setFilteredCategory(currentCategory);
  }

  const deleteShoppingHandler = (id) => {
    const shoppingList = expenses.filter((item) => {
      return item.id !== id;
    })

    if (shoppingList.length === 0) {	
      setIsExpenseAdded(false);	
    }

    setExpenses(shoppingList);
  }

  return (
    <>
      <Background />
      <div className="app">
        <div className="app__container">
          <NewShoppingItem onFilterValueChange={filterItems} onAddShopping={addShoppingHandler} isExpenseAdded={isExpenseAdded} />
          <ShoppingBoard onDeleteShopping={deleteShoppingHandler} items={expenses} currentCategory={filteredCategory} />
        </div>
      </div>
    </>
  );
};

export default App;
