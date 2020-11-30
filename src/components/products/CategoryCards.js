import React from 'react';
import CategoryCard from './CategoryCard';
import bath from '../../img/categories/bath-faucets.svg';
import decor from '../../img/categories/decor-furniture.svg';
import paint from '../../img/categories/paint.svg';
import building from '../../img/categories/building-materials.svg';
import doors from '../../img/categories/doors-windows.svg';
import electrical from '../../img/categories/electrical.svg';
import flooring from '../../img/categories/flooring.svg';
import hardware from '../../img/categories/hardware.svg';
import heating from '../../img/categories/heating-cooling.svg';
import seasonal from '../../img/categories/seasonal.svg';
import lawn from '../../img/categories/lawn-garden.svg';
import fans from '../../img/categories/ceiling-fans.svg';
import plumbing from '../../img/categories/plumbing.svg';
import storage from '../../img/categories/storage.svg';
import appliances from '../../img/categories/appliances.svg';
import outdoor from '../../img/categories/outdoor-living.svg';
import kitchenware from '../../img/categories/kitchenware.svg';

function CategoryCards(props) {
    const cardsData = [
        {
            url: "bath",
            img: bath,
            title: "BATH & FAUCETS"
        },
        {
            url: "decor",
            img: decor,
            title: "DECOR"
        },
        {
            url: "paint",
            img: paint,
            title: "PAINT"
        },
        {
            url: "building",
            img: building,
            title: "BUILDING MATERIALS"
        },
        {
            url: "doors",
            img: doors,
            title: "DOORS & WINDOWS"
        },
        {
            url: "electrical",
            img: electrical,
            title: "ELECTRICAL"
        },
        {
            url: "flooring",
            img: flooring,
            title: "FLOORING"
        },
        {
            url: "hardware",
            img: hardware,
            title: "HARDWARE"
        },
        {
            url: "heating",
            img: heating,
            title: "HEATING & COOLING"
        },
        {
            url: "seasonal",
            img: seasonal,
            title: "SEASONAL"
        },
        {
            url: "lawn",
            img: lawn,
            title: "LAWN & GARDEN"
        },
        {
            url: "fans",
            img: fans,
            title: "CEILING FANS"
        },
        {
            url: "plumbing",
            img: plumbing,
            title: "PLUMBING"
        },
        {
            url: "storage",
            img: storage,
            title: "STORAGE"
        },
        {
            url: "appliances",
            img: appliances,
            title: "APPLIANCES"
        },
        {
            url: "outdoor",
            img: outdoor,
            title: "OUTDOOR LIVING"
        },
        {
            url: "kitchenware",
            img: kitchenware,
            title: "KITCHENWARE"
        }
    ]

    const cards = cardsData.map((card, index) =>
        <CategoryCard key={index} url={card.url} img={card.img} title={card.title}/>
    )

    return (
        <div className={"category-cards-container " + props.className}>
            <h1 className="heading-primary">Categories</h1>
            <div className="category-cards">
                { cards }
            </div>
        </div>
    )
}

export default CategoryCards;