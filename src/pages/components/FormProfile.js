import React from 'react';

import Input from './Input';

const FormProfile = () => {
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
                            placeholder: "0000 0000 0000 0000"
                        }} />
                    </div>
                    <div className="wrapper-input">
                        <label htmlFor="validity">Срок действия</label>
                        <Input data={{
                            type: "month",
                            name: "validity",
                            id: "validity",
                            placeholder: "Срок действия"
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
                            placeholder: "Имя владельца"
                        }} />
                    </div>
                    <div className="wrapper-input">
                        <label htmlFor="cvc">CVC</label>
                        <Input data={{
                            type: "text",
                            name: "cvc",
                            id: "cvc",
                            placeholder: "CVC"
                        }} />
                    </div>
                </div>
            </div>
            <div className="btn-block">
                <button type="submit">Сохранить</button>
            </div>
        </form>
    )
};

export default FormProfile;