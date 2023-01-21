import React from "react";
import PropTypes from "prop-types";

const BookMark = ({ status, ...rest }) => {
    return (
        <button {...rest}>
            <i
                className={`bi bi-${
                    !status ? "bookmark" : "bookmark-star-fill"
                }`}
            ></i>
        </button>
    );
};

BookMark.propTypes = {
    status: PropTypes.bool.isRequired
};

export default BookMark;
