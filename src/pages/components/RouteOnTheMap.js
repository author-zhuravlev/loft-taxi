import React from 'react';

import Input from './Input';
import Tooltip from './Tooltip';

const RouteOnTheMap = () => {
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
                        placeholder: "Откуда"
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
                        placeholder: "Куда"
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
    )
};

export default RouteOnTheMap;