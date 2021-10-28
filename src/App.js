import ShoppingForm from './components/ShoppingForm/ShoppingForm';
import ShoppingList from './components/ShoppingList/ShoppingList';
import Card from './components/UI/Card';

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
      id: 'e3',
      title: 'Desk Chair',
      category: 'Furniture'
    }
  ];

  return (
    <div className="app">
      <ShoppingForm />
      <Card className="ListWrapper">
        <ShoppingList title={expenses[0].title} amount={expenses[0].amount} category={expenses[0].category} shopName={expenses[0].shopName} />
        <ShoppingList title={expenses[1].title} amount={expenses[1].amount} category={expenses[1].category} shopName={expenses[1].shopName} />
        <ShoppingList title={expenses[2].title} amount={expenses[2].amount} category={expenses[2].category} shopName={expenses[2].shopName} />
        <ShoppingList title={expenses[3].title} amount={expenses[3].amount} category={expenses[3].category} shopName={expenses[3].shopName} />
      </Card>
    </div>
  );
}

export default App;
