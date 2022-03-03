import React from "react";
import ShoppingItem from "../ShoppingItem/ShoppingItem";

import "./ShoppingList.css";

const ShoppingList = (props) => {
  if (props.items.length === 0) {	
    return (
      <div className="alert">
        <h2 className="alert__message">Found no shopping data.</h2>
      </div>
    )  
  }
  
  return (
    <ul className="list">
      {
        props.items.map((expense) => (
          <ShoppingItem
            key={expense.id}
            shopItemId={expense.id}
            title={expense.title}
            category={expense.category}
            onDeleteShopping={props.onDeleteShopping}
            onCompleteShopping={props.onCompleteShopping}
            onEditShopping={props.onEditHandler}
            isCompleted={expense.isCompleted}
          />
        ))
      }
    </ul>
  );
};

export default ShoppingList;
