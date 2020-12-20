import React from 'react';
import { Link } from 'react-router-dom';

function CategoriesLinksHome() {
    return (
        <section className="home__categories-links-home-container">
            <div className="home__categories-links-home-inner-container">
                <Link to="/" className="categories-links-home-container__categories-link">
                    <p className="categories-links-home-container__categories-link-text">Bath & Faucets</p>
                </Link>
                <Link to="/" className="categories-links-home-container__categories-link">
                    <p className="categories-links-home-container__categories-link-text">Doors & Windows</p>
                </Link>
                <Link to="/" className="categories-links-home-container__categories-link">
                    <p className="categories-links-home-container__categories-link-text">Hardware</p>
                </Link>
                <Link to="/" className="categories-links-home-container__categories-link">
                    <p className="categories-links-home-container__categories-link-text">Ceiling Fans</p>
                </Link>
                <Link to="/" className="categories-links-home-container__categories-link">
                    <p className="categories-links-home-container__categories-link-text">Kitchenware</p>
                </Link>
                <Link to="/" className="categories-links-home-container__categories-link">
                    <p className="categories-links-home-container__categories-link-text">Decor & Furniture</p>
                </Link>
                <Link to="/" className="categories-links-home-container__categories-link">
                    <p className="categories-links-home-container__categories-link-text">Electrical</p>
                </Link>
                <Link to="/" className="categories-links-home-container__categories-link">
                    <p className="categories-links-home-container__categories-link-text">Heating & Cooling</p>
                </Link>
                <Link to="/" className="categories-links-home-container__categories-link">
                    <p className="categories-links-home-container__categories-link-text">Plumbing</p>
                </Link>
                <Link to="/" className="categories-links-home-container__categories-link">
                    <p className="categories-links-home-container__categories-link-text">Appliances</p>
                </Link>
                <Link to="/" className="categories-links-home-container__categories-link">
                    <p className="categories-links-home-container__categories-link-text">Paint & Building materials</p>
                </Link>
                <Link to="/" className="categories-links-home-container__categories-link">
                    <p className="categories-links-home-container__categories-link-text">Flooring</p>
                </Link>
                <Link to="/" className="categories-links-home-container__categories-link">
                    <p className="categories-links-home-container__categories-link-text">Lawn & Garden</p>
                </Link>
                <Link to="/" className="categories-links-home-container__categories-link">
                    <p className="categories-links-home-container__categories-link-text">Seasonal & Outdoor living</p>
                </Link>
                <Link to="/" className="categories-links-home-container__categories-link">
                    <p className="categories-links-home-container__categories-link-text">Storage</p>
                </Link>
            </div>
        </section>
    )
}

export default CategoriesLinksHome;