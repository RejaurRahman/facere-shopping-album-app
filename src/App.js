import './App.css';

const App = () => {
  return (
    <div className="App">
      <input
        type="text"
        id="add-input"
        className="input"
        name="text"
        autoComplete="off"
      />
      <button type="submit" className="btn">
        Add
      </button>
    </div>
  );
}

export default App;
