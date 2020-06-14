import React from "react";
import { Link } from 'react-router-dom';
import Product from "../components/Product";
import drill from "../img/drill.png";
import paint from "../img/paint.png";
import screwdrivers from "../img/screwdrivers.png";
import toolkit from "../img/toolkit.png";
// import vacuum from "../img/vacuum.png";
// import card from "../img/card.png";
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
                    <div className="top-banner__btn btn-store pointer">
                        <span>Store</span>
                    </div>
                </div>
            </div>
            <div className="wrapper">
                <div className="wrapper__inside-container">
                    <section className="section-popular-products">
                        <h2 className="section-popular-products__heading heading-secondary">Popular Products</h2>
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
                    <section className="home-page__promotional-banner-container">
                        <div className="promotional-banner-small">
                            <div  className="promotional-banner-small__text-container promotional-banner-small__text-container--purple">
                                <span className="promotional-banner-small__header">50% Off Select<br/>Dyson Vacuums</span>
                                <span className="promotional-banner-small__description">Free delivery. Today only</span>
                            </div>
                            <div className="promotional-banner-small__img-container">
                                {/* <img className="promotional-banner-small__img" src={vacuum} alt="vacuum"/> */}
                            </div>
                        </div>
                        <div className="promotional-banner-small">
                            <div className="promotional-banner-small__text-container promotional-banner-small__text-container--blue">
                                <span className="promotional-banner-small__header">Financing Available</span>
                                <span className="promotional-banner-small__description">Up to 24 month financing. Terms & conditions apply</span>
                            </div>
                            <div className="promotional-banner-small__img-container">
                                {/* <img className="promotional-banner-small__img" src={card} alt="card"/> */}
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <div className="wrapper home-page__tutorial-banner-wrapper">
                <div className="wrapper__inside-container">
                    <section className="tutorial-banner-container">
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
                        <div className="tutorial-banner-small__button-container">
                            <div className="btn-store pointer">
                                <span>Store</span>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
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
            <section className="home-page__categories-links-home-container">
                <div className="home-page__categories-links-home-inner-container">
                    <Link className="categories-links-home-container__categories-link">
                        <p className="categories-links-home-container__categories-link-text">Bath & Faucets</p>
                    </Link>
                    <Link className="categories-links-home-container__categories-link">
                        <p className="categories-links-home-container__categories-link-text">Doors & Windows</p>
                    </Link>
                    <Link className="categories-links-home-container__categories-link">
                        <p className="categories-links-home-container__categories-link-text">Hardware</p>
                    </Link>
                    <Link className="categories-links-home-container__categories-link">
                        <p className="categories-links-home-container__categories-link-text">Ceiling Fans</p>
                    </Link>
                    <Link className="categories-links-home-container__categories-link">
                        <p className="categories-links-home-container__categories-link-text">Kitchenware</p>
                    </Link>
                    <Link className="categories-links-home-container__categories-link">
                        <p className="categories-links-home-container__categories-link-text">Decor & Furniture</p>
                    </Link>
                    <Link className="categories-links-home-container__categories-link">
                        <p className="categories-links-home-container__categories-link-text">Electrical</p>
                    </Link>
                    <Link className="categories-links-home-container__categories-link">
                        <p className="categories-links-home-container__categories-link-text">Heating & Cooling</p>
                    </Link>
                    <Link className="categories-links-home-container__categories-link">
                        <p className="categories-links-home-container__categories-link-text">Plumbing</p>
                    </Link>
                    <Link className="categories-links-home-container__categories-link">
                        <p className="categories-links-home-container__categories-link-text">Appliances</p>
                    </Link>
                    <Link className="categories-links-home-container__categories-link">
                        <p className="categories-links-home-container__categories-link-text">Paint & Building materials</p>
                    </Link>
                    <Link className="categories-links-home-container__categories-link">
                        <p className="categories-links-home-container__categories-link-text">Flooring</p>
                    </Link>
                    <Link className="categories-links-home-container__categories-link">
                        <p className="categories-links-home-container__categories-link-text">Lawn & Garden</p>
                    </Link>
                    <Link className="categories-links-home-container__categories-link">
                        <p className="categories-links-home-container__categories-link-text">Seasonal & Outdoor living</p>
                    </Link>
                    <Link className="categories-links-home-container__categories-link">
                        <p className="categories-links-home-container__categories-link-text">Storage</p>
                    </Link>
                </div>
            </section>
        </main>
    );
}

export default Home;