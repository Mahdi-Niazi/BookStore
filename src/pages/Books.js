import React, { useState } from 'react';
import BookList from '../components/BookList';
import BookForm from '../components/BookForm';
import Navigation from '../components/Navigation';

const Home = () => {
  const [books, setBooks] = useState([]);

  const handleDelete = (id) => {
    setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
  };

  const handleSubmit = (newBook) => {
    setBooks((prevBooks) => [...prevBooks, newBook]);
  };

  return (
    <div>
      <Navigation />
      <BookList books={books} onDelete={handleDelete} />
      <BookForm onSubmit={handleSubmit} />
    </div>
  );
};

export default Home;
