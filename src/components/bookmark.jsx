import React from 'react';

const BookMark = ({ status }) => {
  return (
    <span
      className={`bi bi-${!status ? 'bookmark' : 'bookmark-star-fill'}`}
    ></span>
  );
};

export default BookMark;
