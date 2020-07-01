import React from "react";
import Slider from "../Slider";
import Product from "../Product";
import SearchBar from "../SearchBar";
import TwoMillionItemsBanner from '../banners/TwoMillionItemsBanner';
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
            <SearchBar/>
            <div className="top-slider">
                <Slider/>
            </div>
            <TwoMillionItemsBanner/>
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