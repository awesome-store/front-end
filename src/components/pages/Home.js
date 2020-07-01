import React from "react";
import Slider from "../Slider";
import Product from "../Product";
import PromotionalBanners from '../banners/PromotionalBanners';
import TutorialBanners from '../banners/TutorialBanners';
import WeDeliverBanner from '../banners/WeDeliverBanner';
import drill from "../../img/drill.png";
import paint from "../../img/paint.png";
import screwdrivers from "../../img/screwdrivers.png";
import toolkit from "../../img/toolkit.png";
import CategoriesLinksHome from "../CategoriesLinksHome";

function Home() {
    return (
        <main className="home-page">
            <div className="search-bar-container">
                <div className="search-bar-container__tag-item pointer">
                    <span>Doors</span>
                </div>
                <div className="search-bar-container__tag-item pointer">
                    <span>Furniture</span>
                </div>
                <div className="search-bar-container__tag-item pointer">
                    <span>Decore</span>
                </div>
                <div className="search-bar-container__tag-item pointer">
                    <span>Building material</span>
                </div>
                <div className="search-bar-container__tag-item pointer">
                    <span>Lawn</span>
                </div>
                <div className="search-bar-container__tag-item pointer">
                    <span>Ceiling Fans</span>
                </div>
                <div className="search-bar-container__tag-item pointer">
                    <span>Garden</span>
                </div>
                <div className="search-bar-container__tag-item pointer">
                    <span>Bath & Faucets</span>
                </div>
                <input className="search-bar-container__search-bar" placeholder="Search"/>
            </div>
            <div className="top-slider">
                <Slider/>
            </div>
            <div className="top-banner">
                <div className="top-banner__inner-container">
                    <div className="top-banner__text-container">
                        <span className="top-banner__text">More Than 2 Million Items<br/>Available in Store</span>
                    </div>
                    <div className="top-banner__btn btn pointer">
                        <span>Store</span>
                    </div>
                </div>
            </div>
            <div className="wrapper">
                <div className="wrapper__inside-container">
                    <section className="section-popular-products">
                        <h2 className="section-popular-products__heading heading-primary">Popular Products</h2>
                        <div className="products-container">
                            <Product img={drill}/>
                            <Product img={paint}/>
                            <Product img={toolkit}/>
                            <Product img={screwdrivers}/>
                            <Product img={paint}/>
                            <Product img={screwdrivers}/>
                            <Product img={toolkit}/>
                            <Product img={drill}/>
                        </div>
                    </section>
                </div>
            </div>
            <div className="wrapper">
                <div className="wrapper__inside-container">
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
        </main>
    );
}

export default Home;