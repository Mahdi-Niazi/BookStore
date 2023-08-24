// import React from 'react';

// const Categories = () => (
//   <div>
//
//   </div>
// );

// export default Categories;

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkState } from '../redux/categories/categoriesSlice';
import Navigation from '../components/Navigation';

const Categories = () => {
  const { categories } = useSelector((store) => store.categories);
  const dispatch = useDispatch();
  return (
    <>
      <Navigation />
      <div>
        <h3>Categories </h3>
        <button type="button" onClick={() => dispatch(checkState())}>
          Check Status
        </button>
        <h1>{categories.length > 0 ? categories[0] : ''}</h1>
      </div>
    </>
  );
};

export default Categories;
