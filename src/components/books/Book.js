import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ title, author }) => (
  <>
    <h2>{title}</h2>
    <p>{author}</p>
  </>
);
Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
const Book1 = () => (
  <>
  </>
);

export default Book1;