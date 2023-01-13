import React from 'react';
import User from './user';

const Users = ({ users, ...rest }) => {
  return (
    <>
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
            <User {...rest} {...user} key={user._id} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Users;
