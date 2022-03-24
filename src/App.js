import './App.css';
import ItemList from './components/item-list';

function App() {
  const title = 'My TODO'

  return (
    <div>
      <h1 className="text-3xl font-bold underline mb-3">
        {title}
      </h1>

      <div className="todo-list">
        <ItemList />
      </div>
    </div>
  );
}

export default App;
