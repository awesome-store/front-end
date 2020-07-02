import React from 'react';
import Categories from '../Categories';
import PopularProducts from "../PopularProducts";
import PromotionalBanners from "../banners/PromotionalBanners";
import TutorialBanners from "../banners/TutorialBanners";
import WeDeliverBanner from "../banners/WeDeliverBanner";
import CategoriesLinksHome from "../CategoriesLinksHome";

function Store() {
    return (
        <div>
            <div className="wrapper">
                <div className="wrapper__inside-container">
                    <Categories/>
                    <PopularProducts/>
                    <PromotionalBanners/>
                </div>
            </div>
            <div className="wrapper home-page__tutorial-banner-wrapper">
                <div className="wrapper__inside-container">
                    <TutorialBanners/>
                </div>
            </div>
            <WeDeliverBanner/>
            <CategoriesLinksHome/>
        </div>
    )
}

export default Store;