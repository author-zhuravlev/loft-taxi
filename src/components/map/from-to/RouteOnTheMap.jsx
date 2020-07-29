import React, { useState } from 'react';
import PropTypes from "prop-types";

import { RouteEntryField } from './RouteEntryField';
import { Order } from '../order/Order';

export const RouteOnTheMap = ({ getRoute, addresses }) => {
    const [form, setForm] = useState({
        address1: '',
        address2: '',
        isOrder: false,
        isInputValues: false
    });

    const submitHandler = async (event) => {
        event.preventDefault();

        if (form.address1.trim() && form.address2.trim()) {
            try {
                getRoute(form);

                setForm(prevForm => ({
                    ...prevForm,
                    isOrder: true
                }));
            } catch (error) {
                console.error(error);
            }
        }
    };

    // const checkInputValue = (form) => {
    //     if (form.address1.trim() && form.address2.trim()) {
    //         setForm(prevForm => ({
    //             ...prevForm,
    //             isInputValues: true
    //         }));
    //     }
    // }

    return (
        form.isOrder
        ? (<Order
                form={form}
                setForm={setForm}
        />)
        : (<div className="wrapper-block-fixed route">
            <form
                id="login"
                onSubmit={submitHandler}
            >
                <RouteEntryField
                    addresses={addresses}
                    name={"address1"}
                    form={form}
                    setForm={setForm}
                    placeholder={"Откуда..."}
                    // checkInputValue={checkInputValue}
                />
                <RouteEntryField
                    addresses={addresses}
                    name={"address2"}
                    form={form}
                    setForm={setForm}
                    placeholder={"Куда..."}
                    // checkInputValue={checkInputValue}
                />
                <button
                    // className={ form.isInputValues ? "btn" : "btn disabled" }
                    className="btn"
                    type="submit"
                    // disabled={form.isInputValues ? false : true}
                >
                    Вызвать такси
                 </button>
            </form>
        </div>)
    );
}

RouteOnTheMap.protoTypes = {
    getRoute: PropTypes.func,
    addresses: PropTypes.array
};