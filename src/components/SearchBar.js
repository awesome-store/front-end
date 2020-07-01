import React from 'react';

function SearchBar() {
    return (
        <div className="search-bar-container">
            <div className="search-bar-container__tag-item pointer">
                <span>Doors</span>
            </div>
            <div className="search-bar-container__tag-item pointer">
                <span>Furniture</span>
            </div>
            <div className="search-bar-container__tag-item pointer">
                <span>Decore</span>
            </div>
            <div className="search-bar-container__tag-item pointer">
                <span>Building material</span>
            </div>
            <div className="search-bar-container__tag-item pointer">
                <span>Lawn</span>
            </div>
            <div className="search-bar-container__tag-item pointer">
                <span>Ceiling Fans</span>
            </div>
            <div className="search-bar-container__tag-item pointer">
                <span>Garden</span>
            </div>
            <div className="search-bar-container__tag-item pointer">
                <span>Bath & Faucets</span>
            </div>
            <input className="search-bar-container__search-bar" placeholder="Search"/>
        </div>
    )
}

export default SearchBar;