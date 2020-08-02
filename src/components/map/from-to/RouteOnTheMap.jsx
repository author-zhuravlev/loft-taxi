import React, { useState, useEffect } from 'react';
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

    let newAddresses;

    if (form.address1.trim() || form.address2.trim()) {
        newAddresses = addresses.filter(address =>
            address.value !== form.address1 &&
            address.value !== form.address2
        );
    } else { 
        newAddresses = addresses;
    }

    const submitHandler = event => {
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

    useEffect(() => {
        if (form.address1.trim() && form.address2.trim()) {
            setForm(prevForm => ({
                ...prevForm,
                isInputValues: true
            }));
        }
    }, [form.address1, form.address2]);

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
                    addresses={newAddresses  || addresses}
                    name={"address1"}
                    form={form}
                    setForm={setForm}
                    placeholder={"Откуда..."}
                />
                <RouteEntryField
                    addresses={newAddresses || addresses}
                    name={"address2"}
                    form={form}
                    setForm={setForm}
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