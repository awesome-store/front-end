import React from 'react';
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
                <TutorialBanner products="6" minutes="2" header={["Gardening", <br/>, "tips & tricks"]} img={flowers} textColor="#FFFFFF"/>
                <TutorialBanner products="6" minutes="2" header={["DIY", <br/>, "Furniture", <br/>, "Renovation"]} img={vases} textColor="#000000"/>
                <TutorialBannerSmall products="6" minutes="2" header={["Picking",<br/>,"perfect paint"]} img={paint1} textColor="#FFFFFF"/>
                <TutorialBannerSmall products="6" minutes="2" header="Painting 101" img={paint2} textColor="#000000"/>
            </div>
            <div className="tutorial-banner-small__button-container">
                <div className="btn pointer">
                    <span>Store</span>
                </div>
            </div>
        </section>
    )
}

export default TutorialBanners;