import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import api from "../../../api";
import { useHistory } from "react-router-dom";
import UserInfo from "./userComponents/userInfo";
import Comments from "./Comments/comments";
import NewComment from "./Comments/newComment";

const UserPage = ({ id }) => {
    const [users, setUsers] = useState();
    useEffect(() => {
        api.users.fetchAll().then((data) => setUsers(data));
    }, []);
    const [user, setUser] = useState();
    useEffect(() => {
        api.users.getById(id).then((data) => setUser(data));
    }, []);

    const history = useHistory();
    const handleSave = () => {
        history.push(`/users/${id}/edit`);
    };

    if (user && users) {
        return (
            <>
                <div className="container">
                    <div className="row gutters-sm">
                        <UserInfo user={user} handleSave={handleSave}/>
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
