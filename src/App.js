import React, { useState } from "react";
import NewShoppingItem from "./components/NewShoppingItem/NewShoppingItem";
import ShoppingBoard from "./components/Shopping/ShoppingBoard/ShoppingBoard";
import Background from "./components/UI/Background/Background";
import EditShoppingForm from "./components/Form/EditShoppingForm/EditShoppingForm";
import ShoppingCounter from "./components/Shopping/ShoppingCounter/ShoppingCounter";

import "./App.scss";
import "./styles/base.scss";

const App = () => {
  const [expenses, setExpenses] = useState([]);

  const [filteredCategory, setFilteredCategory] = useState("All");

  const [isExpenseAdded, setIsExpenseAdded] = useState(false);

  const [isEditing, setIsEditing] = useState(false);

  const [editItemId, setEditItemId] = useState();

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

  const completeShoppingHandler = (id) => {
    const newExpenseList = [...expenses];

    newExpenseList.map((item) => {
      if (item.id === id) {
        item["isCompleted"] = !item["isCompleted"];

        return item;
      }

      return item;
    })

    setExpenses(newExpenseList);
  }

  const editShoppingHandler = (id) => {
    setIsEditing(!isEditing);
    setEditItemId(id);
  }

  const onCompleteEdit = (editedItem) => {
    if (editedItem["title"] === "" || editedItem["category"] === "") {
      setIsEditing(false);
      setEditItemId("");
      return;
    }
    const newExpenseList = [...expenses];

    newExpenseList.map((item) => {
      if (item.id === editItemId) {
        item["title"] = editedItem["title"];
        item["category"] = editedItem["category"];

        return item;
      }

      return item;
    });

    setExpenses(newExpenseList);
    setIsEditing(false);
    setEditItemId("");
  }

  const onCancelEdit = () => {
    setIsEditing(false);
    setEditItemId("");
  }

  return (
    <>
      <Background />
      <div className="app">
        <div className="app__container">
          <NewShoppingItem
            onFilterValueChange={filterItems}
            onAddShopping={addShoppingHandler}
            isExpenseAdded={isExpenseAdded}
          />

          {
            isEditing ? <EditShoppingForm onCancelEdit={onCancelEdit} onCompleteEdit={onCompleteEdit} id={editItemId} /> : ""
          }

          <ShoppingBoard
            onCompleteShopping={completeShoppingHandler}
            onEditHandler={editShoppingHandler}
            onDeleteShopping={deleteShoppingHandler}
            items={expenses}
            currentCategory={filteredCategory}
          />
          <ShoppingCounter
            items={
              filteredCategory === "All"
                ? expenses
                : expenses.filter((item) => item.category === filteredCategory)
            }
          />
        </div>
      </div>
    </>
  );
};

export default App;
