import React, { useState, useEffect } from "react";
import { paginate } from "../utils/paginate";
import Pagination from "../components/pagination";
import GroupList from "../components/groupList";
import SearchStatus from "../components/searchStatus";
import UserTable from "../components/usersTable";
import api from "../api/index";
import _ from "lodash";
import PropTypes from "prop-types";
import Search from "./search";

const UsersList = ({ users, handleDelete, handleToggleBookMark }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [professions, setProfessions] = useState();
    const [selectedProf, setSelectedProf] = useState();
    const [searchValue, setSearchValue] = useState("");
    const [sortBy, setSortBy] = useState({ path: "name", order: "asc" });
    const pageSize = 8;

    useEffect(() => {
        api.professions.fetchAll().then((data) => setProfessions(data));
    }, []);
    useEffect(() => {
        setCurrentPage(1);
    }, [selectedProf]);
    useEffect(() => {
        setSearchValue("");
    }, [selectedProf]);
    const handleProfessionSelect = (item) => {
        setSelectedProf(item);
    };
    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };
    const handleSort = (item) => {
        setSortBy(item);
    };

    const handleUserSearch = (targetValue) => {
        setSearchValue(targetValue);
    };

    if (users) {
        let filteredUsers = selectedProf
            ? users.filter((user) => _.isEqual(user.profession, selectedProf))
            : users;
        if (searchValue) {
            filteredUsers = users.filter((user) => user.name.toLowerCase().includes(searchValue.toLowerCase()));
        }
        const sortedUsers = _.orderBy(
            filteredUsers,
            [sortBy.path],
            [sortBy.order]
        );
        const usersCrop = paginate(sortedUsers, currentPage, pageSize);
        const count = filteredUsers.length;
        const clearFilter = () => {
            setSelectedProf();
        };

        return (
            <div className="d-flex">
                {professions && (
                    <div className="d-flex flex-column flex-shrink-0 p-3">
                        <GroupList
                            selectedItem={selectedProf}
                            items={professions}
                            searchValue={searchValue}
                            onItemSelect={handleProfessionSelect}
                        />
                        <button
                            className="btn btn-secondary mt-2"
                            onClick={clearFilter}
                        >
                            Очистить
                        </button>
                    </div>
                )}
                <div className="d-flex flex-column">
                    <SearchStatus length={count} />
                    <Search searchValue={searchValue} setSearchValue={handleUserSearch}/>
                    {count > 0 && (
                        <UserTable
                            users={usersCrop}
                            selectedSort={sortBy}
                            onSort={handleSort}
                            onDelete={handleDelete}
                            onToggleBookMark={handleToggleBookMark}
                        />
                    )}
                    <div className="d-flex justify-content-center">
                        <Pagination
                            itemsCount={count}
                            pageSize={pageSize}
                            currentPage={currentPage}
                            onPageChange={handlePageChange}
                        />
                    </div>
                </div>
            </div>
        );
    }
    return "loading...";
};

UsersList.propTypes = {
    users: PropTypes.array,
    handleDelete: PropTypes.func,
    handleToggleBookMark: PropTypes.func
};

export default UsersList;
