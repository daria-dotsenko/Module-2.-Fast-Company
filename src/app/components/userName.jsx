import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const UserName = ({ name, id }) => {
    return (
        <Link key={id} to={`users/${id}`}>
            {name}
        </Link>
    );
};

UserName.propTypes = {
    name: PropTypes.string,
    id: PropTypes.string
};

export default UserName;
