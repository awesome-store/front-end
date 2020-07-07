import React from 'react';
import CategoryProducts from "../products/CategoryProducts";
import PromotionalBanners from "../banners/PromotionalBanners";
import WeDeliverBanner from "../banners/WeDeliverBanner";
import CategoriesLinksHome from "../CategoriesLinksHome";
import TutorialBanners from "../banners/TutorialBanners";

function Category() {
    const category = "Paint";
    return (
        <div>
            <div className="wrapper">
                <div className="wrapper__inside-container">
                    <CategoryProducts className="category__category-products" categoryName={category}/>
                    <PromotionalBanners className="category__promotional-banners"/>
                    <TutorialBanners/>
                </div>
            </div>
            <WeDeliverBanner/>
            <CategoriesLinksHome/>
        </div>
    )
}

export default Category;