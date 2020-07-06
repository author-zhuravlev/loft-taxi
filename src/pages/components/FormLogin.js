import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';

import Input from '../../shared/input/Input';
import AuthContext from '../../context/AuthContext';

const FormLogin = () => {
    const auth = useContext(AuthContext);
    // const { loading, request, error , clearError } = UseHttp();

    const [form, setForm] = useState({
        name: '',
        password: ''
    });

    const changeValue = event => setForm({ ...form, [event.target.name]: event.target.value });

    const submitHandler = async event => {
        event.preventDefault();
        // setForm(null);

        try {
            // const data = await request('/login', 'POST', { ...form });
            auth.logIn(form.name, form.password); //нужны данные с сервера
        } catch (error) {
        
        }
    };

    if (auth.isAuthenticated) {
        return <Redirect to='/map' />;
    }

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
                method="POST"
                onSubmit={submitHandler}
            >
                <Input data={{
                    type: "text",
                    name: "name",
                    id: "user-name",
                    placeholder: "Имя пользователя",
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
                    // disabled={loading} 
                >
                    Войти
                </button>
            </form>
        </div>
    )
};

export default FormLogin;

