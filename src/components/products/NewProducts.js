import React from 'react';
import Product from "./Product";
import drill from "../../img/drill.png";
import paint from "../../img/paint.png";
import screwdrivers from "../../img/screwdrivers.png";
import toolkit from "../../img/toolkit.png";

function NewProducts(props) {
    return (
        <section className={"section-products " + props.className}>
            <h2 className="heading-primary">New Products</h2>
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

export default NewProducts;