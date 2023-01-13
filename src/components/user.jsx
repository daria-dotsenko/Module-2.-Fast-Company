import React from 'react';
import Qualitie from './qualitie';
import BookMark from './bookmark';

const User = (props) => {
  return (
    <tr>
      <td>{props.name}</td>
      <td>
        {props.qualities.map((item) => (
          <Qualitie {...item} key={item._id} />
        ))}
      </td>
      <td>{props.profession.name}</td>
      <td>{props.completedMeetings}</td>
      <td>{props.rate}/5</td>
      <td>
        <button onClick={() => props.onToggleBookMark(props._id)}>
          <BookMark status={props.bookmark} />
        </button>
      </td>
      <td>
        <button
          className="btn btn-danger"
          onClick={() => props.onDelete(props._id)}
        >
          delete
        </button>
      </td>
    </tr>
  );
};

export default User;
