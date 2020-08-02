import React from 'react';
import Select from 'react-select';

export const RouteEntryField = ({ addresses, placeholder, setForm, form, name }) => {
    const handleChange = state => {
        setForm({
            ...form,
            [name]: state ? state.value : '',
            isInputValues: false
        });
    };

    return (
        <div className="wrapper-input d-flex-center">
            <div className="route-entry-field">
                <div className="entry">
                    <Select
                        onChange={handleChange}
                        options={addresses}
                        name={name}
                        placeholder={placeholder}
                        isClearable={true}
                    />
                </div>
            </div>
        </div>
    );
}