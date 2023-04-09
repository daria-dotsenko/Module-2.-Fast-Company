import React from "react";
import PropTypes from "prop-types";
import QualitiesList from "../../../ui/qualities";

const UserQuality = ({ qualities }) => {
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
                    <p className="card-text">
                        <QualitiesList qualities={qualities}/>
                    </p>
                </div>
            </div>
        </div>
    </>;
};

UserQuality.propTypes = {
    qualities: PropTypes.array.isRequired
};

export default UserQuality;
