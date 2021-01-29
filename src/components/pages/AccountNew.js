import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Orders from '../account/Orders'
import EditAccount from '../account/EditAccount';
import ContactSupport from '../account/ContactSupport';
import PrivatePage from '../account/PrivatePage';
import TutorialBanners from "../banners/TutorialBanners";
import WeDeliverBanner from "../banners/WeDeliverBanner";
import CategoriesLinksHome from "../CategoriesLinksHome";

const  AccountNew = (props) => {
    const { user, token } = props;
    const [currentTab, setCurrentTab] = useState({ value: "Orders" });
    const history = useHistory();

    useEffect(() => {
        const options = {
            headers: {
                authorization: token
            }
        };

        axios.get('https://aw-store.herokuapp.com/auth/users', options)
            .then(res => {
                // console.log(res.data);
                // setUsers(res.data);
            })
            .catch(err => {
                // if (err.response.status === 401) {
                //     history.push("/login");
                // }
                console.log(err)
            })
    }, [history]);

    const switchTab = (str) => {
        switch (str) {
            case "Edit Account":
                setCurrentTab({ value: "Edit Account"});
                break;

            case "Contact Support":
                setCurrentTab({ value: "Contact Support"});
                break;

            case "Orders":
                setCurrentTab({ value: "Orders" });
                break;

            default:
                setCurrentTab({ value: "Private Page" });
                break;

            // default:
            //     setCurrentTab({ value: "Orders"});
            //     break;
        }
    }

    return (
        <>
            {
                (localStorage.getItem('token')) ?
                (<div className="wrapper">
                    <div className="wrapper__inside-container">
                        <div className="account">
                            <div className="account__header-container">
                                <h1 className="account__heading-primary heading-primary">My account</h1>
                                <ul className="account__options-list">
                                    <li className="account__options-list-item pointer" onClick={ () => switchTab("Orders" )}>Orders</li>
                                    <li className="account__options-list-item pointer" onClick={ () => switchTab("Edit Account" )}>Edit Account</li>
                                    <li className="account__options-list-item pointer" onClick={ () => switchTab("Contact Support" )}>Contact Support</li>
                                    <li className="account__options-list-item pointer" onClick={ () => switchTab("Private Page" )}>Private Page</li>
                                </ul>
                            </div>
                            <div className="account__content-container">
                                    {
                                        currentTab.value === "Orders"
                                        ? <Orders/>
                                        : currentTab.value === "Edit Account"
                                        ? <EditAccount/>
                                        : currentTab.value === "Contact Support"
                                        ? <ContactSupport/>
                                        : currentTab.value === "Private Page"
                                        ? <PrivatePage/>
                                        : null
                                    }
                                </div>
                        </div>
                    </div>
                </div>) : null
            }
            <div className="wrapper bg-color-light-gray">
                <div className="wrapper__inside-container">
                    <TutorialBanners/>
                </div>
            </div>
            <WeDeliverBanner/>
            <CategoriesLinksHome/>
        </>
    )
}

export default AccountNew;