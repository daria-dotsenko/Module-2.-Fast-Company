import React from "react";
import UserPage from "../components/page/userPage";
import UsersListPage from "../components/page/usersListPage";
import { useParams } from "react-router-dom";
import EditUserPage from "../components/page/editUserPage";
import UserProvider from "../hooks/useUsers";

const Users = () => {
    const params = useParams();
    const { userId, edit } = params;

    return (
        <>
            <UserProvider>
                {userId
                    ? (edit ? (<EditUserPage id={userId}/>) : (<UserPage id={userId} />)) : (<UsersListPage/>)}
            </UserProvider>
        </>
    );
};

export default Users;
