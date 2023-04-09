import React, { useEffect, useState } from "react";
import UserImage from "../userComponents/userImage";
import api from "../../../../api";
import displayDate from "../../../../utils/displayDate";
import PropTypes from "prop-types";

const Comment = ({ content, edited_at: edited, created_at: creadted, _id: id, userId, onRemove }) => {
    const [user, setUser] = useState();
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        setIsLoading(true);
        api.users.getById(userId).then((data) => {
            setUser(data);
            setIsLoading(false);
        });
    }, []);

    return (
        <div className="bg-light card-body mb-3">
            <div className="row">
                {isLoading ? ("Loading...") : (<div className="col">
                    <div className="d-flex flex-start">
                        <UserImage/>
                        <div className="flex-grow-1 flex-shrink-1">
                            <div className="mb-4">
                                <div className="d-flex justify-content-between align-items-center">
                                    <p className="mb-1">{user && user.name}
                                        <span className="m-1 small">{`- ${displayDate(edited || creadted)}`}</span>
                                    </p>
                                    <button onClick={() => { onRemove(id); }} className="btn btn-sm text-primary d-flex align-items-center">
                                        <i className="bi bi-x-lg"></i>
                                    </button>
                                </div>
                                <p className="small mb-0">
                                    {content}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>)}
            </div>
        </div>
    );
};

Comment.propTypes = {
    content: PropTypes.string.isRequired,
    edited_at: PropTypes.string,
    created_at: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    _id: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
    onRemove: PropTypes.func.isRequired
};

export default Comment;
