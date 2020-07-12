import React from 'react';
import CategoryCards from "../products/CategoryCards";
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
                    <div className="breadcrumbs-container store__breadcrumbs-container align-self-start">
                        <p className="breadcrumbs-container__item breadcrumbs-container__item--parent pointer">Home</p>
                        <p className="breadcrumbs-container__arrow">→</p>
                        <p className="breadcrumbs-container__item pointer">Store</p>
                    </div>
                    <CategoryCards className="store__category-cards-container"/>
                    <PopularProducts className="store__product-cards-container"/>
                    <NewProducts className="store__product-cards-container"/>
                    <PromotionalBanners className="store__promotional-banners"/>
                </div>
            </div>
            <div className="wrapper home__tutorial-banner-wrapper">
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