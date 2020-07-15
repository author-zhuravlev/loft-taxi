import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Input from '../shared/input/Input';

const FormLogin = ({ logIn }) => {
    const [form, setForm] = useState({
        email: '',
        password: ''
    });

    const autoLogin = async () => {
        const data = JSON.parse(localStorage.getItem('userToken'));

        if (data && data.token) {
            try {
                await logIn(data.user);
            } catch (error) {
                console.error(error);
            }
        }
    };
    autoLogin(); // сразу вызываем
    
    const changeValue = event => {
        event.persist();
        
        setForm(prevForm => ({
            ...prevForm,
            [event.target.name]: event.target.value
        }));
    };

    const submitHandler = async event => {
        event.preventDefault();

        if (form.email.trim() && form.email.trim()) {
            try {
                logIn(form);
            } catch (error) {
                console.error(error);
            }
        }
    };

    return (
        <div className="login-form">
            <h1>
                Войти
            </h1>
            <div className="link-blcok">
                <span>
                    Новый пользователь?
                </span>
                <span>
                    <a
                        href="/registration"
                        className="link-reg"
                    >
                        Зарегистрируйтесь
                    </a>
                </span>
            </div>
            <form
                id="login"
                onSubmit={submitHandler}
            >
                <Input data={{
                    type: "email",
                    name: "email",
                    id: "user-email",
                    placeholder: "Email",
                    changeValue
                }} />
                <Input data={{
                    type: "password",
                    name: "password",
                    id: "user-password",
                    placeholder: "Пароль",
                    changeValue
                }} />
                <button
                    type="submit"
                >
                    Войти
                </button>
            </form>
        </div>
    );
};

FormLogin.protoTypes = {
    logIn: PropTypes.func
}

export default FormLogin;


