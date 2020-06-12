import React from "react";
import { Link } from 'react-router-dom';
import Product from "../components/Product";
import drill from "../img/drill.png";
import paint from "../img/paint.png";
import screwdrivers from "../img/screwdrivers.jpg";
import toolkit from "../img/toolkit.png";
import vacuum from "../img/vacuum.png";
import card from "../img/card.png";
import flowers from "../img/flowers.png";
import vases from "../img/vases.png";
import paint1 from "../img/paint1.png";
import paint2 from "../img/paint2.png";
import wedelivercar from "../img/we-deliver-car.png";

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
                    <div className="btn-store pointer">
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
            <section className="home-page__promotionnal-banner-container">
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
            <section className="home-page__tutorial-banner-container">
                <h2 className="heading-secondary tutorial-banner-container__header">Inspire Yourself with Tutorials</h2>
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
                <div className="home-page__button-container">
                    <div className="btn-store pointer">
                        <span>Store</span>
                    </div>
                </div>
            </section>
            <div className="we-deliver-banner">
                <div className="we-deliver-banner__content">
                    <p className="we-deliver-banner__text">WE DELIVER</p>
                    <img className="we-deliver-banner__image" src={wedelivercar} alt="We Deliver. Fast. Efficient. Free."/>
                </div>
                <div className="we-deliver-banner__button-container">
                    <div className="btn-store pointer">
                        <span>Find out more</span>
                    </div>
                </div>
            </div>
            <section className="home-page__categories-container">
                <Link>
                    <p>Bath & Faucets</p>
                </Link>
                <Link>
                    <p>Doors & Windows</p>
                </Link>
                <Link>
                    <p>Hardware</p>
                </Link>
                <Link>
                    <p>Ceiling Fans</p>
                </Link>
                <Link>
                    <p>Kitchenware</p>
                </Link>
                <Link>
                    <p>Decor & Furniture</p>
                </Link>
                <Link>
                    <p>Electrical</p>
                </Link>
                <Link>
                    <p>Heating & Cooling</p>
                </Link>
                <Link>
                    <p>Plumbing</p>
                </Link>
                <Link>
                    <p>Appliances</p>
                </Link>
                <Link>
                    <p>Paint & Building materials</p>
                </Link>
                <Link>
                    <p>Flooring</p>
                </Link>
                <Link>
                    <p>Lawn & Garden</p>
                </Link>
                <Link>
                    <p>Seasonal & Outdoor living</p>
                </Link>
                <Link>
                    <p>Storage</p>
                </Link>
            </section>
        </main>
    );
}

export default Home;