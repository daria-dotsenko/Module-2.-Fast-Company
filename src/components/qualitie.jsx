import React from 'react';

const Qualitie = ({ color, name, _id }) => {
  <span key={_id} className={'badge m-1 bg-' + color}>
    {name}
  </span>;
};

export default Qualitie;
