import React, { useState } from 'react';
import NewShoppingItem from './components/NewShoppingItem/NewShoppingItem';
import Shopping from './components/Shopping/Shopping';
import Background from './components/UI/Background/Background';

import './App.css';

const App = () => {
  const [expenses, setExpenses] = useState([]);

  const addShoppingHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    }, [expenses])
  };

  return (
    <>
      <Background />
      <div className="app">
        <div className="app__container">
          <NewShoppingItem onAddShopping={addShoppingHandler} />
          <Shopping items={expenses} />
        </div>
      </div>
    </>
  );
};

export default App;
