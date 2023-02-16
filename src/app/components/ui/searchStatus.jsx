import React from "react";

const searchStatus = ({ length }) => {
    return (
        <h2>
            <span
                className={"badge " + (length > 0 ? "bg-primary" : "bg-danger")}
            >
                {length > 0
                    ? length > 4 || length === 1
                        ? length + " человек тусанет с тобой сегодня"
                        : length + " человека тусанут с тобой сегодня"
                    : "Никто с тобой не тусанет"}
            </span>
        </h2>
    );
};

export default searchStatus;
