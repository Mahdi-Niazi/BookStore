import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Books from './pages/Books';
import Navigation from './components/Navigation';
import Categories from './pages/Catagories';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigation />} />
          <Route index element={<Books />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
