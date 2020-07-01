import React from 'react';
import TutorialBanners from './TutorialBanners';

function TwoMillionItemsBanner() {
    return (
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
    )
}

export default TwoMillionItemsBanner;