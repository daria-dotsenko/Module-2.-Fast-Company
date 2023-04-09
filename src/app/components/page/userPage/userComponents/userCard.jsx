import React from "react";
import UserImage from "./userImage";
import UserQuality from "./userQuality";
import UserMeetings from "./userMeetings";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

const UserCard = ({ user, handleRate }) => {
    const history = useHistory();
    const handleSave = () => {
        history.push(`/users/${user._id}/edit`);
    };
    const handleAddRate = () => {
        handleRate("add");
    };

    const handleTakeRate = () => {
        handleRate("take");
    };
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
                                    <i onClick={handleTakeRate}
                                        className="
                                                bi bi-caret-down-fill
                                                text-primary
                                            "
                                        role="button"
                                    ></i>
                                    <i onClick={handleAddRate}
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
            <UserQuality qualities={user.qualities}/>
            <UserMeetings completedMeetings={user.completedMeetings}/>
        </div>
    </>;
};

UserCard.propTypes = {
    user: PropTypes.object.isRequired,
    handleRate: PropTypes.func.isRequired
};

export default UserCard;
