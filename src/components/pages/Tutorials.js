import React from 'react';
import build from '../../img/build.jpg';

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
                            <div className="tutorials-container__tutorials-categories-item">
                                <img className="img-fluid" src={ build } alt="build"/>
                                <p className="tutorials-container__tutorials-categories-item-header">Build</p>
                            </div>
                            <div className="tutorials-container__tutorials-categories-item">
                                <img className="img-fluid" src={ build } alt="build"/>
                                <p className="tutorials-container__tutorials-categories-item-header">Build</p>
                            </div>
                            <div className="tutorials-container__tutorials-categories-item">
                                <img className="img-fluid" src={ build } alt="build"/>
                                <p className="tutorials-container__tutorials-categories-item-header">Build</p>
                            </div>
                            <div className="tutorials-container__tutorials-categories-item">
                                <img className="img-fluid" src={ build } alt="build"/>
                                <p className="tutorials-container__tutorials-categories-item-header">Build</p>
                            </div>
                            <div className="tutorials-container__tutorials-categories-item">
                                <img className="img-fluid" src={ build } alt="build"/>
                                <p className="tutorials-container__tutorials-categories-item-header">Build</p>
                            </div>
                            <div className="tutorials-container__tutorials-categories-item">
                                <img className="img-fluid" src={ build } alt="build"/>
                                <p className="tutorials-container__tutorials-categories-item-header">Build</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tutorials;