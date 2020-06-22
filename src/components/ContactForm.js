import React from 'react';
import femaleAvatar from '../img/female-avatar.png';
import { ExternalLink } from 'react-external-link';


function ContactForm() {
    return (
        <div className="faq-contact-form">
            <div className="faq-contact-form__content">
                <div className="faq-contact-form__leave-message-container">
                    <h3 className="faq-contact-form__header">Leave us a message:</h3>
                    <input placeholder="Your name" className="faq-contact-form__input input" />
                    <input placeholder="E-mail" className="faq-contact-form__input input" />
                    <textarea placeholder="Message" className="faq-contact-form__input input"></textarea>
                    <div className="faq-contact-form__submit-btn btn btn--yellow pointer">
                        <span>Send</span>
                    </div>
                </div>
                <div className="faq-contact-form__contacts-container">
                    <h3 className="faq-contact-form__header">Or contact us directly:</h3>
                    <div className="faq-contact-form__image-container">
                        <img className="faq-contact-form__image" src={femaleAvatar} alt="avatar" />
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
    )
}

export default ContactForm;