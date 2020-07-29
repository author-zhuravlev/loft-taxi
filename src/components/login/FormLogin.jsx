import React, { useState } from "react"; // , useEffect
import PropTypes from "prop-types";

export const FormLogin = ({ logIn }) => {
    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    // const autoLogin = async () => {
    //     try {
    //         await logIn(userData);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };

    const changeValue = (event) => {
        event.persist();
        
        setForm((prevForm) => ({
            ...prevForm,
            [event.target.name]: event.target.value,
        }));
    };

    const submitHandler = (event) => {
        event.preventDefault();

        if (form.email.trim() && form.password.trim()) {
            try {
                logIn(form);
            } catch (error) {
                console.error(error);
            }
        }
    };

    // useEffect(() => {
    //     autoLogin();
    // }, []);

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
                onSubmit = {submitHandler}
            >   
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={changeValue}
                />
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

FormLogin.protoTypes = {
    logIn: PropTypes.func,
};