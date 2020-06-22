import React from 'react';
import { Link } from 'react-router-dom';

function EditAccount() {
    return (
        <div className="account__tab-container">
            <h2 className="account__heading-primary heading-primary">Edit My Account</h2>
            <div className="account__change-email-container">
                <div className="account__input-container input-container">
                    <label className="label">E-MAIL</label>
                    <input className="input"/>
                </div>
                <div className="account__change-container">
                    <Link className="account__change-link">
                        <span className="account__change-text">Change</span>
                    </Link>
                </div>
                <div className="account__password-container account__input-container input-container">
                    <label className="label">PASSWORD</label>
                    <input className="input"/>
                </div>
            </div>
            <h2 className="account__heading-primary heading-primary">Shipping Address</h2>
            <div className="account__account-info">
                <div className="account__input-container input-container">
                    <label className="label">NAME</label>
                    <input className="input"/>
                </div>
                <div className="account__street-input-container account__input-container input-container">
                    <label className="label">STREET</label>
                    <input className="input"/>
                </div>
                <div className="account__input-container input-container">
                    <label className="label">CITY</label>
                    <input className="input"/>
                </div>
                <div className="account__input-container input-container">
                    <label className="label">STATE</label>
                    <input className="input"/>
                </div>
                <div className="account__input-container input-container">
                    <label className="label">ZIP CODE</label>
                    <input className="input"/>
                </div>
                <div className="account__input-container input-container">
                    <label className="label">COUNTRY</label>
                    <input className="input"/>
                </div>
            </div>
            <div className="account__btn-group">
                <div className="btn btn--small btn--small-screen">
                    <p>Cancel</p>
                </div>
                <div className="btn btn--small btn--small-screen btn--yellow">
                    <p>Save</p>
                </div>
            </div>
        </div>
    )
}

export default EditAccount;