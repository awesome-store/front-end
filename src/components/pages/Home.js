import React from "react";
import SearchBar from "../SearchBar";
// import SliderComponent from "../slider/SliderComponent";
import Slider from "../slider/Slider";
import TwoMillionItemsBanner from "../banners/TwoMillionItemsBanner";
import PromotionalBanners from "../banners/PromotionalBanners";
import PopularProducts from "../products/PopularProducts";
import TutorialBanners from "../banners/TutorialBanners";
import WeDeliverBanner from "../banners/WeDeliverBanner";
import CategoriesLinksHome from "../CategoriesLinksHome";

function Home() {
    return (
        <main className="home">
            <SearchBar/>
            <div className="top-slider">
                <Slider/>
            </div>
            <TwoMillionItemsBanner/>
            <div className="wrapper">
                <div className="wrapper__inside-container">
                    <PopularProducts className="home__popular-products"/>
                </div>
            </div>
            <div className="wrapper">
                <div className="wrapper__inside-container">
                    <PromotionalBanners className="home__promotional-banners"/>
                </div>
            </div>
            <div className="wrapper home__tutorial-banner-wrapper">
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