import React, { useState, useEffect } from "react";
import Users from "./components/users";
import api from "./api/index";

function App() {
    // const [users, setUsers] = useState(api.users.fetchAll());
    const [users, setUsers] = useState([]);
    useEffect(() => {
        api.users.fetchAll().then((data) => setUsers(data));
    }, []);

    const handleDelete = (id) => {
        setUsers((prevState) => prevState.filter((user) => user._id !== id));
    };

    const handleToggleBookMark = (id) => {
        setUsers((prevState) =>
            prevState.map((user) =>
                user._id === id ? { ...user, bookmark: !user.bookmark } : user
            )
        );
    };

    return (
        <>
            <div>
                <Users
                    users={users}
                    onDelete={handleDelete}
                    onToggleBookMark={handleToggleBookMark}
                />
            </div>
        </>
    );
}

export default App;
