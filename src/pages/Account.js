import React from 'react';


function Account() {
    return (
        <div className="wrapper">
            <div className="wrapper__inside-container">
                <div className="account">
                    <h1 className="heading-primary">My account</h1>
                    <div className="account__account-wrapper">
                        <nav>
                            <ul>
                                <li>Orders</li>
                                <li>Edit Profile</li>
                                <li>Contact Suppoer</li>
                            </ul>
                        </nav>
                        <div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Account;