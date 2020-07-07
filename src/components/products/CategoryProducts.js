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
            <div className="product-cards">
                <div className="category-products__category-products-sidebar">
                    <div className="category-products-sidebar__property-group">
                        <p className="category-products-sidebar__property-heading pointer">BRAND</p>
                        <p className="category-products-sidebar__property-item pointer">Any</p>
                        <p className="category-products-sidebar__property-item category-products-sidebar__property-item--active pointer">Behr x</p>
                        <p className="category-products-sidebar__property-item pointer">PPG</p>
                        <p className="category-products-sidebar__property-item pointer">Glidden</p>
                        <p className="category-products-sidebar__property-item pointer">Rust-Oleum</p>
                        <p className="category-products-sidebar__property-item pointer">Kitz</p>
                        <p className="category-products-sidebar__property-item pointer">Wagner</p>
                        <p className="category-products-sidebar__property-item pointer">Graco</p>
                        <p className="category-products-sidebar__property-item pointer">Plastidip</p>
                        <p className="category-products-sidebar__property-item pointer">3M</p>
                        <p className="category-products-sidebar__property-item pointer">Wooster Pro</p>
                        <p className="category-products-sidebar__property-item pointer">Varathane</p>
                    </div>
                    <div className="category-products-sidebar__property-group">
                        <p className="category-products-sidebar__property-heading">TYPE</p>
                        <p className="category-products-sidebar__property-item pointer">Any</p>
                        <p className="category-products-sidebar__property-item pointer">Interior Paint</p>
                        <p className="category-products-sidebar__property-item pointer">Exterior Paint</p>
                        <p className="category-products-sidebar__property-item pointer">Primer</p>
                        <p className="category-products-sidebar__property-item pointer category-products-sidebar__property-item--active">Ceiling Paint x</p>
                        <p className="category-products-sidebar__property-item pointer">Spray</p>
                        <p className="category-products-sidebar__property-item pointer">Concrete & Garage Floor</p>
                        <p className="category-products-sidebar__property-item pointer">Masonry & Brick</p>
                        <p className="category-products-sidebar__property-item pointer">Roof Paint</p>
                    </div>
                </div>
                <Product img={drill}/>
                <Product img={paint}/>
                <Product img={toolkit}/>
                <Product img={screwdrivers}/>
                <Product img={paint}/>
                <Product img={screwdrivers}/>
                <Product img={toolkit}/>
                <Product img={drill}/>
                <Product img={toolkit}/>
                <Product img={drill}/>
            </div>
            <div className="btn pointer justify-self-center">
                <span>Show More</span>
            </div>
        </section>
    )
}

export default CategoryProducts;