import React from 'react';
import { Link } from 'react-router-dom';
import build from '../../img/build.jpg';
import paint from '../../img/paint.jpg';
import grow from '../../img/grow.jpg';
import organize from '../../img/organize.jpg';
import clean from '../../img/clean.jpg';
import decorate from '../../img/decorate.jpeg';

function Tutorials() {
    return (
        <div className="tutorials">
            <div className="tutorials__top-screen">
                <div className="tutorials__top-screen-text-container">
                    <h1 className="tutorials__heading">DIY Home Projects</h1>
                    <p className="tutorials__top-screen-text">A DIY Home Project is the easiest way to liven up your space. We have DIY projects for every room in the house including the bedroom, kitchen, bathroom, and living room, not to mention outdoor</p>
                </div>
            </div>
            <div className="wrapper">
                <div className="wrapper__inside-container">
                    <div className="tutorials__tutorials-container">
                        <div className="tutorials-container__tutorials-categories-container">
                            <Link to="/tutorials/build">
                                <div className="tutorials-container__tutorials-categories-item">
                                    <div className="tutorials-container__tutorials-categories-item-img" style={{backgroundImage: `url(${build})`}}></div>
                                    <p className="tutorials-container__tutorials-categories-item-header">Build</p>
                                </div>
                            </Link>
                            <Link to="/tutorials/paint">
                                <div className="tutorials-container__tutorials-categories-item">
                                    <div className="tutorials-container__tutorials-categories-item-img" style={{backgroundImage: `url(${paint})`}}></div>
                                    <p className="tutorials-container__tutorials-categories-item-header">Paint</p>
                                </div>
                            </Link>
                            <Link to="/tutorials/grow">
                                <div className="tutorials-container__tutorials-categories-item">
                                    <div className="tutorials-container__tutorials-categories-item-img" style={{backgroundImage: `url(${grow})`}}></div>
                                    <p className="tutorials-container__tutorials-categories-item-header">Grow</p>
                                </div>
                            </Link>
                            <Link to="/tutorials/organize">
                                <div className="tutorials-container__tutorials-categories-item">
                                    <div className="tutorials-container__tutorials-categories-item-img" style={{backgroundImage: `url(${organize})`}}></div>
                                    <p className="tutorials-container__tutorials-categories-item-header">Organize</p>
                                </div>
                            </Link>
                            <Link to="/tutorials/clean">
                                <div className="tutorials-container__tutorials-categories-item">
                                    <div className="tutorials-container__tutorials-categories-item-img" style={{backgroundImage: `url(${clean})`}}></div>
                                    <p className="tutorials-container__tutorials-categories-item-header">Clean</p>
                                </div>
                            </Link>
                            <Link to="/tutorials/decorate">
                                <div className="tutorials-container__tutorials-categories-item">
                                    <div className="tutorials-container__tutorials-categories-item-img" style={{backgroundImage: `url(${decorate})`}}></div>
                                    <p className="tutorials-container__tutorials-categories-item-header">Decorate</p>
                                </div>
                            </Link>
                        </div>
                        <hr/>
                        <div className="tutorials-container__tutorials-grid-container">
                            <h1 className="heading-primary">Build</h1>
                            <div className="tutorials-container__tutorials-grid-item">
                                <div className="tutorials-grid-item__block tutorials-grid-item__top-left-big-block">
                                    <img className="img-fluid" src={decorate} alt="decorate"/>
                                    <p>TITLE</p>
                                </div>
                                <div className="tutorials-grid-item__block tutorials-grid-item__top-middle-small-block">
                                    <img className="img-fluid" src={decorate} alt="decorate"/>
                                    <p>TITLE</p>
                                </div>
                                <div className="tutorials-grid-item__block tutorials-grid-item__top-right-small-block">
                                    <img className="img-fluid" src={decorate} alt="build"/>
                                    <p>TITLE</p>
                                </div>
                                <div className="tutorials-grid-item__block tutorials-grid-item__bottom-left-small-block">
                                    <img className="img-fluid" src={decorate} alt="build"/>
                                    <p>TITLE</p>
                                </div>
                                <div className="tutorials-grid-item__block tutorials-grid-item__bottom-middle-small-block">
                                    <img className="img-fluid" src={decorate} alt="build"/>
                                    <p>TITLE</p>
                                </div>
                                <div className="tutorials-grid-item__block tutorials-grid-item__bottom-right-small-block">
                                    <img className="img-fluid" src={decorate} alt="build"/>
                                    <p>TITLE</p>
                                </div>
                            </div>
                            <div className="tutorials-grid-item__more-btn btn btn--yellow pointer">
                                <p>More</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tutorials;