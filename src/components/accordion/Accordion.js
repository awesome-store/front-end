import React, {useState, useRef} from 'react';
import Chevron from './Chevron';

function Accordion(props) {
    const [active, setActive] = useState("");
    const [height, setHeight] = useState("0px");
    const [rotate, setRotate] = useState("accordion__icon");

    const content = useRef(null);

    function toggleAccordion () {
        setActive(active === "" ? "active-accordion" : "");
        setHeight(active === "active-accordion" ? "0px" : `${content.current.scrollHeight}px`);
        setRotate(active === "active-accordion" ? "accordion__icon" : "accordion__icon rotate");
        console.log(content.current.scrollHeight);
    }

    return (
        <div className="accordion__section">
            <button className={`accordion ${active}`} onClick={() => toggleAccordion()}>
                <p className="accordion__title">{props.title}</p>
                <Chevron className={`${rotate}`} width={10} fill={"#777"} />
            </button>
            <div ref={content} style={{maxHeight: `${height}`}} className="accordion__content">
                <div className="accordion__text" dangerouslySetInnerHTML={{ __html: props.content }}></div>
            </div>
        </div>
    )
}

export default Accordion;