import React from 'react';
import Product from "./Product";
import drill from "../../img/drill.png";
import paint from "../../img/paint.png";
import screwdrivers from "../../img/screwdrivers.png";
import toolkit from "../../img/toolkit.png";

function CategoryProducts(props) {
    return (
        <section className={"product-cards-container " + props.className}>
            <div className="category-products__header-container">
                <h2 className="heading-primary">{props.categoryName}</h2>
                <input placeholder="Search"/>
            </div>
            <div className="category-products__category-products-sidebar">
                <div className="category-products-sidebar__property-group">
                    <p className="category-products-sidebar__property-heading">BRAND</p>
                    <p>Behr</p>
                    <p>PPG</p>
                    <p>Glidden</p>
                    <p>Rust-Oleum</p>
                    <p>Kitz</p>
                    <p>Wagner</p>
                    <p>Graco</p>
                    <p>Plastidip</p>
                    <p>3M</p>
                    <p>Wooster Pro</p>
                    <p>Varathane</p>
                </div>
                <div className="category-products-sidebar__property-group">
                    <p className="category-products-sidebar__property-heading">TYPE</p>
                    <p>Any</p>
                    <p>Interior Paint</p>
                    <p>Exterior Paint</p>
                    <p>Primer</p>
                    <p>Ceiling Paint</p>
                    <p>Spray</p>
                    <p>Concrete & Garage Floor</p>
                    <p>Masonry & Brick</p>
                    <p>Roof Paint</p>
                </div>
            </div>
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

export default CategoryProducts;