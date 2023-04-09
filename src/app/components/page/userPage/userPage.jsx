import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import api from "../../../api";
import UserCard from "./userComponents/userCard";
import Comments from "./Comments/comments";

const UserPage = ({ id }) => {
    const [user, setUser] = useState();
    useEffect(() => {
        api.users.getById(id).then((data) => setUser(data));
    }, []);
    const handleRate = (act) => {
        const currentRate = Number(user.rate);
        const newRate = act !== undefined ? act === "add" ? currentRate + 0.1 : currentRate - 0.1 : null;
        if (newRate) {
            const updatedUser = { ...user, rate: newRate.toFixed(1) };
            api.users.update(id, updatedUser)
                .then(() => setUser(updatedUser));
        }
    };

    if (user) {
        return (
            <>
                <div className="container">
                    <div className="row gutters-sm">
                        <UserCard user={user} handleRate={handleRate}/>
                        <div className="col-md-8">
                            <Comments/>
                        </div>
                    </div>
                </div>
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
