import React from 'react';

function Account() {
    return (
        <div className="wrapper">
            <div className="wrapper__inside-container">
                <div className="account">
                    <h1 className="heading-primary">My account</h1>
                    <div className="account__account-wrapper">
                        <nav className="account__account-sidebar">
                            <ul className="account-sidebar__sidebar-list">
                                <li className="account-sidebar__item pointer">Orders</li>
                                <li className="account-sidebar__item pointer">Edit Profile</li>
                                <li className="account-sidebar__item pointer">Contact Support</li>
                            </ul>
                        </nav>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Account;