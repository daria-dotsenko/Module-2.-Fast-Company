import React, { useEffect, useState } from "react";
// import { validator } from "../../utils/validator";
import TextField from "../common/form/textField";
import CheckBoxField from "../common/form/checkBoxField";
import * as yup from "yup";

const LoginForm = () => {
    const [data, setData] = useState({ email: "", password: "", stayOn: false });
    const [errors, setErrors] = useState({});
    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };
    const validateScheme = yup.object().shape({
        password: yup
            .string()
            .required("Пароль обязателен для заполнения")
            .matches(/^(?=.*[A-Z])/, "Пароль должен содержать хотя бы одну заглавную букву")
            .matches(/(?=.*[0-9])/, "Пароль должен содержать хотя бы одно число")
            .matches(/(?=.*[!@*#$%^&])/, "Пароль должен содержать один из специальниых символов - !, @, *, #, $, %, ^, &")
            .matches(/(?=.{8,})/, "Пароль должен состоять минимум из восьми символов"),
        email: yup.string().required("Электронная почта обязательна для заполнения").email("Электронная почта введена некорректно")
    });

    // const validatorConfig = {
    //     email: {
    //         isRequared: {
    //             message: "Электронная почта обязательна для заполнения"
    //         },
    //         isEmail: { message: "Электронная почта введена некорректно" }
    //     },
    //     password: {
    //         isRequared: {
    //             message: "Пароль обязателен для заполнения"
    //         },
    //         isCapitalSymbol: { message: "Пароль должен содержать хотя бы одну заглавную букву" },
    //         isContainDigit: { message: "Пароль должен содержать хотя бы одно число" },
    //         min: { message: "Пароль должен состоять минимум из восьми символов", value: 8 }
    //     }
    // };

    useEffect(() => {
        validate();
    }, [data]);

    const validate = () => {
        // const errors = validator(data, validatorConfig);
        validateScheme.validate(data).then(() => setErrors({})).catch((error) => setErrors({ [error.path]: error.message }));
        // setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const isValid = Object.keys(errors).length === 0;

    const handeSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        console.log(data);
    };

    return (
        <form onSubmit={handeSubmit}>
            <TextField
                label="Email"
                type="text"
                name="email"
                value={data.email}
                onChange={handleChange}
                error={errors.email}
            />
            <TextField
                label="Password"
                type="password"
                name="password"
                value={data.password}
                onChange={handleChange}
                error={errors.password}
            />
            <CheckBoxField
                value={data.stayOn}
                onChange={handleChange}
                name="stayOn"
            >Оставаться в системе</CheckBoxField>
            <button type="submit" disabled={!isValid} className="btn btn-primary w-100 mx-auto">Submit</button>
        </form>
    );
};

export default LoginForm;
