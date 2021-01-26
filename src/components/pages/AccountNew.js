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
    const [currentTab, setCurrentTab] = useState({ value: "Orders" });
    const history = useHistory();

    useEffect(() => {
        const token = localStorage.getItem('token');
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