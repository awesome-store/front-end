import React from 'react';
import Product from "./Product";
import drill from "../img/drill.png";
import paint from "../img/paint.png";
import screwdrivers from "../img/screwdrivers.png";
import toolkit from "../img/toolkit.png";

function PopularProducts() {
    return (
        <section className="section-popular-products">
            <h2 className="heading-primary">Popular Products</h2>
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
    )
}

export default PopularProducts;