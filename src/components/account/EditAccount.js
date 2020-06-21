import React from 'react';

function EditAccount() {
    return (
        <div>
            <h2 className="heading-primary">Edit My Account</h2>
            <div className="input-container">
                <label>E-MAIL:</label>
                <input className="input"/>
            </div>
            <div className="input-container">
                <label>PASSWORD:</label>
                <input className="input"/>
            </div>
            <h2 className="heading-secondary">Shipping Address</h2>
            <div className="input-container">
                <label>NAME:</label>
                <input className="input"/>
            </div>
            <div className="input-container">
                <label>STREET:</label>
                <input className="input"/>
            </div>
            <div className="input-container">
                <label>CITY:</label>
                <input className="input"/>
            </div>
            <div className="input-container">
                <label>STATE:</label>
                <input className="input"/>
            </div>
            <div className="input-container">
                <label>ZIP CODE:</label>
                <input className="input"/>
            </div>
            <div className="input-container">
                <label>COUNTRY:</label>
                <input className="input"/>
            </div>
        </div>
    )
}

export default EditAccount;