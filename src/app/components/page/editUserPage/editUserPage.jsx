import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { validator } from "../../../utils/validator";
import api from "../../../api";
import TextField from "../../common/form/textField";
import SelectField from "../../common/form/selectField";
import RadioField from "../../common/form/radioField";
import MultiSelectField from "../../common/form/multiSelectField";
import PropTypes from "prop-types";

const EditUserPage = ({ id }) => {
    const [user, setUser] = useState();
    const [qualities, setQualities] = useState([]);
    const [professions, setProfessions] = useState();
    const [errors, setErrors] = useState({});
    useEffect(() => {
        api.professions.fetchAll().then((data) => {
            const professionsList = Object.keys(data).map((professionName) => ({
                label: data[professionName].name,
                value: data[professionName]._id
            }));
            setProfessions(professionsList);
        });
        api.qualities.fetchAll().then((data) => {
            const qualitiesList = Object.keys(data).map((optionName) => ({
                label: data[optionName].name,
                value: data[optionName]._id,
                color: data[optionName].color
            }));
            setQualities(qualitiesList);
        });
        api.users.getById(id).then((data) => {
            setUser({
                ...data,
                profession: data.profession._id,
                qualities: transform(data.qualities)
            });
        });
    }, []);

    function transform(data) {
        return data.map((item) => ({
            label: item.name,
            value: item._id,
            color: item.color
        }));
    }

    const getProfessionById = (id) => {
        for (const prof of professions) {
            if (prof.value === id) {
                return { _id: prof.value, name: prof.label };
            }
        }
    };
    const getQualities = (qualitiesList) => {
        return qualitiesList.map((qual) => ({
            _id: qual.value,
            name: qual.label,
            color: qual.color
        }));
    };

    const validatorConfig = {
        email: {
            isRequired: {
                message: "Электронная почта обязательна для заполнения"
            },
            isEmail: {
                message: "Email введен некорректно"
            }
        },
        name: {
            isRequired: {
                message: "Введите ваше имя"
            }
        }
    };
    useEffect(() => {
        validate();
    }, [user]);

    const validate = () => {
        const errors = validator(user, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };
    const isValid = Object.keys(errors).length === 0;

    const history = useHistory();
    const handleSave = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        api.users
            .update(id, {
                ...user,
                profession: getProfessionById(user.profession),
                qualities: getQualities(user.qualities)
            })
            .then(() => {
                history.push(`/users/${id}`);
            });
    };

    const handleChange = (target) => {
        setUser((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };

    if (user && professions) {
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 offset-md-3 shadow p-4">
                        <form onSubmit={handleSave}>
                            <TextField
                                label="Имя"
                                type="text"
                                name="name"
                                value={user.name}
                                onChange={handleChange}
                                error={errors.name}
                            />
                            <TextField
                                label="Email"
                                type="text"
                                name="email"
                                value={user.email}
                                onChange={handleChange}
                                error={errors.email}
                            />
                            <SelectField
                                label="Выберите вашу профессию"
                                name="profession"
                                options={professions}
                                onChange={handleChange}
                                value={user.profession}
                                error={errors.profession}
                            />
                            <RadioField
                                options={[{ name: "Male", value: "male" }, { name: "Female", value: "female" }, {
                                    name: "Other",
                                    value: "other"
                                }]}
                                value={user.sex}
                                name="sex"
                                onChange={handleChange}
                                label="Выберите ваш пол"
                            />
                            <MultiSelectField
                                options={qualities}
                                onChange={handleChange}
                                defaultValue={user.qualities}
                                name="qualities"
                                label="Выберите ваши качества"
                            />
                            <button type="submit" disabled={!isValid} className="btn btn-primary w-100 mx-auto">Обновить
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

    return <h1>Loading</h1>;
};

EditUserPage.propTypes = {
    id: PropTypes.string.isRequired
};

export default EditUserPage;
