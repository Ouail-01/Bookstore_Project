import React from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { checkStatus } from '../../redux/categories/categoriesSlice';

const Categories = () => {
  const dispatch = useDispatch();
  const handleStatus = () => {
    dispatch(checkStatus());
  };

  const status = useSelector((state) => state.checkStatus);
  return (
    <>
      <button type="button" onClick={handleStatus}>Check status</button>
      <p>{status}</p>
    </>
  );
};

export default Categories;
