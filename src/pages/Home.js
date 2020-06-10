import React from "react";
import Product from "../components/Product";

function Home() {
    return (
        <main className="main">
            <div className="search-bar">
                <div className="search-bar__tag-item pointer">
                    <span>Doors</span>
                </div>
                <div className="search-bar__tag-item pointer">
                    <span>Furniture</span>
                </div>
                <div className="search-bar__tag-item pointer">
                    <span>Decore</span>
                </div>
                <div className="search-bar__tag-item pointer">
                    <span>Building material</span>
                </div>
                <div className="search-bar__tag-item pointer">
                    <span>Lawn</span>
                </div>
                <div className="search-bar__tag-item pointer">
                    <span>Ceiling Fans</span>
                </div>
                <div className="search-bar__tag-item pointer">
                    <span>Garden</span>
                </div>
                <div className="search-bar__tag-item pointer">
                    <span>Bath & Faucets</span>
                </div>
                <input placeholder="Search"/>
            </div>
            <div className="top-banner">
                <span>top banner</span>
            </div>
            <div className="items-in-store-banner">
                <div className="items-in-store-banner__inner-container">
                    <div className="items-in-store-banner__text-container">
                        <span className="items-in-store-banner__text">More Than 2 Million Items<br/>Available in Store</span>
                    </div>
                    <div className="items-in-store-banner__button pointer">
                        <span>Store</span>
                    </div>
                </div>
            </div>
            <section className="section-popular-products">
                <h2 className="heading-secondary">Popular Products</h2>
                <div className="products-container">
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
                </div>
            </section>
        </main>
    );
}

export default Home;