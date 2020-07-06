import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ data: { type, name, id, placeholder, changeValue } }) => {
    return (
        <input
            type={type}
            name={name}
            id={id}
            placeholder={placeholder}
            onChange={changeValue}
        />
    );
};

Input.propTypes = {
    data: PropTypes.shape({
        type: PropTypes.string.isRequired,
        name: PropTypes.string,
        id: PropTypes.string,
        placeholder: PropTypes.string,
        changeValue: PropTypes.func.isRequired
    })
}

export default Input;
