import React, { useState } from 'react'; //

import Input from './Input';

const FormLogin = () => {
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
            <form id="login">
                <Input data={{
                    type: "text",
                    name: "name",
                    id: "user-name",
                    placeholder: "Имя пользователя"
                }} />
                <Input data={{
                    type: "password",
                    name: "password",
                    id: "user-password",
                    placeholder: "Пароль"
                }} />
                <button type="submit">
                    Войти
                </button>
            </form>
        </div>
    )
};

export default FormLogin;

