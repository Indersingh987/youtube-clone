import './App.css';
import Header from './Header'
import Slidebar from './Slidebar'
import HomePage from './HomePage'

function App() {
  return (
    <div className="app">
      <Header />
      <main className='app__page'>
        <Slidebar />
        <HomePage />
      </main>
    </div>
  );
}

export default App;
