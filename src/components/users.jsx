import React, { useState } from 'react';
import api from '../api';

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());

  const handleDelete = (userId) => {
    setUsers((prevState) => prevState.filter((user) => user._id !== userId));
  };
  const renderPhrase = (number) => {
    return number > 4 || number === 1
      ? number + ' человек тусанет с тобой сегодня'
      : number + ' человека тусанут с тобой сегодня';
  };

  if (users.length === 0) {
    return (
      <h2>
        <div className="badge bg-danger">Никто с тобой не тусанет</div>
      </h2>
    );
  }

  return (
    <>
      <h2>
        <span className="badge bg-primary">{renderPhrase(users.length)}</span>
      </h2>
      <table className="table">
        <thead>
          <tr>
            <th>Имя</th>
            <th>Качества</th>
            <th>Профессия</th>
            <th>Встретился, раз</th>
            <th>Оценка</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>
                {user.qualities.map((quality) => (
                  <span
                    key={quality._id}
                    className={'badge m-1 bg-' + quality.color}
                  >
                    {quality.name}
                  </span>
                ))}
              </td>
              <td>{user.profession.name}</td>
              <td>{user.completedMeetings}</td>
              <td>{user.rate}/5</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(user._id)}
                >
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Users;
