import React from "react";
import UserImage from "../userComponents/userImage";
import PropTypes from "prop-types";

const Comment = ({ comments, userId, users, timeOfComment }) => {
    if (comments) {
        return <>
            <h2>Comments</h2>
            <hr/>
            {Object.values(comments).map((comment) => (
                userId === comment.pageId
                    ? <div key={comment._id} className="bg-light card-body mb-3">
                        <div className="row">
                            <div className="col">
                                <div className="d-flex flex-start">
                                    <UserImage/>
                                    <div
                                        className="
                                                    flex-grow-1 flex-shrink-1
                                                "
                                    >
                                        <div className="mb-4">
                                            {Object.values(users).map((user) => (
                                                user._id === comment.userId
                                                    ? <div key={user._id}>
                                                        <div
                                                            className="
                                                            d-flex
                                                            justify-content-between
                                                            align-items-center
                                                        "
                                                        ><p className="mb-1">{user.name}
                                                                <span className="m-1 small">{timeOfComment(comment)}</span></p>
                                                            <button
                                                                className="
                                                                btn btn-sm
                                                                text-primary
                                                                d-flex
                                                                align-items-center
                                                            "
                                                            >
                                                                <i
                                                                    className="
                                                                    bi bi-x-lg
                                                                "
                                                                ></i>
                                                            </button>
                                                        </div>
                                                        <p className="small mb-0">
                                                            {comment.content}
                                                        </p>
                                                    </div>
                                                    : ""
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    : ""
            ))}
        </>;
    };
};

Comment.propTypes = {
    comments: PropTypes.array.isRequired,
    userId: PropTypes.string.isRequired,
    users: PropTypes.array.isRequired,
    timeOfComment: PropTypes.func.isRequired
};

export default Comment;
