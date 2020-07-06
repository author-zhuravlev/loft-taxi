import React, { useState } from 'react';

import Input from '../../shared/input/Input';

const FormProfile = () => {
    const [form, setForm] = useState({
        'number-card': '',
        validity: '',
        'user-name': '',
        cvc: ''
    });

    // const { loading, request, error , clearError } = UseHttp();

    const changeValue = event => setForm({ ...form, [event.target.name]: event.target.value });

    return (
        <form>
            <div className="title">
                <h1>
                    Профиль
                </h1>
                <p>Способ оплаты</p>
            </div>
            <div className="cards">
                <div className="card left">
                    <div className="logo-card">
                        <img
                            src="/mastercard.png"
                            alt="Card"
                        />
                    </div>
                    <div className="wrapper-input">
                        <label htmlFor="number-card">Номер карты</label>
                        <Input data={{
                            type: "text",
                            name: "number-card",
                            id: "number-card",
                            placeholder: "0000 0000 0000 0000",
                            changeValue
                        }} />
                    </div>
                    <div className="wrapper-input">
                        <label htmlFor="validity">Срок действия</label>
                        <Input data={{
                            type: "month",
                            name: "validity",
                            id: "validity",
                            placeholder: "Срок действия",
                            changeValue
                        }} />
                    </div>
                </div>
                <div className="card right">
                    <div className="wrapper-input">
                        <label htmlFor="user-name">Имя владельца</label>
                        <Input data={{
                            type: "text",
                            name: "user-name",
                            id: "user-name",
                            placeholder: "Имя владельца",
                            changeValue
                        }} />
                    </div>
                    <div className="wrapper-input">
                        <label htmlFor="cvc">CVC</label>
                        <Input data={{
                            type: "text",
                            name: "cvc",
                            id: "cvc",
                            placeholder: "CVC",
                            changeValue
                        }} />
                    </div>
                </div>
            </div>
            <div className="btn-block">
                <button type="submit">Сохранить</button>
            </div>
        </form>
    );
};

export default FormProfile;