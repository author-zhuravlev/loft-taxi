import React, { useState } from 'react';
import PropTypes from "prop-types";

import { Notification } from './Notification';

import './profile.css';

export const FormProfile = ({ payment, cardData = {} }) => {
    const [form, setForm] = useState({
        cardNumber: cardData.cardNumber || '',
        expiryDate: cardData.expiryDate || '',
        cardName: cardData.cardName || '',
        cvc: cardData.cvc || '',
        notification: false
    });

    const changeValue = event => {
        event.persist();
        
        setForm(prevForm => ({
            ...prevForm,
            [event.target.name]: event.target.value
        }));
    };

    // const addSpaceToCard = () => {
    //     const cardNumber
    // };

    const submitHandler = async (event) => {
        event.preventDefault();

        const token = JSON.parse(localStorage.getItem('userToken')).token;

        if (form.cardNumber.trim() && form.expiryDate.trim()
            && form.cardName.trim() && form.cvc.trim() && token)
        {
            try {
                await payment({ ...form, token });

                setForm(prevForm => ({
                    ...prevForm,
                    notification: true
                }));
            } catch (error) {
                console.error(error);
            }
        }
    };

    return (
        form.notification
            ? (<Notification />)
            : (<form
                    onSubmit={submitHandler}
                >
                    <div className="card-wrapp">
                        <div className="card left">
                            <div className="logo-card">
                                <img
                                    src="/mastercard.png"
                                    alt="Card"
                                />
                            </div>
                            <div className="wrapper-input">
                                <label htmlFor="number-card">Номер карты</label>
                                <input
                                    type="text"
                                    name="cardNumber"
                                    id="number-card"
                                    placeholder="0000 0000 0000 0000"
                                    onChange={changeValue}
                                    value={form.cardNumber}
                                />
                            </div>
                            <div className="wrapper-input">
                                <label htmlFor="validity">Срок действия</label>
                                <input
                                    type="month"
                                    name="expiryDate"
                                    id="validity"
                                    placeholder="Срок действия"
                                    onChange={changeValue}
                                    value={form.expiryDate}
                                />
                            </div>
                        </div>
                        <div className="card right">
                            <div className="wrapper-input">
                                <label htmlFor="user-name">Имя владельца</label>
                                <input
                                    type="text"
                                    name="cardName"
                                    id="user-name"
                                    placeholder="Имя владельца"
                                    onChange={changeValue}
                                    value={form.cardName}
                                />
                            </div>
                            <div className="wrapper-input">
                                <label htmlFor="cvc">CVC</label>
                                <input
                                    type="text"
                                    name="cvc"
                                    id="cvc"
                                    placeholder="CVC"
                                    onChange={changeValue}
                                    value={form.cvc}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="btn-block">
                       <button
                            className="btn"
                            type="submit"
                        >
                            Сохранить
                        </button>
                    </div> 
                </form>)
    )
};

FormProfile.protoTypes = {
    payment: PropTypes.func,
    cardData: PropTypes.object
};