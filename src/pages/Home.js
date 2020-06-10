import React from "react";
import Product from "../components/Product";
import drill from "../img/drill.png";
import paint from "../img/paint.png";
import screwdrivers from "../img/screwdrivers.jpg";
import toolkit from "../img/toolkit.png";

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
                <span>top banner</span>
            </div>
            <div className="top-banner">
                <div className="top-banner__inner-container">
                    <div className="top-banner__text-container">
                        <span className="top-banner__text">More Than 2 Million Items<br/>Available in Store</span>
                    </div>
                    <div className="top-banner__button pointer">
                        <span>Store</span>
                    </div>
                </div>
            </div>
            <section className="section-popular-products">
                <h2 className="heading-secondary">Popular Products</h2>
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
            <div className="home-page__banners-container">
                <div className="small-banner">
                    <div className="small-banner__text-container">
                        <span className="small-banner__header">50% Off Select Dyson Vacuums</span>
                        <span className="small-banner__description">Free delivery. Today only</span>
                    </div>
                    <div className="small-banner__img-container">
                        <img className="small-banner__img" src={drill} alt="drill"/>
                    </div>
                </div>
                <div className="small-banner">
                    <div className="small-banner__text-container">
                        <span className="small-banner__header">Financing Available</span>
                        <span className="small-banner__description">Up to 24 month financing. Terms & conditions apply</span>
                    </div>
                    <div className="small-banner__img-container">
                        <img className="small-banner__img" src={drill} alt="drill"/>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Home;