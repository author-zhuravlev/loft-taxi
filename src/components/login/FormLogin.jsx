import React, { useState } from "react";
import PropTypes from "prop-types";
import { useForm } from 'react-hook-form';

export const FormLogin = ({ logIn }) => {
    const [form, setForm] = useState({
        email: "",
        password: ""
    });

    const { register, handleSubmit, errors } = useForm();

    const changeValue = event => {
        setForm({
            ...form,
            [event.target.name]: event.target.value,
        });
    };

    const submitHandler = form => {
        if (form.email.trim() && form.password.trim()) {
            try {
                logIn(form);
            } catch (error) {
                console.error(error);
            }
        }
    };

    return (
        <div className="login-form">
            <h1>Войти</h1>
            <div className="link-blcok">
                <span>Новый пользователь?</span>
                <span>
                    <a href = "/registration"
                        className="link-reg"
                    >
                        Зарегистрируйтесь
                    </a>
                </span>
            </div>
            <form
                id="login"
                onSubmit={handleSubmit(submitHandler)}
            >   
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={changeValue}
                    ref={register({ required: true, pattern: /.+@.+\..+/i })}
                />
                {errors.email && errors.email.type === 'required' && (
                    <p className="error">Введите email</p>
                )}
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

FormLogin.protoTypes = {
    logIn: PropTypes.func,
};