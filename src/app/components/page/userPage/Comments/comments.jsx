import React, { useEffect, useState } from "react";
import api from "../../../../api";
import UserImage from "../userComponents/userImage";
import PropTypes from "prop-types";

const Comments = ({ userId }) => {
    const [comments, setComments] = useState();
    useEffect(() => {
        api.comments.fetchAll().then((comments) => setComments(comments));
    }, []);
    // console.log("comments", comments);
    const users = JSON.parse(localStorage.getItem("users"));

    return <>
        {comments && <div className="card mb-3">
            <div className="card-body">
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
                                                                    <span className="m-1 small">- 5 минут назад
                                                                    </span></p>
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
            </div>
        </div>}
    </>;
};

Comments.propTypes = {
    userId: PropTypes.string.isRequired
};

export default Comments;
