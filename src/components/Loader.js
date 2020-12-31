import React from "react";
import loaderGif from "../img/loader.gif";

function Loader() {
    return (
        <div className="loader-container">
            <img className="loader-container__image" src={loaderGif} alt="loader animation"/>
        </div>
    )
}

export default Loader;