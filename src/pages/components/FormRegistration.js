import React, { useState, useContext } from 'react';

import Input from '../../shared/input/Input';
import AuthContext from '../../context/AuthContext';

const FormRegistration = () => {
    const auth = useContext(AuthContext);
    // const { loading, request, error , clearError } = UseHttp();

    const [form, setForm] = useState({
        email: '',
        name: '',
        surname: '',
        password: ''
    });

    const changeValue = event => setForm({ ...form, [event.target.name]: event.target.value });

    const submitHandler = async event => {
        event.preventDefault();
        // setForm(null);

        try {
            // const data = await request('/registration', 'POST', { ...form });
            auth.logIn(form.name, form.password); //нужны данные с сервера
        } catch (error) {
        
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
                <Input data={{
                    type: "email",
                    name: "email",
                    id: "user-email",
                    placeholder: "Адрес электронной почты",
                    changeValue
                }} />
                <div className="name-surname">
                    <Input data={{
                        type: "text",
                        name: "name",
                        id: "user-name",
                        placeholder: "Имя",
                        changeValue
                    }} />
                    <Input data={{
                        type: "text",
                        name: "surname",
                        id: "user-surname",
                        placeholder: "Фамилия",
                        changeValue
                    }} />
                </div>
                <Input data={{
                    type: "password",
                    name: "password",
                    id: "user-password",
                    placeholder: "Пароль",
                    changeValue
                }} />
                <button type="submit">
                    Войти
                </button>
            </form>
        </div>
    );
};

export default FormRegistration;
