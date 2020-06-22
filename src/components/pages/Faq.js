import React from 'react';
import caret from '../../img/icons/caret-down.svg';
import ContactForm from '../ContactForm';

function Faq() {
    return (
        <div className="wrapper">
            <div className="wrapper__inside-container">
                <div className="faq">
                    <h1 className="heading-primary">FAQ</h1>
                    <div className="faq__items">
                        <div className="faq__item-container pointer">
                            <div className="faq__item-top">
                                <p>How do I request installation/measurement services?</p>
                                <img className="caret" src={caret} alt="caret down"/>
                            </div>
                            <div className="faq__item-bottom">
                                <br/>
                                <p>Cauliflower cheese pecorino cheese on toast. Rubber cheese queso danish fontina red leicester macaroni cheese lancashire who moved my cheese cheese on toast. Port-salut bavarian bergkase hard cheese cow hard cheese parmesan swiss lancashire. Manchego emmental cheesy feet.</p>
                                <br/>
                                <p>Babybel fondue stilton. Cheesy grin cheese slices chalk and cheese boursin mascarpone roquefort dolcelatte blue castello. Airedale say cheese camembert de normandie babybel boursin danish fontina babybel who moved my cheese. Queso say cheese.</p>
                            </div>
                        </div>
                        <div className="faq__item-container pointer">
                            <div className="faq__item-top">
                                <p>How do I make and verify payments?</p>
                                <img className="caret" src={caret} alt="caret down"/>
                            </div>
                        </div>
                        <div className="faq__item-container pointer">
                            <div className="faq__item-top">
                                <p>Where can I find my bill information?</p>
                                <img className="caret" src={caret} alt="caret down"/>
                            </div>
                        </div>
                        <div className="faq__item-container pointer">
                            <div className="faq__item-top">
                                <p>How do I check my order status?</p>
                                <img className="caret" src={caret} alt="caret down"/>
                            </div>
                        </div>
                        <div className="faq__item-container pointer">
                            <div className="faq__item-top">
                                <p>What's your policy on shipping?</p>
                                <img className="caret" src={caret} alt="caret down"/>
                            </div>
                        </div>
                        <div className="faq__item-container pointer">
                            <div className="faq__item-top">
                                <p>Whats' your policy on refunds?</p>
                                <img className="caret" src={caret} alt="caret down"/>                                  
                            </div>
                        </div>
                        <div className="faq__item-container faq__item-container--last pointer">
                            <div className="faq__item-top">
                                <p>What's your policy on donations to charities?</p>
                                <img className="caret" src={caret} alt="caret down"/>       
                            </div>
                        </div>
                    </div>
                    <h2 className="heading-secondary">Feel free to contact us</h2>
                    <ContactForm/>
                </div>
            </div>
        </div>
    );
}

export default Faq;