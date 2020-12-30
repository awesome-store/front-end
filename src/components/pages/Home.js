import React from "react";
import SearchBar from "../SearchBar";
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
<<<<<<< HEAD
                    <section className="home-page__promotional-banner-container">
                        <div className="promotional-banner-small">
                            <div  className="promotional-banner-small__text-container promotional-banner-small__text-container--purple">
                                <span className="promotional-banner-small__header">50% Off Select<br/>Dyson Vacuums</span>
                                <span className="promotional-banner-small__description">Free delivery. Today only</span>
                            </div>
                            <div style={{backgroundImage: "url('https://raw.githubusercontent.com/awesome-store/front-end/master/src/img/vacuum.png')"}} className="promotional-banner-small__img-container">
                                {/* <img className="promotional-banner-small__img" src={vacuum} alt="vacuum"/> */}
                            </div>
                        </div>
                        <div className="promotional-banner-small">
                            <div className="promotional-banner-small__text-container promotional-banner-small__text-container--blue">
                                <span className="promotional-banner-small__header">Financing Available</span>
                                <span className="promotional-banner-small__description">Up to 24 month financing. Terms & conditions apply</span>
                            </div>
                            <div style={{backgroundImage: "url('https://raw.githubusercontent.com/awesome-store/front-end/master/src/img/card.png')"}}  className="promotional-banner-small__img-container">
                                {/* <img className="promotional-banner-small__img" src={card} alt="card"/> */}
                            </div>
                        </div>
                    </section>
=======
                    <PromotionalBanners className="home__promotional-banners"/>
>>>>>>> dev
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