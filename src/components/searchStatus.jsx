import React from 'react';

const searchStatus = ({ length }) => {
  return length > 4 || length === 1
    ? length + ' человек тусанет с тобой сегодня'
    : length + ' человека тусанут с тобой сегодня';
};

export default searchStatus;
