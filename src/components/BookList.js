// import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';

const BookList = () => {
  const { books } = useSelector((store) => store.books);
  return (
    <div>
      {books.map((book) => (
        <Book
          key={book.author}
          id={book.item_id}
          title={book.title}
          author={book.author}
          category={book.category}
        />
      ))}
    </div>
  );
};

// BookList.propTypes = {
//   books: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       title: PropTypes.string.isRequired,
//       author: PropTypes.string.isRequired,
//     }),
//   ).isRequired,
//   onDelete: PropTypes.func.isRequired,
// };

export default BookList;
