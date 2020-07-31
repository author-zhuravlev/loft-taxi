import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types";
import Select from 'react-select';

import { RouteEntryField } from './RouteEntryField';
import { Order } from '../order/Order';

export const RouteOnTheMap = ({ getRoute, addresses }) => {
    const [address1, setAddress1] = useState({
        address1: ''
    });
    const [address2, setAddress2] = useState({
        address2: ''
    });
    const [form, setForm] = useState({
        isOrder: false,
        isInputValues: false
    });

    const submitHandler = async (event) => {
        event.preventDefault();

        if (address1.address1.trim() && address2.address2.trim()) {
            try {
                getRoute({
                    ...address1,
                    ...address2
                });

                setForm(prevForm => ({
                    ...prevForm,
                    isOrder: true
                }));
            } catch (error) {
                console.error(error);
            }
        }
    };

    useEffect(() => {
        if (address1.address1.trim() && address2.address2.trim()) {
            setForm(prevForm => ({
                ...prevForm,
                isInputValues: true
            }));
        }
    }, [address1, address2])

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
                    form={address1}
                    setForm={setAddress1}
                    placeholder={"Откуда..."}
                />
                <RouteEntryField
                    addresses={addresses}
                    name={"address2"}
                    form={address2}
                    setForm={setAddress2}
                    placeholder={"Куда..."}
                />
                <button
                    className={ form.isInputValues ? "btn" : "btn disabled" }
                    type="submit"
                    disabled={form.isInputValues ? false : true}
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