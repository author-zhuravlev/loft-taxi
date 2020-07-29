import React, { useState } from 'react';
import PropTypes from "prop-types";

import './registration.css';

export const FormRegistration = ({ register }) => {
    const [form, setForm] = useState({
        email: '',
        name: '',
        surname: '',
        password: ''
    });

    const changeValue = event => {
        event.persist();

        setForm(prevForm => ({
            ...prevForm,
            [event.target.name]: event.target.value
        }));
    };

    const submitHandler = event => {
        event.preventDefault();

        if (form.email.trim() && form.password.trim() && form.surname.trim() && form.name.trim()) {
            try {
                register(form);
            } catch (error) {
                console.error(error);
            }
        }
    };

    return (
        <div className="registration-form">
            <h1>
                Регистрация
            </h1>
            <div className="link-blcok">
                <span>
                    Уже зарегистрированы?
                </span>
                <a
                    href="/login"
                    className="link-log"
                >
                    Войти
                </a>
            </div>
            <form
                id="registration"
                onSubmit={submitHandler}
            >   
                <input
                    type="email"
                    name="email"
                    placeholder="Адрес электронной почты"
                    onChange={changeValue}
                />
                <div className="name-surname">
                    <input
                        type="text"
                        name="name"
                        id="user-name"
                        placeholder="Имя"
                        onChange={changeValue}
                    />
                    <input
                        type="text"
                        name="surname"
                        id="user-email"
                        placeholder="Фамилия"
                        onChange={changeValue}
                    />
                </div>
                <input
                    type="password"
                    name="password"
                    placeholder="Пароль"
                    onChange={changeValue}
                />
                <button
                    className="btn"
                    type="submit"
                >
                    Войти
                </button>
            </form>
        </div>
    );
};

FormRegistration.protoTypes = {
    register: PropTypes.func,
};