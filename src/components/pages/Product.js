import React from 'react';
import YouMightNeedProducts from "../products/YouMightNeedProducts"
import WeDeliverBanner from '../banners/WeDeliverBanner';
import CategoriesLinksHome from '../CategoriesLinksHome';
import Reviews from '../Reviews';

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
                    <Reviews/>
                    <YouMightNeedProducts className="product__you-might-need-products"/>
                </div>
            </div>
            <WeDeliverBanner/>
            <CategoriesLinksHome/>
        </div>
    )
}

export default Product;