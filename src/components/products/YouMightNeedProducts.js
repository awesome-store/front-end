import React from 'react';
import Product from "./Product";
import drill from "../../img/drill.png";
import paint from "../../img/paint.png";
import screwdrivers from "../../img/screwdrivers.png";
import toolkit from "../../img/toolkit.png";

function YouMightNeedProducts(props) {
    return (
        <section className={"product-cards-container " + props.className}>
            <h2 className="heading-primary">You Might Need Products</h2>
            <div className="product-cards">
                <Product img={drill}/>
                <Product img={paint}/>
                <Product img={toolkit}/>
                <Product img={screwdrivers}/>
            </div>
        </section>
    )
}

export default YouMightNeedProducts;