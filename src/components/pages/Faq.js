import React from 'react';
import Accordion from '../accordion-new/Accordion';
import ContactForm from '../ContactForm';

function Faq() {
    return (
        <div className="wrapper">
            <div className="wrapper__inside-container">
                <div className="faq">
                    <h1 className="heading-primary">FAQ</h1>
                    <div className="faq__items">
                        <Accordion title="How do I request installation/measurement services">
                            <p>Cauliflower cheese pecorino cheese on toast. Rubber cheese queso danish fontina red leicester macaroni cheese lancashire who moved my cheese cheese on toast. Port-salut bavarian bergkase hard cheese cow hard cheese parmesan swiss lancashire. Manchego emmental cheesy feet.</p>
                        </Accordion>
                        <Accordion title="How do I make and verify payments?">
                            <p>Cauliflower cheese pecorino cheese on toast. Rubber cheese queso danish fontina red leicester macaroni cheese lancashire who moved my cheese cheese on toast. Port-salut bavarian bergkase hard cheese cow hard cheese parmesan swiss lancashire. Manchego emmental cheesy feet.</p>
                            <br/>
                            <p>Babybel fondue stilton. Cheesy grin cheese slices chalk and cheese boursin mascarpone roquefort dolcelatte blue castello. Airedale say cheese camembert de normandie babybel boursin danish fontina babybel who moved my cheese. Queso say cheese.</p>
                        </Accordion>
                        <Accordion title="Where can I find my bill information?">
                            <p>Cauliflower cheese pecorino cheese on toast. Rubber cheese queso danish fontina red leicester macaroni cheese lancashire who moved my cheese cheese on toast. Port-salut bavarian bergkase hard cheese cow hard cheese parmesan swiss lancashire. Manchego emmental cheesy feet.</p>
                            <br/>
                            <p>Babybel fondue stilton. Cheesy grin cheese slices chalk and cheese boursin mascarpone roquefort dolcelatte blue castello. Airedale say cheese camembert de normandie babybel boursin danish fontina babybel who moved my cheese. Queso say cheese.</p>
                        </Accordion>
                        <Accordion title="How do I check my order status?">
                            <p>Cauliflower cheese pecorino cheese on toast. Rubber cheese queso danish fontina red leicester macaroni cheese lancashire who moved my cheese cheese on toast. Port-salut bavarian bergkase hard cheese cow hard cheese parmesan swiss lancashire. Manchego emmental cheesy feet.</p>
                            <br/>
                            <p>Babybel fondue stilton. Cheesy grin cheese slices chalk and cheese boursin mascarpone roquefort dolcelatte blue castello. Airedale say cheese camembert de normandie babybel boursin danish fontina babybel who moved my cheese. Queso say cheese.</p>
                        </Accordion>
                        <Accordion title="What is your policy on shipping?">
                            <p>Cauliflower cheese pecorino cheese on toast. Rubber cheese queso danish fontina red leicester macaroni cheese lancashire who moved my cheese cheese on toast. Port-salut bavarian bergkase hard cheese cow hard cheese parmesan swiss lancashire. Manchego emmental cheesy feet.</p>
                            <br/>
                            <p>Babybel fondue stilton. Cheesy grin cheese slices chalk and cheese boursin mascarpone roquefort dolcelatte blue castello. Airedale say cheese camembert de normandie babybel boursin danish fontina babybel who moved my cheese. Queso say cheese.</p>
                        </Accordion>
                        <Accordion title="What is your policy on refunds?">
                            <p>Cauliflower cheese pecorino cheese on toast. Rubber cheese queso danish fontina red leicester macaroni cheese lancashire who moved my cheese cheese on toast. Port-salut bavarian bergkase hard cheese cow hard cheese parmesan swiss lancashire. Manchego emmental cheesy feet.</p>
                            <br/>
                            <p>Babybel fondue stilton. Cheesy grin cheese slices chalk and cheese boursin mascarpone roquefort dolcelatte blue castello. Airedale say cheese camembert de normandie babybel boursin danish fontina babybel who moved my cheese. Queso say cheese.</p>
                        </Accordion>
                        <Accordion title="What is your policy on donations to charities?">
                            <p>Cauliflower cheese pecorino cheese on toast. Rubber cheese queso danish fontina red leicester macaroni cheese lancashire who moved my cheese cheese on toast. Port-salut bavarian bergkase hard cheese cow hard cheese parmesan swiss lancashire. Manchego emmental cheesy feet.</p>
                            <br/>
                            <p>Babybel fondue stilton. Cheesy grin cheese slices chalk and cheese boursin mascarpone roquefort dolcelatte blue castello. Airedale say cheese camembert de normandie babybel boursin danish fontina babybel who moved my cheese. Queso say cheese.</p>
                        </Accordion>
                    </div>
                    <h2 className="heading-secondary">Feel free to contact us</h2>
                    <ContactForm/>
                </div>
            </div>
        </div>
    );
}

export default Faq;