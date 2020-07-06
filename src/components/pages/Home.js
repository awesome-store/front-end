import React from "react";
import SearchBar from "../SearchBar";
import Slider from "../Slider";
import TwoMillionItemsBanner from "../banners/TwoMillionItemsBanner";
import PromotionalBanners from "../banners/PromotionalBanners";
import TutorialBanners from "../banners/TutorialBanners";
import WeDeliverBanner from "../banners/WeDeliverBanner";
import PopularProducts from "../products/PopularProducts";
import CategoriesLinksHome from "../CategoriesLinksHome";

function Home() {
    return (
        <main className="home-page">
            <SearchBar/>
            <div className="top-slider">
                <Slider/>
            </div>
            <TwoMillionItemsBanner/>
            <div className="wrapper">
                <div className="wrapper__inside-container">
                    <PopularProducts className="home-page__popular-products"/>
                </div>
            </div>
            <div className="wrapper">
                <div className="wrapper__inside-container">
                    <PromotionalBanners className="home-page__promotional-banners"/>
                </div>
            </div>
            <div className="wrapper home-page__tutorial-banner-wrapper">
                <div className="wrapper__inside-container">
                    <TutorialBanners/>
                </div>
            </div>
            <WeDeliverBanner/>
            <CategoriesLinksHome/>
        </main>
    );
}

export default Home;