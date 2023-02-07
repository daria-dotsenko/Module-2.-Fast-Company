import React, { useState } from "react";
import TextField from "../components/textField";

const Login = () => {
    const [data, setData] = useState({ email: "", password: "" });

    const handleChange = ({ target }) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };
    return (
        <form action="">
            <TextField
                label="Email"
                type="text"
                name="email"
                value={data.email}
                onChange={handleChange}
            />
            <TextField
                label="Password"
                type="password"
                name="password"
                value={data.password}
                onChange={handleChange}
            />
        </form>
    );
};

export default Login;
