import React from 'react';
import paint from '../img/paint.png';

function Categories() {
    return (
        <div className="categories-container">
            <h1 className="heading-primary">Categories</h1>
            <div className="categories">
                <div className="categories__item">
                    <img className="img-fluid" src={paint} alt="paint"/>
                    <p>PAINT</p>
                </div>
                <div className="categories__item">
                    <img className="img-fluid" src={paint} alt="paint"/>
                    <p>PAINT</p>
                </div>
                <div className="categories__item">
                    <img className="img-fluid" src={paint} alt="paint"/>
                    <p>PAINT</p>
                </div>
                <div className="categories__item">
                    <img className="img-fluid" src={paint} alt="paint"/>
                    <p>PAINT</p>
                </div>
                <div className="categories__item">
                    <img className="img-fluid" src={paint} alt="paint"/>
                    <p>PAINT</p>
                </div>
                <div className="categories__item">
                    <img className="img-fluid" src={paint} alt="paint"/>
                    <p>PAINT</p>
                </div>
            </div>
        </div>
    )
}

export default Categories;