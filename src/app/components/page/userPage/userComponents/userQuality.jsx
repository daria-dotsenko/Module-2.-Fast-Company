import React from "react";
import PropTypes from "prop-types";

const UserQuality = ({ user }) => {
    return <>
        <div className="card mb-3">
            <div className="card-body">
                <div
                    className="
                                    d-flex
                                    flex-column
                                    align-items-center
                                    text-center
                                    position-relative
                                "
                >
                    <h5 className="card-title">
                        <span>Qualities</span>
                    </h5>
                    {user.qualities.map((quality) => (
                        <p key={quality._id} className="card-text">
                            <span
                                key={quality._id}
                                className={`badge bg-${quality.color}`}
                            >
                                {quality.name}
                            </span>
                        </p>
                    ))}
                </div>
            </div>
        </div>
    </>;
};

UserQuality.propTypes = {
    user: PropTypes.object.isRequired
};

export default UserQuality;
