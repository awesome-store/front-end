import React from 'react';
import femaleAvatar from '../img/female-avatar.png';
import { ExternalLink } from 'react-external-link';

function ContactForm() {
    return (
        <div className="contact-form">
            <div className="contact-form__content">
                <div className="contact-form__leave-message-container">
                    <h3 className="contact-form__header">Leave us a message:</h3>
                    <input placeholder="Your name" className="contact-form__input input" />
                    <input placeholder="E-mail" className="contact-form__input input" />
                    <textarea placeholder="Message" className="contact-form__input input"></textarea>
                    <div className="contact-form__submit-btn btn btn--yellow pointer">
                        <span>Send</span>
                    </div>
                </div>
                <div className="contact-form__contacts-container">
                    <h3 className="contact-form__header">Or contact us directly:</h3>
                    <div className="contact-form__image-container">
                        <img className="contact-form__image" src={femaleAvatar} alt="avatar" />
                    </div>
                    <p className="contact-form__contact-person">DANA CHITANIS</p>
                    <p className="contact-form__contact-info">Customer Service</p>
                    <div className="contact-form__contact-info">
                        <a href="tel:(800) 123-45-67">
                            <p className="contact-form__phone-number">(800) 123-45-67</p>
                        </a>
                        <br/>
                        <a href="tel:(800) 123-45-68">
                            <p className="contact-form__phone-number">(800) 123-45-68</p>
                        </a>
                    </div>
                    <ExternalLink className="contact-form__email-link" href="mailto:mail@mail.com">
                        <span>mail@mail.com</span>
                    </ExternalLink>
                </div>
            </div>
        </div>
    )
}

export default ContactForm;