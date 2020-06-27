import React from 'react';

import Input from './Input';

const FormRegistration = () => {
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
            <form id="registration">
                <Input data={{
                    type: "email",
                    name: "email",
                    id: "user-email",
                    placeholder: "Адрес электронной почты"
                }} />
                <div className="name-surname">
                    <Input data={{
                        type: "text",
                        name: "name",
                        id: "user-name",
                        placeholder: "Имя"
                    }} />
                    <Input data={{
                        type: "text",
                        name: "surname",
                        id: "user-surname",
                        placeholder: "Фамилия"
                    }} />
                </div>
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

export default FormRegistration;
