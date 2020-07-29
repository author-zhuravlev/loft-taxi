import React from 'react';
import { Link } from 'react-router-dom';

import './prompt.css';

export const Prompt = () => {
    return (
        <div className="wrapper-block-fixed d-flex-center wrapper-prompt">
            <h2>
                Заполните платежные данные
            </h2>
            <p>
                Укажите информацию о банковской карте, <br />
                чтобы сделать заказ.
            </p>
            <Link
                className="btn link-profile"
                to="/profile"
            >
                Перейти в профиль
            </Link>
        </div>
    );
}