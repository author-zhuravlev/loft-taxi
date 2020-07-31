import React, { useState } from 'react';
import PropTypes from "prop-types";
import { useForm } from 'react-hook-form';

import './registration.css';

export const FormRegistration = ({ registation }) => {
    const [form, setForm] = useState({
        email: '',
        name: '',
        surname: '',
        password: ''
    });

    const { register, handleSubmit, errors } = useForm();

    const changeValue = event => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        });
    };

    const submitHandler = form => {
        if (form.email.trim() && form.password.trim() && form.surname.trim() && form.name.trim()) {
            try {
                registation(form);
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
                onSubmit={handleSubmit(submitHandler)}
            >   
                <input
                    type="email"
                    name="email"
                    placeholder="Адрес электронной почты"
                    onChange={changeValue}
                    ref={register({ required: true,  pattern: /.+@.+\..+/i })}
                />
                {errors.email && errors.email.type === 'required' && (
                    <p className="error">Введите email</p>
                )}
                <div className="name-surname">
                    <div className="name">
                        <input
                            type="text"
                            name="name"
                            id="user-name"
                            placeholder="Имя"
                            onChange={changeValue}
                            ref={register({ required: true, minLength: 2 })}
                        />
                        {errors.name && errors.name.type === 'required' && (
                            <p className="error">Введите имя</p>
                        )}
                        {errors.name && errors.name.type === 'minLength' && (
                            <p className="error">Значение должно быть больше 2 символов</p>
                        )}
                    </div>
                    <div className="surname">
                        <input
                            type="text"
                            name="surname"
                            id="user-email"
                            placeholder="Фамилия"
                            onChange={changeValue}
                            ref={register({ required: true, minLength: 3 })}
                        />
                        {errors.surname && errors.surname.type === 'required' && (
                            <p className="error">Введите фамилию</p>
                        )}
                        {errors.surname && errors.surname.type === 'minLength' && (
                            <p className="error">Значение должно быть больше 3 символов</p>
                        )}
                    </div>
                </div>
                <input
                    type="password"
                    name="password"
                    placeholder="Пароль"
                    onChange={changeValue}
                    ref={register({ required: true, minLength: 6 })}
                />
                {errors.password && errors.password.type === 'required' && (
                    <p className="error">Введите пароль</p>
                )}
                {errors.password && errors.password.type === 'minLength' && (
                    <p className="error">Значение должно быть больше 6 символов</p>
                )}
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