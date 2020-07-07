import React from 'react';
import PromotionalBanners from "../banners/PromotionalBanners";
import WeDeliverBanner from "../banners/WeDeliverBanner";
import CategoriesLinksHome from "../CategoriesLinksHome";
import TutorialBanners from "../banners/TutorialBanners";

function Category() {
    return (
        <div>
            <div className="wrapper">
                <div className="wrapper__inside-container">
                    <PromotionalBanners/>
                    <TutorialBanners/>
                </div>
            </div>
            <WeDeliverBanner/>
            <CategoriesLinksHome/>
        </div>
    )
}

export default Category;