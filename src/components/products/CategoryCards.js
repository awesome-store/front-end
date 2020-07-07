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
    return (
        <div className={"category-cards-container " + props.className}>
            <h1 className="heading-primary">Categories</h1>
            <div className="category-cards">
                <CategoryCard url="bath" img={bath} title="BATH & FAUCETS"/>
                <CategoryCard url="decor" img={decor} title="DECOR"/>
                <CategoryCard url="paint" img={paint} title="PAINT"/>
                <CategoryCard url="building" img={building} title="BUILDING MATERIALS"/>
                <CategoryCard url="doors" img={doors} title="DOORS & WINDOWS"/>
                <CategoryCard url="electrical" img={electrical} title="ELECTRICAL"/>
                <CategoryCard url="flooring" img={flooring} title="FLOORING"/>
                <CategoryCard url="hardware" img={hardware} title="HARDWARE"/>
                <CategoryCard url="heating" img={heating} title="HEATING & COOLING"/>
                <CategoryCard url="seasonal" img={seasonal} title="SEASONAL"/>
                <CategoryCard url="lawn" img={lawn} title="LAWN & GARDEN"/>
                <CategoryCard url="fans" img={fans} title="CEILING FANS"/>
                <CategoryCard url="plumbing" img={plumbing} title="PLUMBING"/>
                <CategoryCard url="storage" img={storage} title="STORAGE"/>
                <CategoryCard url="appliances" img={appliances} title="APPLIANCES"/>
                <CategoryCard url="outdoor" img={outdoor} title="OUTDOOR LIVING"/>
                <CategoryCard url="kitchenware" img={kitchenware} title="KITCHENWARE"/>
            </div>
        </div>
    )
}

export default CategoryCards;