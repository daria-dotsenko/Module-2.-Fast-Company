import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import api from "../api/index";
import { useHistory } from "react-router-dom";

const UserPage = ({ id }) => {
    const [user, setUser] = useState();
    useEffect(() => {
        api.users.getById(id).then((data) => setUser(data));
    });

    const history = useHistory();
    const handleSave = () => {
        history.push("/users");
    };

    if (user) {
        return (
            <>
                <h1>{user.name}</h1>
                <h2>Профессия: {user.profession.name}</h2>
                {user.qualities.map((quality) => (
                    <div
                        key={quality._id}
                        className={`m-2 badge bg-${quality.color}`}
                    >
                        {quality.name}
                    </div>
                ))}
                <div>completedMeetings: {user.completedMeetings}</div>
                <h2>Rate: {user.rate}</h2>
                <button
                    onClick={() => {
                        handleSave();
                    }}
                >
                    Все пользователи
                </button>
            </>
        );
    }

    return <h1>Loading</h1>;
};

UserPage.propTypes = {
    users: PropTypes.array,
    id: PropTypes.string
};

export default UserPage;
