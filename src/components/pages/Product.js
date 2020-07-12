import React from 'react';
import YouMightNeedProducts from "../products/YouMightNeedProducts"
import WeDeliverBanner from '../banners/WeDeliverBanner';
import CategoriesLinksHome from '../CategoriesLinksHome';
import Reviews from '../Reviews';
import paint from '../../img/paint.png';

function Product() {
    return (
        <div>
            <div className="wrapper">
                <div className="wrapper__inside-container">
                    <div className="breadcrumbs-container product-page__breadcrumbs-container align-self-start">
                        <p className="breadcrumbs-container__item breadcrumbs-container__item--parent pointer">Home</p>
                        <p className="breadcrumbs-container__arrow">→</p>
                        <p className="breadcrumbs-container__item breadcrumbs-container__item--parent pointer">Store</p>
                        <p className="breadcrumbs-container__arrow">→</p>
                        <p className="breadcrumbs-container__item">Paint</p>
                    </div>
                    <div className="product">
                        <div className="product__top">
                            <p className="product__title">Behr Premium Oak Hans Wegner</p>
                        </div>
                        <div>
                            <img src={paint} alt="paint"/>
                        </div>
                    </div>
                    <Reviews className="product-page__reviews"/>
                    <YouMightNeedProducts className="product-page__you-might-need-products"/>
                </div>
            </div>
            <WeDeliverBanner/>
            <CategoriesLinksHome/>
        </div>
    )
}

export default Product;