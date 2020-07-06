import React from 'react';
import Product from "./Product";
import drill from "../../img/drill.png";
import paint from "../../img/paint.png";
import screwdrivers from "../../img/screwdrivers.png";
import toolkit from "../../img/toolkit.png";

function PopularProducts(props) {
    return (
        <section className={"product-cards-container " + props.className}>
            <h2 className="heading-primary">Popular Products</h2>
            <div className="product-cards">
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