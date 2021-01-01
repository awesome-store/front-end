import React from 'react';
import CategoryProducts from "../products/CategoryProducts";
import PromotionalBanners from "../banners/PromotionalBanners";
import WeDeliverBanner from "../banners/WeDeliverBanner";
import CategoriesLinksHome from "../CategoriesLinksHome";
import TutorialBanners from "../banners/TutorialBanners";

function Category() {
    const category = "Paint";
    return (
        <>
            <div className="wrapper">
                <div className="wrapper__inside-container">
                    <div className="category__breadcrumbs-container breadcrumbs-container align-self-start">
                        <p className="breadcrumbs-container__item breadcrumbs-container__item--parent pointer">Home</p>
                        <p className="breadcrumbs-container__arrow">→</p>
                        <p className="breadcrumbs-container__item breadcrumbs-container__item--parent pointer">Store</p>
                        <p className="breadcrumbs-container__arrow">→</p>
                        <p className="breadcrumbs-container__item">Paint</p>
                    </div>
                    <CategoryProducts className="category__category-products" categoryName={category}/>
                    <PromotionalBanners className="category__promotional-banners"/>
                    <TutorialBanners/>
                </div>
            </div>
            <WeDeliverBanner/>
            <CategoriesLinksHome/>
        </>
    )
}

export default Category;