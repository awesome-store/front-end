import React from 'react';
import build from '../../img/build.jpg';
import paint from '../../img/paint.jpg';
import grow from '../../img/grow.jpg';
import organize from '../../img/organize.jpg';
import clean from '../../img/clean.jpg';
import decorate from '../../img/decorate.jpeg';

function Tutorials() {
    // let bg = "../../img/flowers.png";
    let bg = "./paint.png";
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
                                <div className="tutorials-container__tutorials-categories-item-img" style={{backgroundImage: `url(${bg})`}}>
                                    <p>1</p>
                                </div>
                                {/* <img className="tutorials-container__tutorials-categories-item-img img-fluid" src={ build } alt="build"/> */}
                                <p className="tutorials-container__tutorials-categories-item-header">Build</p>
                            </div>
                            <div className="tutorials-container__tutorials-categories-item">
                                <div className="tutorials-container__tutorials-categories-item-img" style={{backgroundImage: build}}></div>
                                {/* <img className="tutorials-container__tutorials-categories-item-img img-fluid" src={ paint } alt="paint"/> */}
                                <p className="tutorials-container__tutorials-categories-item-header">Paint</p>
                            </div>
                            <div className="tutorials-container__tutorials-categories-item">
                                <div className="tutorials-container__tutorials-categories-item-img" style={{backgroundImage: build}}></div>
                                {/* <img className="tutorials-container__tutorials-categories-item-img img-fluid" src={ grow } alt="grow"/> */}
                                <p className="tutorials-container__tutorials-categories-item-header">Grow</p>
                            </div>
                            <div className="tutorials-container__tutorials-categories-item">
                                <div className="tutorials-container__tutorials-categories-item-img" style={{backgroundImage: build}}></div>
                                {/* <img className="tutorials-container__tutorials-categories-item-img img-fluid" src={ organize } alt="organize"/> */}
                                <p className="tutorials-container__tutorials-categories-item-header">Organize</p>
                            </div>
                            <div className="tutorials-container__tutorials-categories-item">
                                <div className="tutorials-container__tutorials-categories-item-img" style={{backgroundImage: build}}></div>
                                {/* <img className="tutorials-container__tutorials-categories-item-img img-fluid" src={ clean } alt="clean"/> */}
                                <p className="tutorials-container__tutorials-categories-item-header">Clean</p>
                            </div>
                            <div className="tutorials-container__tutorials-categories-item">
                                <div className="tutorials-container__tutorials-categories-item-img" style={{backgroundImage: build}}></div>
                                {/* <img className="tutorials-container__tutorials-categories-item-img img-fluid" src={ decorate } alt="decorate"/> */}
                                <p className="tutorials-container__tutorials-categories-item-header">Decorate</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tutorials;