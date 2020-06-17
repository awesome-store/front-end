import React from 'react';
import femaleAvatar from '../img/female-avatar.png';
import caret from '../img/icons/caret-down.svg';
import { ExternalLink } from 'react-external-link';

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
                    <div className="faq-contact-form">
                        <h2 className="heading-secondary">Feel free to contact us</h2>
                        <div className="faq-contact-form__content">
                            <div className="faq-contact-form__leave-message-container">
                                <h3 className="faq-contact-form__header">Leave us a message:</h3>
                                <input placeholder="Your name" className="faq-contact-form__input input"/>
                                <input placeholder="E-mail" className="faq-contact-form__input input"/>
                                <textarea placeholder="Message" className="faq-contact-form__input input"></textarea>
                                <div className="faq-contact-form__submit-btn btn btn--yellow pointer">
                                    <span>Send</span>
                                </div>
                            </div>
                            <div className="faq-contact-form__contacts-container">
                                <h3 className="faq-contact-form__header">Or contact us directly:</h3>
                                <div className="faq-contact-form__image-container">
                                    <img className="faq-contact-form__image" src={femaleAvatar} alt="avatar"/>
                                </div>
                                <p className="faq-contact-form__contact-person">DANA CHITANIS</p>
                                <p className="faq-contact-form__contact-info">Customer Service</p>
                                <div className="faq-contact-form__contact-info">
                                    <p>(800) 123-45-67</p>
                                    <p>(800) 123-45-67</p>
                                </div>
                                <ExternalLink className="faq-contact-form__email-link" href="mailto:mail@mail.com">
                                    <span>mail@mail.com</span>
                                </ExternalLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Faq;