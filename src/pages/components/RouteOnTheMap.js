import React, { useState } from 'react';

import Input from '../../shared/input/Input';
import Tooltip from './Tooltip';

const RouteOnTheMap = () => {
    const [form, setForm] = useState({
        from: '',
        to: ''
    });

    const changeValue = event => setForm({ ...form, [event.target.name]: event.target.value });

    return (
        <div className="wrapper-route">
            <form
                action="#"
                id="login"
            >
                <div className="wrapper-input d-flex-center">
                    <Input data={{
                        type: "text",
                        name: "from",
                        id: "from",
                        placeholder: "Откуда",
                        changeValue
                    }} />
                    <div className="arrow">
                        &or;
                    </div>
                    <Tooltip />
                </div>
                <div className="wrapper-input d-flex-center">
                    <Input data={{
                        type: "text",
                        name: "to",
                        id: "to",
                        placeholder: "Куда",
                        changeValue
                    }} />
                    <div className="arrow">
                        &or;
                    </div>
                    <Tooltip />
                </div>
                <button type="submit">
                    Вызвать такси
                </button>
            </form>
        </div>
    );
};

export default RouteOnTheMap;