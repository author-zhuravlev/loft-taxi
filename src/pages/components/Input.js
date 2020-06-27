import React from 'react';

const Input = ({ data: { type, name, id, placeholder } }) => {
    return (
        <input
            type={type}
            name={name}
            id={id}
            placeholder={placeholder}
        />
    )
};

export default Input;
