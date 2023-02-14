import React from "react";
import PropTypes from "prop-types";

const Search = ({ searchValue, setSearchValue }) => {
    return <>
        <div className="input-group mb-2 mt-2">
            <input type="text" className="form-control" placeholder="Search..." value={searchValue}
                onChange={(event) => setSearchValue(event.target.value)}/>
        </div>
    </>;
};

Search.propTypes = {
    searchValue: PropTypes.string,
    setSearchValue: PropTypes.func
};

export default Search;
