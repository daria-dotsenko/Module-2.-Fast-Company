import React, { useState } from 'react';
import api from '../api';

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());

  const createName = () =>
    users.map((user) => <td key={user._id}>{user.name}</td>);

  let newArray = [];
  // user.qualities.forEach((elem) => console.log(elem))
  let qualitiesId = 0;

  const createRow = () =>
    users.map((user) =>
      user.qualities.map((quality) => (
        <tr>
          <td key={user._id}>{user.name}</td>
          <td key={qualitiesId + 1}>
            <div className={'badge bg-' + quality.color}>{quality.name}</div>
          </td>
          <td key={user.profession._id}>{user.profession.name}</td>
          <td key={user.completedMeetings}>{user.completedMeetings}</td>
          <td key={user.rate}>{user.rate}/5</td>
          <td>
            <button className="btn btn-danger">delete</button>
          </td>
        </tr>
      ))
    );
  // неправильно перебирается, изначально качества идут сплошным списком, а не отдельными массивами

  // const createQualities = () =>
  //   users.map((user) => {
  //     user.qualities.map((quality) => {
  //       <td key={quality._id}>{quality.name}</td>;
  //     });
  //   });

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
            <th scope="col">Имя</th>
            <th scope="col">Качества</th>
            <th scope="col">Профессия</th>
            <th scope="col">Встретился, раз</th>
            <th scope="col">Оценка</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>{createRow()}</tbody>
      </table>
    </>
  );

  // код с видео

  // const hadleDelete = (userId) => {
  // };
  // const renderPhrase = (number) => {// для количества юзеров;;
  // };
  // return (
  //     <></>
  // );
};

export default Users;
