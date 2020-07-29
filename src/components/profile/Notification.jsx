import React from 'react';
import { Link } from 'react-router-dom';

import './notification.css';

export const Notification = () => {
    return (
        <div className="notification d-flex-center">
            <p>
                Платёжные данные обновлены. Теперь вы можете заказывать такси.
            </p>
            <Link
                className="btn link-map"
                to="/map"
            >
                Перейти на карту
            </Link>
        </div>
    );
}