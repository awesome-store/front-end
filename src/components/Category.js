import React from 'react';

function Category(props) {
    return (
        <div className="categories__item">
            <img className="img-fluid" src={props.img} alt={props.img}/>
            <p>{props.title}</p>
        </div>
    )
}

export default Category;