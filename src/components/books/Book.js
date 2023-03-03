import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { apiRemoveBook } from '../../redux/books/booksSlice';

const Book = ({
  id, title, author,
}) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(apiRemoveBook(id));
  };

  return (
    <div className="booksConta">
      <div className="book">
        <p>Drama</p>
        <h2>{title}</h2>
        <h3>{author}</h3>
        <div className="funcButton">
          <button type="button" className="delButton">
            Comments
          </button>
          <div className="Line-2" />
          <button type="button" onClick={handleClick} className="delButton">
            Remove
          </button>
          <div className="Line-2" />
          <button type="button" className="delButton">
            Edit
          </button>
        </div>
      </div>
      <div className="progress">
        <div className="circle-wrap">
          <div className="circle">
            <div className="mask half">
              <div className="fill" />
            </div>

            <div className="mask full">
              <div className="fill" />
            </div>
            <div className="inside-circle" />
          </div>
        </div>
        <div className="prcg">
          <h5>75%</h5>
          <h6>Completed</h6>
        </div>
        <div className="Line-3" />
        <div className="chapter">
          <h3>CURRENT CHAPTER</h3>
          <h4>Final Chapter</h4>
          <button type="button">UPDATE PROGRESS</button>
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
