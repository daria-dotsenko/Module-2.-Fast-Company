import React from 'react';
import Qualitie from './qualitie';
import BookMark from './bookmark';

const User = (
  _id,
  name,
  profession,
  qualities,
  completedMeetings,
  rate,
  bookmark
) => {
  <tr>
    <td>{name}</td>
    <td>
      <Qualitie {...qualities} />
    </td>
    <td>{profession.name}</td>
    <td>{completedMeetings}</td>
    <td>{rate}/5</td>
    <td>
      <i
        className="bi bi-bookmark"
        onClick={() => <BookMark {...bookmark} />}
      ></i>
    </td>
    <td>
      <button className="btn btn-danger">
        {/* onClick={() => handleDelete(_id)} */}
        delete
      </button>
    </td>
  </tr>;
}; // передаем свойства

export default User;
