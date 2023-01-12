import React, { useState } from 'react';
import Users from './components/users';
import SearchStatus from './components/searchStatus';
import api from './api';

function App() {
  const [users, setUsers] = useState(api.users.fetchAll());

  const handleDelete = (userId) => {
    setUsers((prevState) => prevState.filter((user) => user._id !== userId));
  };

  const handleToggleBookMark = (id) => {
    console.log(id);
  };

  return (
    <div>
      <SearchStatus {...users.length} />
      <Users
        {...users}
        onDelete={handleDelete}
        onToggleBM={handleToggleBookMark}
      />
    </div>
  );
}

export default App;
