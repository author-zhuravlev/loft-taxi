import React from 'react';
import Select from 'react-select';

export class RouteEntryField extends React.Component {
    name = this.props.name;

    handleChange = (state) => {
        this.props.setForm({
            ...this.props.form,
            [this.name]: state.value
        });
    };

    render() {
        return (
                <div className="wrapper-input d-flex-center">
                    <div className="route-entry-field">
                        <div className="entry">
                        <Select
                                inputValue={this.props.form.name}
                                onChange={this.handleChange}
                                options={this.props.addresses}
                                name={this.name}
                                placeholder={this.props.placeholder}
                                hideSelectedOptions={true}
                                isClearable={true}
                            />
                        </div>
                    </div>
                </div>
        );
    }
}