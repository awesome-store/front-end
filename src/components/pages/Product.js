import React, {useState} from 'react';
import YouMightNeedProducts from "../products/YouMightNeedProducts"
import WeDeliverBanner from '../banners/WeDeliverBanner';
import CategoriesLinksHome from '../CategoriesLinksHome';
import Reviews from '../Reviews';
import paint from '../../img/paint.png';
import paintInUse1 from '../../img/paint-in-use1.png';
import paintInUse2 from '../../img/paint-in-use2.png';
import paintInUse3 from '../../img/paint-in-use3.png';
import { useDispatch } from 'react-redux';
import { addtocart } from "../../redux/reducer";

function Product() {
    const productData = {
        image: paint,
        productTitle: "Behr Premium Oak Hans Wegner",
        price: "29.99",
        unit: "gal",
        rating: "4",
        id: 10
    }

    const dispatch = useDispatch();

    const [productAdded, setProductAdded] = useState(false);

    const addToCart = () => {
        const item = {
            image: productData.image,
            productTitle: productData.productTitle,
            price: productData.price,
            unit: productData.unit,
            rating: productData.rating,
            id: productData.id
        };
        setTimeout(() => setProductAdded(false), 1000);
        setProductAdded(true);
        dispatch(addtocart(item));
    }

    return (
        <>
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
                                <p className="product__title">{productData.productTitle}</p>
                                <div className="product__price-container">
                                    <p className="product__price">${productData.price}</p>
                                    <p className="product__price-unit">/ {productData.unit}</p>
                                </div>
                                <div className="product__quantity-info-container">
                                    <div>
                                        <p className="product__quantity-info-container-title">Type</p>
                                        <p className="product__quantity-info-container-info">Interior</p>
                                    </div>
                                    <div>
                                        <p className="product__quantity-info-container-title">Sheen</p>
                                        <p className="product__quantity-info-container-info">Semi-Glass</p>
                                    </div>
                                    <div>
                                        <p className="product__quantity-info-container-title">Surface use type</p>
                                        <p className="product__quantity-info-container-info">Drywall, Masonry, Plaster</p>
                                    </div>
                                    {/* <div>
                                        <p className="product__quantity-info-container-title">Quantity</p>
                                        <div className="product__quantity-container">
                                            <p className="product__quantity-value">1</p>
                                            <div className="product__quantity-buttons-container">
                                                <p className="product__quantity-buttons-container-buttons pointer">+</p>
                                                <p className="product__quantity-buttons-container-buttons pointer">-</p>
                                            </div>
                                        </div>
                                    </div> */}
                                    <div className="product__add-to-cart-btn btn pointer" onClick={() => addToCart()}>
                                        {
                                            (!productAdded) ? (
                                                <p>Add to Cart</p>
                                            ) : (
                                                <p>Added ✅</p>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                            <div>
                                <img className="img-fluid" src={productData.image} alt="paint"/>
                            </div>
                        </div>
                        <div className="product__product-info">
                            <p>Cheese and wine pecorino roquefort. Cottage cheese cottage cheese st. agur blue cheese paneer macaroni cheese boursin bavarian bergkase caerphilly. Goat cauliflower cheese cheese and biscuits cauliflower cheese emmental cheeseburger macaroni cheese pepper jack. Taleggio st. agur blue cheese cottage cheese.</p>
                            <br/>
                            <p>Lancashire stinking bishop caerphilly. Manchego taleggio parmesan cheese and wine roquefort cream cheese emmental danish fontina. Squirty cheese fondue pepper jack cheese and wine cheese slices mascarpone pepper jack emmental. Fromage frais.</p>
                        </div>
                        <div className="product__use-images">
                            <img className="img-fluid" src={paintInUse1} alt="paint in use 1"/>
                            <img className="img-fluid" src={paintInUse2} alt="paint in use 2"/>
                            <img className="img-fluid" src={paintInUse3} alt="paint in use 3"/>
                        </div>
                    </div>
                    <Reviews className="product-page__reviews"/>
                    <YouMightNeedProducts className="product-page__you-might-need-products"/>
                </div>
            </div>
            <WeDeliverBanner/>
            <CategoriesLinksHome/>
        </>
    )
}

export default Product;