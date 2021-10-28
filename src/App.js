import React from 'react';
import NewShoppingItem from './components/NewShoppingItem/NewShoppingItem';
import ShoppingList from './components/ShoppingList/ShoppingList';

import './App.css';

const App = () => {
  const expenses = [
    {
      id: 'e1',
      title: 'Chopped Tomatoes',
      category: 'Food'
    },
    {
      id: 'e2',
      title: 'Cardamon Pods',
      category: 'Food'
    },
    {
      id: 'e3',
      title: 'Paneer',
      category: 'Food'
    },
    {
      id: 'e4',
      title: 'Desk Chair',
      category: 'Furniture'
    }
  ];

  const addShoppingHandler = expense => {
    console.log('In App.js')
    console.log(expenses);
  }

  return (
    <div className="app">
      <NewShoppingItem onAddShopping={addShoppingHandler} />
      <ShoppingList items={expenses} />
    </div>
  );
};

export default App;
