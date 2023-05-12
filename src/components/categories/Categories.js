import React from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { checkStatus } from '../../redux/categories/categoriesSlice';
import '../../style/Categories.css';

const Categories = () => {
  const dispatch = useDispatch();
  const handleStatus = () => {
    dispatch(checkStatus());
  };

  const status = useSelector((state) => state.checkStatus);
  return (
    <div className="categories">
      <button type="button" onClick={handleStatus}>CHECK STATUS</button>
      <p>{status}</p>
      <div className="lds-dual-ring" />
    </div>
  );
};

export default Categories;
