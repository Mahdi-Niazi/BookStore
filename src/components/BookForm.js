import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { v4 as uuidv4 } from 'uuid';
import { addBooks } from '../redux/books/booksSlice';

const BookForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      id: uuidv4(),
      title,
      author,
      category: 'Fiction',
    };
    dispatch(addBooks(data));
    setTitle('');
    setAuthor('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>ADD NEW BOOK</h2>
      <input
        type="text"
        placeholder="Book Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Book Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <button type="submit">ADD BOOK</button>
    </form>
  );
};

export default BookForm;
