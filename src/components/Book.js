import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBooks, deleteBook } from '../redux/books/booksSlice';
import './styles/book.css';
import progress from './styles/progress.png';

const Book = ({ id, title, author }) => {
  const dispatch = useDispatch();

  return (
    <div className="bookLists">
      <div className="bookSection">
        <span className="action">Action</span>
        <span className="book-title">{title}</span>
        <span className="book-author">{author}</span>
        <div className="interactionSection">
          <span className="comments">Comments</span>
          <span className="remove-btn-span">
            <button
              type="button"
              onClick={() => {
                dispatch(removeBooks(id));
                dispatch(deleteBook(id));
              }}
              className="remove-btn"
            >
              Remove
            </button>
          </span>
          <span className="edit">Edit</span>
        </div>
      </div>
      <div className="progress">
        <img src={progress} width="90" height="90" alt="progress bar" />
        <div>
          <span className="percentage">64%</span>
          <span className="completed">Completed</span>
        </div>
      </div>
      <div className="line" />
      <div className="chapter">
        <p>CURRENT CHAPTER</p>
        <h2>Chapter 17</h2>
        <button type="button">UPDATE PROGRESS</button>
      </div>
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
