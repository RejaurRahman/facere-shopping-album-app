import './ShoppingList.css';

const ShoppingList = (props) => {
  return (
    <div className="list">
      <div>{props.title}</div>
    </div>
  );
}

export default ShoppingList;
