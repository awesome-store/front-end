import React from "react";
import Product from "../components/Product";
import drill from "../img/drill.png";
import paint from "../img/paint.png";
import screwdrivers from "../img/screwdrivers.jpg";
import toolkit from "../img/toolkit.png";
import vacuum from "../img/vacuum.png";
import card from "../img/card.png";
import flowers from "../img/flowers.png";

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
            <section className="home-page__banners-container">
                <div className="promotionnal-banner-small">
                    <div  className="promotionnal-banner-small__text-container promotionnal-banner-small__text-container--purple">
                        <span className="promotionnal-banner-small__header">50% Off Select Dyson Vacuums</span>
                        <span className="promotionnal-banner-small__description">Free delivery. Today only</span>
                    </div>
                    <div className="promotionnal-banner-small__img-container">
                        <img className="promotionnal-banner-small__img" src={vacuum} alt="vacuum"/>
                    </div>
                </div>
                <div className="promotionnal-banner-small">
                    <div className="promotionnal-banner-small__text-container promotionnal-banner-small__text-container--blue">
                        <span className="promotionnal-banner-small__header">Financing Available</span>
                        <span className="promotionnal-banner-small__description">Up to 24 month financing. Terms & conditions apply</span>
                    </div>
                    <div className="promotionnal-banner-small__img-container">
                        <img className="promotionnal-banner-small__img" src={card} alt="card"/>
                    </div>
                </div>
            </section>
            <section>
                <h2 className="heading-secondary">Inspire Yourself with Tutorials</h2>
                <div className="tutorial-banner">
                    <img className="tutorial-banner__image" src={flowers} alt="flowers"/>
                    <span className="tutorial-banner__header">Gardening<br/>tips & tricks</span>
                    <div className="tutorial-banner__description">
                        <p>6 promoted product</p>
                        <p>2 min read</p>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Home;