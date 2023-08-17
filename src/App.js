import { Routes, Route } from 'react-router-dom';
import './App.css';
import Books from './pages/Books';
import Navigation from './components/Navigation';
import Categories from './pages/Catagories';

function App() {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/bookstore-cms/categories" element={<Categories />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
