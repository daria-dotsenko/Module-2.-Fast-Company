import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import api from "../../../api";
import { useHistory } from "react-router-dom";
import UserInfo from "./userComponents/userInfo";
import Comments from "./Comments/comments";
import NewComment from "./Comments/newComment";

const UserPage = ({ id }) => {
    const [user, setUser] = useState();
    useEffect(() => {
        api.users.getById(id).then((data) => setUser(data));
    }, []);
    // console.log(user);

    const history = useHistory();
    const handleSave = () => {
        history.push(`/users/${id}/edit`);
    };

    const handleRate = (act) => {
        // console.log(act);
        const currentRate = Number(user.rate);
        const newRate = act !== undefined ? act === "add" ? currentRate + 0.1 : currentRate - 0.1 : null;
        // console.log("newRate", newRate);
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
                        <UserInfo user={user} handleSave={handleSave} handleRate={handleRate}/>
                        <div className="col-md-8">
                            <NewComment/>
                            <Comments userId={id}/>
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
