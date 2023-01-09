import React, { useState } from 'react';
import api from '../api';

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());

  return (
    <>
      <h2>
        <span className="badge bg-primary">
          <span className="bg-danger">n</span> человек тусит с тобой
        </span>
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
                <button className="btn btn-danger">delete</button>
                {/* onclick = {handleDelete(user._id)} */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );

  // код с видео

  const handleDelete = (userId) => {}; // setUsers и userId (в котором лежит user._id) удалять пользователя из массива
  // const renderPhrase = (number) => {// для количества юзеров (вывод сверху количества, потом динамически менять на надпись "никто не хочешь тусить с тобой");
  // };
};

export default Users;
