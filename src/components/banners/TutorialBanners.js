import React from 'react';
import { Link } from 'react-router-dom';
import TutorialBanner from './TutorialBanner';
import TutorialBannerSmall from './TutorialBannerSmall';
import flowers from "../../img/flowers.png";
import vases from "../../img/vases.png";
import paint1 from "../../img/paint1.png";
import paint2 from "../../img/paint2.png";

function TutorialBanners() {
    return (
        <section className="tutorial-banner-container">
            <h2 className="heading-primary tutorial-banner-container__header">Inspire Yourself with Tutorials</h2>
            <div className="tutorial-banner-container__inner-container">
                <Link to="/">
                    <TutorialBanner products="6" minutes="2" header={<>Gardening<br/>tips & tricks</>} img={flowers} textColor="#FFFFFF"/>
                </Link>
                <Link to="/">
                    <TutorialBanner products="6" minutes="2" header={<>DIY<br/>Furniture<br/>Renovation</>} img={vases} textColor="#000000"/>
                </Link>
                <Link to="/">
                    <TutorialBannerSmall products="6" minutes="2" header={<>Picking<br/>perfect paint</>} img={paint1} textColor="#FFFFFF"/>
                </Link>
                <Link to="/">
                    <TutorialBannerSmall products="6" minutes="2" header="Painting 101" img={paint2} textColor="#000000"/>
                </Link>
            </div>
            <div className="tutorial-banner-small__button-container">
                <Link to="/store">
                    <div className="btn pointer">
                        <span>Store</span>
                    </div>
                </Link>
            </div>
        </section>
    )
}

export default TutorialBanners;