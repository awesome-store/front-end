import React from 'react';

function Home() {
    return (
        <main className="main">
            <div className="search-bar">
                <div className="search-bar__tag-item pointer">
                    <span>Doors</span>
                </div>
                <div className="search-bar__tag-item pointer">
                    <span>Furniture</span>
                </div>
                <div className="search-bar__tag-item pointer">
                    <span>Decore</span>
                </div>
                <div className="search-bar__tag-item pointer">
                    <span>Building material</span>
                </div>
                <div className="search-bar__tag-item pointer">
                    <span>Lawn</span>
                </div>
                <div className="search-bar__tag-item pointer">
                    <span>Ceiling Fans</span>
                </div>
                <div className="search-bar__tag-item pointer">
                    <span>Garden</span>
                </div>
                <div className="search-bar__tag-item pointer">
                    <span>Bath & Faucets</span>
                </div>
                <input placeholder="Search"/>
            </div>
            <section className="section-categories">
                <h2 className="heading-secondary">
                    Categories
                </h2>
                <div className="categories-cont">
                    <div className="categories-cont__item">
                        <p className="categories-cont__item-cat">Categories</p>
                    </div>
                    <div className="categories-cont__item">
                        <p className="categories-cont__item-cat">Categories</p>
                    </div>
                    {/* <div className="categories-cont__item">
                        <p className="categories-cont__item-cat">Categories</p>
                    </div>
                    <div className="categories-cont__item">
                        <p className="categories-cont__item-cat">Categories</p>
                    </div>
                    <div className="categories-cont__item">
                        <p className="categories-cont__item-cat">Categories</p>
                    </div>
                    <div className="categories-cont__item">
                        <p className="categories-cont__item-cat">Categories</p>
                    </div>
                    <div className="categories-cont__item">
                        <p className="categories-cont__item-cat">Categories</p>
                    </div>
                    <div className="categories-cont__item">
                        <p className="categories-cont__item-cat">Categories</p>
                    </div> */}
                </div>
            </section>
            {/* <div className="banner">
                <h1 className="heading-primary">More Than 2 Millions Items Available In Store</h1>
                <button className="btn-store"> Store
                </button>
            </div> */}
            <section className="section-popular-products">
                <h2 className="heading-secondary">
                    Popular Products
                </h2>
                <div className="products-cont">
                    <div className="products-cont__item">
                        <div className="products-cont__item-heading">Item</div>
                        <div className="products-cont__item-stars">5</div>
                        <div className="products-cont__item-price">0</div>
                    </div>
                    <div className="products-cont__item">
                        <div className="products-cont__item-heading">Item</div>
                        <div className="products-cont__item-stars">5</div>
                        <div className="products-cont__item-price">0</div>
                    </div>
                    <div className="products-cont__item">
                        <div className="products-cont__item-heading">Item</div>
                        <div className="products-cont__item-stars">5</div>
                        <div className="products-cont__item-price">0</div>
                    </div>
                    <div className="products-cont__item">
                        <div className="products-cont__item-heading">Item</div>
                        <div className="products-cont__item-stars">5</div>
                        <div className="products-cont__item-price">0</div>
                    </div>

                    {/* <div className="products-cont__item">
                        <div className="products-cont__item-heading">Item</div>
                        <div className="products-cont__item-stars">5</div>
                        <div className="products-cont__item-price">0</div>
                    </div>
                    <div className="products-cont__item">
                        <div className="products-cont__item-heading">Item</div>
                        <div className="products-cont__item-stars">5</div>
                        <div className="products-cont__item-price">0</div>
                    </div>
                    <div className="products-cont__item">
                        <div className="products-cont__item-heading">Item</div>
                        <div className="products-cont__item-stars">5</div>
                        <div className="products-cont__item-price">0</div>
                    </div>
                    <div className="products-cont__item">
                        <div className="products-cont__item-heading">Item</div>
                        <div className="products-cont__item-stars">5</div>
                        <div className="products-cont__item-price">0</div>
                    </div>

                    <div className="products-cont__item">
                        <div className="products-cont__item-heading">Item</div>
                        <div className="products-cont__item-stars">5</div>
                        <div className="products-cont__item-price">0</div>
                    </div>
                    <div className="products-cont__item">
                        <div className="products-cont__item-heading">Item</div>
                        <div className="products-cont__item-stars">5</div>
                        <div className="products-cont__item-price">0</div>
                    </div>
                    <div className="products-cont__item">
                        <div className="products-cont__item-heading">Item</div>
                        <div className="products-cont__item-stars">5</div>
                        <div className="products-cont__item-price">0</div>
                    </div>
                    <div className="products-cont__item">
                        <div className="products-cont__item-heading">Item</div>
                        <div className="products-cont__item-stars">5</div>
                        <div className="products-cont__item-price">0</div>
                    </div> */}
                </div>
                <div className="wrapper">
                    <div className="btn-store">Click</div>
                </div>
            </section>
        </main>
    );
}

export default Home;