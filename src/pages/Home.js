import React from "react";
import Product from "../components/Product";
import drill from "../img/drill.png";
import paint from "../img/paint.png";
import screwdrivers from "../img/screwdrivers.jpg";
import toolkit from "../img/toolkit.png";

function Home() {
    return (
        <main className="main">
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
            <div className="top-banner">
                <span>top banner</span>
            </div>
            <div className="top-slider">
                <div className="top-slider__inner-container">
                    <div className="top-slider__text-container">
                        <span className="top-slider__text">More Than 2 Million Items<br/>Available in Store</span>
                    </div>
                    <div className="top-slider__button pointer">
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
        </main>
    );
}

export default Home;