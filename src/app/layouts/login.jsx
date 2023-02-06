import React from "react";

const Login = () => {
    return (
        <form action="">
            <div>
                <label htmlFor="">Email</label>
                <input type="text" id="email" />
            </div>
            <div>
                <label htmlFor="">Password</label>
                <input type="password" id="password" />
            </div>
        </form>
    );
};

export default Login;
