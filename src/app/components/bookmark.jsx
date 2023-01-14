import React from "react";
import PropTypes from "prop-types";

const BookMark = ({ status, onToggleBookMark, _id }) => {
    return (
        <button
            onClick={() => {
                onToggleBookMark(_id);
            }}
        >
            <span
                className={`bi bi-${
                    !status ? "bookmark" : "bookmark-star-fill"
                }`}
            ></span>
        </button>
    );
};

BookMark.propTypes = {
    status: PropTypes.bool.isRequired,
    onToggleBookMark: PropTypes.func.isRequired,
    _id: PropTypes.string.isRequired
};

export default BookMark;
