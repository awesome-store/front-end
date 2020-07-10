import React from 'react';
import YouMightNeedProducts from "../products/YouMightNeedProducts"
import WeDeliverBanner from '../banners/WeDeliverBanner';
import CategoriesLinksHome from '../CategoriesLinksHome';

function Product() {
    return (
        <div>
            <div className="wrapper">
                <div className="wrapper__inside-container">
                    <div className="breadcrumbs-container align-self-start">
                        <p className="breadcrumbs-container__item breadcrumbs-container__item--parent pointer">Home</p>
                        <p className="breadcrumbs-container__arrow">→</p>
                        <p className="breadcrumbs-container__item breadcrumbs-container__item--parent pointer">Store</p>
                        <p className="breadcrumbs-container__arrow">→</p>
                        <p className="breadcrumbs-container__item">Paint</p>
                    </div>
                    <div className="product"></div>
                    <YouMightNeedProducts/>
                </div>
            </div>
            <CategoriesLinksHome/>
            <WeDeliverBanner/>
        </div>
    )
}

export default Product;