import React, { useState, useEffect } from "react";
import api from "../api/index";
import PropTypes from "prop-types";
import UserPage from "../components/page/userPage";
import UsersListPage from "../components/page/usersListPage";
import { useParams } from "react-router-dom";

const Users = () => {
    const [users, setUsers] = useState();
    useEffect(() => {
        api.users.fetchAll().then((data) => setUsers(data));
    }, []);

    const params = useParams();
    const { userId } = params;

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
            {userId
                ? (
                    <UserPage id={userId} />
                )
                : (
                    <UsersListPage
                        users={users}
                        handleDelete={handleDelete}
                        handleToggleBookMark={handleToggleBookMark}
                    />
                )}
        </>
    );
};
Users.propTypes = {
    users: PropTypes.array,
    location: PropTypes.object
};

export default Users;
