import React from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { checkStatus } from '../../redux/categories/categoriesSlice';

const Categories = () => {
  const dispatch = useDispatch();
  const handleStatus = () => {
    dispatch(checkStatus());
  };

  return (
    <>
      <button type="button" onClick={handleStatus}>Check status</button>
    </>
  );
};

export default Categories;
