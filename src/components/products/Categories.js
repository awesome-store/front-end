import React from 'react';
import Category from './Category';
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

function Categories() {
    return (
        <div className="categories-container">
            <h1 className="heading-primary">Categories</h1>
            <div className="categories">
                <Category url="bath" img={bath} title="BATH & FAUCETS"/>
                <Category url="decor" img={decor} title="DECOR"/>
                <Category url="paint" img={paint} title="PAINT"/>
                <Category url="building" img={building} title="BUILDING MATERIALS"/>
                <Category url="doors" img={doors} title="DOORS & WINDOWS"/>
                <Category url="electrical" img={electrical} title="ELECTRICAL"/>
                <Category url="flooring" img={flooring} title="FLOORING"/>
                <Category url="hardware" img={hardware} title="HARDWARE"/>
                <Category url="heating" img={heating} title="HEATING & COOLING"/>
                <Category url="seasonal" img={seasonal} title="SEASONAL"/>
                <Category url="lawn" img={lawn} title="LAWN & GARDEN"/>
                <Category url="fans" img={fans} title="CEILING FANS"/>
                <Category url="plumbing" img={plumbing} title="PLUMBING"/>
                <Category url="storage" img={storage} title="STORAGE"/>
                <Category url="appliances" img={appliances} title="APPLIANCES"/>
                <Category url="outdoor" img={outdoor} title="OUTDOOR LIVING"/>
                <Category url="kitchenware" img={kitchenware} title="KITCHENWARE"/>
            </div>
        </div>
    )
}

export default Categories;