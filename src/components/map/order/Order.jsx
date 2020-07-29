import React from 'react';

export const Order = ({ form, setForm }) => {
    const makeNewOrder = () => {
        setForm({
            ...form,
            isOrder: false
        });
    };

    return (
        <div className="wrapper-block-fixed d-flex-center wrapper-prompt">
            <h2>
                Заказ размещён
            </h2>
            <p>
                Ваше такси уже едет к вам.<br />
                Прибудет приблизительно через 10 минут.
            </p>
            <button
                className="btn"
                onClick={makeNewOrder}
            >
                Сделать новый заказ
            </button>
        </div>
    );
}