import React from "react";
import PropTypes from "prop-types";

const TableHeader = ({ onSort, selectedSort, columns }) => {
    const handleSort = (item) => {
        if (selectedSort.path === item) {
            onSort({
                ...selectedSort,
                order: selectedSort.order === "asc" ? "desc" : "asc"
            });
        } else {
            onSort({ path: item, order: "asc" });
        }
    };

    const createCaret = (item, order) => {
        if (selectedSort.path === item && order === "asc") {
            return "bi-caret-up-fill";
        } else if (selectedSort.path === item && order === "desc") {
            return "bi-caret-down-fill";
        } else {
            return "";
        }
    };

    return (
        <thead>
            <tr>
                {Object.keys(columns).map((column) => (
                    <th
                        key={column}
                        onClick={
                            columns[column].path
                                ? () => handleSort(columns[column].path)
                                : undefined
                        }
                        {...{ role: columns[column].path && "button" }}
                        scope="col"
                    >
                        {columns[column].name}
                        <i
                            className={`'m-2 bi ${
                                columns[column].path
                                    ? createCaret(
                                        columns[column].path,
                                        selectedSort.order
                                    )
                                    : undefined
                            }`}
                        ></i>
                    </th>
                ))}
            </tr>
        </thead>
    );
};

TableHeader.propTypes = {
    onSort: PropTypes.func.isRequired,
    selectedSort: PropTypes.object.isRequired,
    columns: PropTypes.object.isRequired
};

export default TableHeader;
