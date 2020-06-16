import React from 'react';

function Faq() {
    return (
        <div className="wrapper">
            <div className="wrapper__inside-container">
                <div className="faq">
                    <h1 className="heading-primary">FAQ</h1>
                    <div className="faq__items">
                        <div>
                            <p className="faq__item-container pointer">How do I request installation/measurement services?</p>
                        </div>
                        <div>
                            <p className="faq__item-container pointer">How do I make and verify payments?</p>
                        </div>
                        <div>
                            <p className="faq__item-container pointer">Where can I find my bill information?</p>
                        </div>
                        <div>
                            <p className="faq__item-container pointer">How do I check my order status?</p>
                        </div>
                        <div>
                            <p className="faq__item-container pointer">What's your policy on shipping?</p>
                        </div>
                        <div>
                            <p className="faq__item-container pointer">Whats' your policy on refunds?</p><p className="faq__item-container pointer">Whats' your policy on refunds?</p>
                        </div>
                        <div>
                        <p className="faq__item-container pointer">What's your policy on donations to charities?</p>
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
                            <div>
                                <h3>Or contact us directly:</h3>
                                <img alt="avatar"/>
                                <p>DANA CHITANIS</p>
                                <p>Customer Service</p>
                                <p>(800) 123-45-67</p>
                                <p>(800) 123-45-67</p>
                                <p>mail@mail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Faq;