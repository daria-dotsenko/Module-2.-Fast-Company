import React, { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState("");
    const handleChange = (e) => {
        setEmail(e.target.value);
        console.log(e.target.value);
    };
    return (
        <form action="">
            <div>
                <label htmlFor="">Email</label>
                <input
                    type="text"
                    id="email"
                    value={email}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" />
            </div>
        </form>
    );
};

export default Login;
