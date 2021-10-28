import React, { useState } from 'react';
import NewShoppingItem from './components/NewShoppingItem/NewShoppingItem';
import Shopping from './components/Shopping/Shopping';
import Background from './components/UI/Background/Background';

import './App.css';

const dummy_expenses = [
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

const App = () => {
  const [expenses, setExpenses] = useState(dummy_expenses);

  const addShoppingHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    }, [expenses])
  };

  return (
    <div className="app">
      <Background />
      <NewShoppingItem onAddShopping={addShoppingHandler} />
      <Shopping items={expenses} />
    </div>
  );
};

export default App;
