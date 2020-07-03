import React from 'react';
import Category from './Category';
import paint from '../img/paint.png';

function Categories() {
    return (
        <div className="categories-container">
            <h1 className="heading-primary">Categories</h1>
            <div className="categories">
                <Category img={paint} title="PAINT"/>
                <Category img={paint} title="PAINT"/>
                <Category img={paint} title="PAINT"/>
                <Category img={paint} title="PAINT"/>
                <Category img={paint} title="PAINT"/>
                <Category img={paint} title="PAINT"/>
            </div>
        </div>
    )
}

export default Categories;