import React from 'react';
import YouMightNeedProducts from "../products/YouMightNeedProducts"
import WeDeliverBanner from '../banners/WeDeliverBanner';
import CategoriesLinksHome from '../CategoriesLinksHome';
import Reviews from '../Reviews';
import paint from '../../img/paint.png';
import paintInUse1 from '../../img/paint-in-use1.png';
import paintInUse2 from '../../img/paint-in-use2.png';
import paintInUse3 from '../../img/paint-in-use3.png';

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
                            <div>
                                <p className="product__title">Behr Premium Oak Hans Wegner</p>
                                <div>
                                    <p>$29.99</p>
                                    <p>/ gal</p>
                                </div>
                                <div>

                                </div>
                            </div>
                            <div>
                                <img src={paint} alt="paint"/>
                            </div>
                        </div>
                        <div>
                            <p>Cheese and wine pecorino roquefort. Cottage cheese cottage cheese st. agur blue cheese paneer macaroni cheese boursin bavarian bergkase caerphilly. Goat cauliflower cheese cheese and biscuits cauliflower cheese emmental cheeseburger macaroni cheese pepper jack. Taleggio st. agur blue cheese cottage cheese.

                            Lancashire stinking bishop caerphilly. Manchego taleggio parmesan cheese and wine roquefort cream cheese emmental danish fontina. Squirty cheese fondue pepper jack cheese and wine cheese slices mascarpone pepper jack emmental. Fromage frais.</p>
                            <div className="product__use-images">
                                <img src={paintInUse1} alt="paint in use 1"/>
                                <img src={paintInUse2} alt="paint in use 2"/>
                                <img src={paintInUse3} alt="paint in use 3"/>
                            </div>
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