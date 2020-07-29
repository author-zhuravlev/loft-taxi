import React from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';

import Header from '../header/HeaderContainer';
import { FormProfile } from '../../components/profile/FormProfile';
import { payment } from './store/actions';

const Profile = ({ cardData, payment }) => {
    return (
        <div className="wrapper">
            <Header />
            <div className="profile d-flex-center">
                <div className="block-form">
                    <div className="title">
                        <h1>
                            Профиль
                        </h1>
                        <p>Способ оплаты</p>
                    </div>
                    <FormProfile payment={payment} cardData={cardData} />
                </div>
            </div>
        </div>
    );
};

Profile.protoTypes = {
    cardData: PropTypes.object,
    payment: PropTypes.func,
};

const mapStateToProps = state => ({
    cardData: state.paymentReducer.cardData
});

export default connect(mapStateToProps, { payment })(Profile);