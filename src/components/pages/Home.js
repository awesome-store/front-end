import React from "react";
import Slider from "../Slider";
import Product from "../Product";
import PromotionalBanners from '../banners/PromotionalBanners';
import WeDeliverBanner from '../banners/WeDeliverBanner';
import drill from "../../img/drill.png";
import paint from "../../img/paint.png";
import screwdrivers from "../../img/screwdrivers.png";
import toolkit from "../../img/toolkit.png";
import flowers from "../../img/flowers.png";
import vases from "../../img/vases.png";
import paint1 from "../../img/paint1.png";
import paint2 from "../../img/paint2.png";
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
                    <section className="tutorial-banner-container">
                        <h2 className="heading-primary tutorial-banner-container__header">Inspire Yourself with Tutorials</h2>
                        <div className="tutorial-banner-container__inner-container">
                            <div className="tutorial-banner tutorial-banner--text-white">
                                <img className="tutorial-banner__image" src={flowers} alt="flowers"/>
                                <span className="tutorial-banner__header">Gardening<br/>tips & tricks</span>
                                <div className="tutorial-banner__description">
                                    <p><b>6</b> promoted product</p>
                                    <p><b>2</b> min read</p>
                                </div>
                            </div>
                            <div className="tutorial-banner tutorial-banner--text-black">
                                <img className="tutorial-banner__image" src={vases} alt="flowers"/>
                                <span className="tutorial-banner__header">DIY<br/>Furniture<br/>Renovation</span>
                                <div className="tutorial-banner__description">
                                    <p><b>6</b> promoted product</p>
                                    <p><b>2</b> min read</p>
                                </div>
                            </div>
                            <div className="tutorial-banner-small tutorial-banner-small--text-white">
                                <img className="tutorial-banner-small__image" src={paint1} alt="flowers"/>
                                <span className="tutorial-banner-small__header">Picking<br/>perfect paint</span>
                                <div className="tutorial-banner-small__description">
                                    <p><b>6</b> promoted product</p>
                                    <p><b>2</b> min read</p>
                                </div>
                            </div>
                            <div className="tutorial-banner-small tutorial-banner-small--text-black">
                                <img className="tutorial-banner-small__image" src={paint2} alt="flowers"/>
                                <span className="tutorial-banner-small__header">Painting 101</span>
                                <div className="tutorial-banner-small__description">
                                    <p><b>6</b> promoted product</p>
                                    <p><b>2</b> min read</p>
                                </div>
                            </div>
                        </div>
                        <div className="tutorial-banner-small__button-container">
                            <div className="btn pointer">
                                <span>Store</span>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <WeDeliverBanner/>
            <CategoriesLinksHome/>
        </main>
    );
}

export default Home;