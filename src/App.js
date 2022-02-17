import './App.css';
import Shopping from './views/Shopping/Shopping';
import Header from './components/Header/Header';
import ListProvider from './context/ListContext';

function App() {
  return (
    <ListProvider>
      <div className="App">
        <Header />
        <Shopping />
      </div>
    </ListProvider>
  );
}

export default App;
