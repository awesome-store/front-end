import React from 'react';
import { Link } from 'react-router-dom';

function CategoryCard(props) {
    return (
        <Link to={`/store/${props.url}`}>
            <div className="category-cards__category-card">
                <img className="img-fluid" src={props.img} alt={props.img}/>
                <p>{props.title}</p>
            </div>
        </Link>
    )
}

export default CategoryCard;