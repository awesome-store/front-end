import React from 'react';
import Product from "./Product";
import drill from "../../img/drill.png";
import paint from "../../img/paint.png";
import screwdrivers from "../../img/screwdrivers.png";
import toolkit from "../../img/toolkit.png";
import cross from "../../img/icons/cross.svg";

function CategoryProducts(props) {
    return (
        <section className={"product-cards-container " + props.className}>
            <div className="category-products__header-container">
                <h2 className="heading-primary">{props.categoryName}</h2>
                <input className="search-input" placeholder="Search"/>
            </div>
            <div className="product-cards">
                <div className="category-products__category-products-sidebar">
                    <div className="category-products-sidebar__property-group">
                        <p className="category-products-sidebar__property-heading pointer">BRAND</p>
                        <div className="category-products-sidebar__property-item-container">
                            <p className="category-products-sidebar__property-item pointer">Any</p>
                            <img className="category-products-sidebar__property-item-cross pointer" src={cross} />
                        </div>
                        <div className="category-products-sidebar__property-item-container category-products-sidebar__property-item-container--active">
                            <p className="category-products-sidebar__property-item category-products-sidebar__property-item--active pointer">Behr</p>
                            <img className="category-products-sidebar__property-item-cross category-products-sidebar__property-item-cross--active pointer" src={cross} />
                        </div>
                        <div className="category-products-sidebar__property-item-container">
                            <p className="category-products-sidebar__property-item pointer">PPG</p>
                            <img className="category-products-sidebar__property-item-cross pointer" src={cross} />
                        </div>
                        <div className="category-products-sidebar__property-item-container">
                            <p className="category-products-sidebar__property-item pointer">Glidden</p>
                            <img className="category-products-sidebar__property-item-cross pointer" src={cross} />
                        </div>
                        <div className="category-products-sidebar__property-item-container">
                            <p className="category-products-sidebar__property-item pointer">Rust-Oleum</p>
                            <img className="category-products-sidebar__property-item-cross pointer" src={cross} />
                        </div>
                        <div className="category-products-sidebar__property-item-container">
                            <p className="category-products-sidebar__property-item pointer">Kitz</p>
                            <img className="category-products-sidebar__property-item-cross pointer" src={cross} />
                        </div>
                        <div className="category-products-sidebar__property-item-container">
                            <p className="category-products-sidebar__property-item pointer">Wagner</p>
                            <img className="category-products-sidebar__property-item-cross pointer" src={cross} />
                        </div>
                        <div className="category-products-sidebar__property-item-container">
                            <p className="category-products-sidebar__property-item pointer">Graco</p>
                            <img className="category-products-sidebar__property-item-cross pointer" src={cross} />
                        </div>
                        <div className="category-products-sidebar__property-item-container">
                            <p className="category-products-sidebar__property-item pointer">Plastidip</p>
                            <img className="category-products-sidebar__property-item-cross pointer" src={cross} />
                        </div>
                        <div className="category-products-sidebar__property-item-container">
                            <p className="category-products-sidebar__property-item pointer">3M</p>
                            <img className="category-products-sidebar__property-item-cross pointer" src={cross} />
                        </div>
                        <div className="category-products-sidebar__property-item-container">
                            <p className="category-products-sidebar__property-item pointer">Wooster Pro</p>
                            <img className="category-products-sidebar__property-item-cross pointer" src={cross} />
                        </div>
                        <div className="category-products-sidebar__property-item-container">
                            <p className="category-products-sidebar__property-item pointer">Varathane</p>
                            <img className="category-products-sidebar__property-item-cross pointer" src={cross} />
                        </div>
                    </div>
                    <div className="category-products-sidebar__property-group">
                        <p className="category-products-sidebar__property-heading">TYPE</p>
                        <div className="category-products-sidebar__property-item-container">
                            <p className="category-products-sidebar__property-item pointer">Any</p>
                            <img className="category-products-sidebar__property-item-cross pointer" src={cross} />  
                        </div>
                        <div className="category-products-sidebar__property-item-container">
                            <p className="category-products-sidebar__property-item pointer">Interior Paint</p>
                            <img className="category-products-sidebar__property-item-cross pointer" src={cross} />   
                        </div>
                        <div className="category-products-sidebar__property-item-container">
                            <p className="category-products-sidebar__property-item pointer">Exterior Paint</p>
                            <img className="category-products-sidebar__property-item-cross pointer" src={cross} />  
                        </div>
                        <div className="category-products-sidebar__property-item-container">
                            <p className="category-products-sidebar__property-item pointer">Primer</p>
                            <img className="category-products-sidebar__property-item-cross pointer" src={cross} />
                        </div>
                        <div className="category-products-sidebar__property-item-container category-products-sidebar__property-item-container--active">
                            <p className="category-products-sidebar__property-item pointer category-products-sidebar__property-item--active">Ceiling Paint</p> 
                            <img className="category-products-sidebar__property-item-cross category-products-sidebar__property-item-cross--active pointer" src={cross} />   
                        </div>
                        <div className="category-products-sidebar__property-item-container">
                            <p className="category-products-sidebar__property-item pointer">Spray</p>
                            <img className="category-products-sidebar__property-item-cross pointer" src={cross} /> 
                        </div>
                        <div className="category-products-sidebar__property-item-container">
                            <p className="category-products-sidebar__property-item pointer">Concrete & Garage Floor</p>
                            <img className="category-products-sidebar__property-item-cross pointer" src={cross} />
                        </div>
                        <div className="category-products-sidebar__property-item-container">
                            <p className="category-products-sidebar__property-item pointer">Masonry & Brick</p>
                            <img className="category-products-sidebar__property-item-cross pointer" src={cross} />
                        </div>
                        <div className="category-products-sidebar__property-item-container">
                            <p className="category-products-sidebar__property-item pointer">Roof Paint</p>
                            <img className="category-products-sidebar__property-item-cross pointer" src={cross} />
                        </div>
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