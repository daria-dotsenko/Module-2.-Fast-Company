import React, { useState } from 'react';
import Users from './components/users';
import searchStatus from './components/searchStatus';
import api from './api';

function App() {
  const [users, setUsers] = useState(api.users.fetchAll());
  const handleDelete = (userId) => {
    setUsers((prevState) => prevState.filter((user) => user._id !== userId));
  };

  const handleToggleBookMark = (id) => {};

  return <div></div>;
}

export default App;
