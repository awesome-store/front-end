import React, { useState } from 'react';
import Orders from '../account/Orders';
import EditAccount from '../account/EditAccount';
import ContactSupport from '../account/ContactSupport';

function Account() {
    const [currentTab, setCurrentTab] = useState({value: "Orders"});

    const switchTab = (str) => {
        switch (str) {
            case "Edit Account":
                setCurrentTab({ value: "Edit Account"});
                break;

            case "Contact Support":
                setCurrentTab({ value: "Contact Support"});
                break;
        
            default:
                setCurrentTab({ value: "Orders"});
                break;
        }
    }
    return (
        <div className="wrapper">
            <div className="wrapper__inside-container">
                <div className="account">
                    <h1 className="heading-primary">My account</h1>
                    <div className="account__account-wrapper">
                        <nav className="account__account-sidebar">
                            <ul className="account-sidebar__sidebar-list">
                                <li className="account-sidebar__item pointer" onClick={ () => switchTab("Orders" )}>Orders</li>
                                <li className="account-sidebar__item pointer" onClick={ () => switchTab("Edit Account" )}>Edit Profile</li>
                                <li className="account-sidebar__item pointer" onClick={ () => switchTab("Contact Support" )}>Contact Support</li>
                            </ul>
                        </nav>
                        {
                            currentTab.value === "Orders"
                            ? <Orders/>
                            : currentTab.value === "Edit Account"
                            ? <EditAccount/>
                            : currentTab.value === "Contact Support"
                            ? <ContactSupport/>
                            : null
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Account;