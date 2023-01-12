import React, { useState } from 'react';
import api from '../api'; // delete
import User from './user';

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll()); //delete

  const handleDelete = (userId) => {
    setUsers((prevState) => prevState.filter((user) => user._id !== userId));
  }; // delete
  const renderPhrase = (number) => {
    return number > 4 || number === 1
      ? number + ' человек тусанет с тобой сегодня'
      : number + ' человека тусанут с тобой сегодня';
  }; // delete, функция в файле searchStatus

  return (
    <>
      <h2>
        <span
          className={'badge ' + (users.length > 0 ? 'bg-primary' : 'bg-danger')}
        >
          {users.length > 0
            ? renderPhrase(users.length)
            : 'Никто с тобой не тусанет'}
        </span>
      </h2>
      {users.length > 0 && (
        <table className="table">
          <thead>
            <tr>
              <th>Имя</th>
              <th>Качества</th>
              <th>Профессия</th>
              <th>Встретился, раз</th>
              <th>Оценка</th>
              <th>Избранное</th>
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
                  <i class="bi bi-bookmark"></i>
                </td>
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
      )}
    </>
  );
};

export default Users;
