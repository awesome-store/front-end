import React from 'react';

function EditAccount() {
    return (
        <div className="account__tab-container">
            <h2 className="account__heading-primary heading-primary">Edit My Account</h2>
            <div className="account__input-container input-container">
                <label className="label">E-MAIL:</label>
                <input className="input"/>
            </div>
            <div className="account__input-container input-container">
                <label className="label">PASSWORD:</label>
                <input className="input"/>
            </div>
            <h2 className="account__heading-primary heading-secondary">Shipping Address</h2>
            <div className="account__input-container input-container">
                <label className="label">NAME:</label>
                <input className="input"/>
            </div>
            <div className="account__input-container input-container">
                <label className="label">STREET:</label>
                <input className="input"/>
            </div>
            <div className="account__input-container input-container">
                <label className="label">CITY:</label>
                <input className="input"/>
            </div>
            <div className="account__input-container input-container">
                <label className="label">STATE:</label>
                <input className="input"/>
            </div>
            <div className="account__input-container input-container">
                <label className="label">ZIP CODE:</label>
                <input className="input"/>
            </div>
            <div className="input-container">
                <label className="label">COUNTRY:</label>
                <input className="input"/>
            </div>
        </div>
    )
}

export default EditAccount;