import React, { useState, useRef, useEffect } from 'react';
import Chevron from '../accordion/Chevron';

const Accordion = props => {
    const [active, setActive] = useState(false);
    const contentRef = useRef(null);

    useEffect(() => {
        contentRef.current.style.maxHeight = active ? `${contentRef.current.scrollHeight}px` : '0px'
    }, [contentRef, active])

    const toggleActive = () => {
        setActive(!active)
    }

    // const titleStyle = {
    //     fontWeight: 600,
    //     fontSize: '14px'
    // }

    return (
        <div className="accordion-section">
            <button className="accordion pointer" onClick={toggleActive}>
                <p className="accordion__title">{props.title}</p>
                <Chevron className={active ? 'accordion-icon rotate' : 'accordion-icon'} width={10} fill={"#777"}/>
            </button>
            <div
                ref={contentRef}
                className="accordion-content"
            >
                <div className="accordion__text">
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default Accordion;