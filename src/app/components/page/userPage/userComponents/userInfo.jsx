import React from "react";
import UserImage from "./userImage";
import UserQuality from "./userQuality";
import UserMeetings from "./userMeetings";
import PropTypes from "prop-types";

const UserInfo = ({ user, handleSave }) => {
    return <>
        <div className="col-md-4 mb-3">
            <div className="card mb-3">
                <div className="card-body">
                    <button
                        onClick={() => {
                            handleSave();
                        }}
                        className="position-absolute top-0 end-0 btn btn-light btn-sm"
                    >
                        <i className="bi bi-gear"></i>
                    </button>
                    <div
                        className="
                                    d-flex
                                    flex-column
                                    align-items-center
                                    text-center
                                    position-relative
                                "
                    >

                        <div className="mt-3">
                            <UserImage/>
                            <div className="mt-3">
                                <h4>{user.name}</h4>
                                <p className="text-secondary mb-1">{user.profession.name}</p>
                                <div className="text-muted">
                                    <i
                                        className="
                                                bi bi-caret-down-fill
                                                text-primary
                                            "
                                        role="button"
                                    ></i>
                                    <i
                                        className="
                                                bi bi-caret-up
                                                text-secondary
                                            "
                                        role="button"
                                    ></i>
                                    <span className="ms-2">{user.rate}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <UserQuality user={user}/>
            <UserMeetings user={user}/>
        </div>
    </>;
};

UserInfo.propTypes = {
    user: PropTypes.object.isRequired,
    handleSave: PropTypes.func.isRequired
};

export default UserInfo;
