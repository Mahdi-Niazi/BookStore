import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBooks } from '../redux/books/booksSlice';

const Book = ({ id, title, author }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <h3>{title}</h3>
      <p>{author}</p>
      <button
        type="button"
        onClick={() => {
          dispatch(removeBooks(id));
        }}
      >
        Delete
      </button>
    </div>
  );
};

Book.defaultProps = {
  id: '',
};

Book.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
