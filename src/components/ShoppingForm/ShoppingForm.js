import './ShoppingForm.css';

const ShoppingForm = () => {
  return (
    <form>
      <input
        type="text"
        id="add-input"
        className="input"
        name="text"
        placeholder="Enter task"
        autoComplete="off"
      />
      <button type="submit" className="btn">
        Add
      </button>
    </form>
  );
}

export default ShoppingForm;
