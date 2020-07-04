import React from 'react';
import Categories from "../products/Categories";
import PopularProducts from "../products/PopularProducts";
import NewProducts from "../products/NewProducts";
import PromotionalBanners from "../banners/PromotionalBanners";
import TutorialBanners from "../banners/TutorialBanners";
import WeDeliverBanner from "../banners/WeDeliverBanner";
import CategoriesLinksHome from "../CategoriesLinksHome";

function Store() {
    return (
        <div>
            <div className="wrapper">
                <div className="wrapper__inside-container">
                    <Categories className="store__categories"/>
                    <PopularProducts className="store__products-container"/>
                    <NewProducts className="store__products-container"/>
                    <PromotionalBanners className="store__promotional-banners"/>
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