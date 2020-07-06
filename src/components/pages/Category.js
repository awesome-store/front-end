import React from 'react';
import WeDeliverBanner from "../banners/WeDeliverBanner";
import CategoriesLinksHome from "../CategoriesLinksHome";
import TutorialBanners from "../banners/TutorialBanners";

function Category() {
    return (
        <div className="wrapper">
            <div className="wrapper__inside-container">
                <TutorialBanners/>
                <WeDeliverBanner/>
                <CategoriesLinksHome/>
            </div>
        </div>
    )
}

export default Category;