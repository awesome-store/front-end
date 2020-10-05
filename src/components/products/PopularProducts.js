import React from 'react';
import Product from "./Product";
import drill from "../../img/drill.png";
import paint from "../../img/paint.png";
import screwdrivers from "../../img/screwdrivers.png";
import toolkit from "../../img/toolkit.png";

function PopularProducts(props) {
    const products = [
        {
            image: drill,
            productTitle: "Ryobi Lithium-Ion Cordless Drill + Charger",
            price: "49.99",
            unit: "piece",
            rating: "4",
            id: 1
        },
        {
            image: paint,
            productTitle: "Glidden Fur Interior Antique Matte Finish",
            price: "29.99",
            unit: "piece",
            rating: "4",
            id: 2
        },
        {
            image: toolkit,
            productTitle: "DeWalt 20v Cordless Super Drill Kit",
            price: "29.99",
            unit: "piece",
            rating: "4",
            id: 3
        },
        {
            image: screwdrivers,
            productTitle: "Stanley Screwdriver Set Philips 6pcs",
            price: "29.99",
            unit: "piece",
            rating: "4",
            id: 4
        },
        {
            image: paint,
            productTitle: "Glidden Fur Interior Antique Matte Finish",
            price: "29.99",
            unit: "piece",
            rating: "4",
            id: 2
        },
        {
            image: screwdrivers,
            productTitle: "Stanley Screwdriver Set Philips 6pcs",
            price: "29.99",
            unit: "piece",
            rating: "4",
            id: 4
        },
        {
            image: toolkit,
            productTitle: "DeWalt 20v Cordless Super Drill Kit",
            price: "29.99",
            unit: "piece",
            rating: "4",
            id: 3
        },
        {
            image: drill,
            productTitle: "Ryobi Lithium-Ion Cordless Drill + Charger",
            price: "49.99",
            unit: "piece",
            rating: "4",
            id: 1
        }
    ];

    return (
        <section className={"product-cards-container " + props.className}>
            <h2 className="heading-primary">Popular Products</h2>
            <div className="product-cards">
                {
                    products.map((product, index) => {
                        return (
                            <Product
                            key={index}
                            img={products[index].image}
                            productTitle={products[index].productTitle}
                            price={products[index].price}
                            unit={products[index].unit}
                            rating={products[index].rating}
                            id={products[index].id}/>
                        )
                    })
                }
                {/* <Product img={drill}/>
                <Product img={paint}/>
                <Product img={toolkit}/>
                <Product img={screwdrivers}/>
                <Product img={paint}/>
                <Product img={screwdrivers}/>
                <Product img={toolkit}/>
                <Product img={drill}/> */}
            </div>
        </section>
    )
}

export default PopularProducts;