import React from 'react';
import Accordion from '../accordion/Accordion';
import ContactForm from '../ContactForm';

function Faq() {
    return (
        <div className="wrapper">
            <div className="wrapper__inside-container">
                <div className="faq">
                    <h1 className="heading-primary">FAQ</h1>
                    <div className="faq__items">
                        <Accordion title="How do I request installation/measurement services?" content="<br/>
                                    <p>Cauliflower cheese pecorino cheese on toast. Rubber cheese queso danish fontina red leicester macaroni cheese lancashire who moved my cheese cheese on toast. Port-salut bavarian bergkase hard cheese cow hard cheese parmesan swiss lancashire. Manchego emmental cheesy feet.</p>
                                    <br/>
                                    <p>Babybel fondue stilton. Cheesy grin cheese slices chalk and cheese boursin mascarpone roquefort dolcelatte blue castello. Airedale say cheese camembert de normandie babybel boursin danish fontina babybel who moved my cheese. Queso say cheese.</p>" />
                        <Accordion title="How do I make and verify payments?" content="<br/>
                                    <p>Cauliflower cheese pecorino cheese on toast. Rubber cheese queso danish fontina red leicester macaroni cheese lancashire who moved my cheese cheese on toast. Port-salut bavarian bergkase hard cheese cow hard cheese parmesan swiss lancashire. Manchego emmental cheesy feet.</p>
                                    <br/>
                                    <p>Babybel fondue stilton. Cheesy grin cheese slices chalk and cheese boursin mascarpone roquefort dolcelatte blue castello. Airedale say cheese camembert de normandie babybel boursin danish fontina babybel who moved my cheese. Queso say cheese.</p>" />
                        <Accordion title="Where can I find my bill information?" content="<br/>
                                    <p>Cauliflower cheese pecorino cheese on toast. Rubber cheese queso danish fontina red leicester macaroni cheese lancashire who moved my cheese cheese on toast. Port-salut bavarian bergkase hard cheese cow hard cheese parmesan swiss lancashire. Manchego emmental cheesy feet.</p>
                                    <br/>
                                    <p>Babybel fondue stilton. Cheesy grin cheese slices chalk and cheese boursin mascarpone roquefort dolcelatte blue castello. Airedale say cheese camembert de normandie babybel boursin danish fontina babybel who moved my cheese. Queso say cheese.</p>" />
                        <Accordion title="How do I check my order status?" content="<br/>
                                    <p>Cauliflower cheese pecorino cheese on toast. Rubber cheese queso danish fontina red leicester macaroni cheese lancashire who moved my cheese cheese on toast. Port-salut bavarian bergkase hard cheese cow hard cheese parmesan swiss lancashire. Manchego emmental cheesy feet.</p>
                                    <br/>
                                    <p>Babybel fondue stilton. Cheesy grin cheese slices chalk and cheese boursin mascarpone roquefort dolcelatte blue castello. Airedale say cheese camembert de normandie babybel boursin danish fontina babybel who moved my cheese. Queso say cheese.</p>" />
                        <Accordion title="What is your policy on shipping?" content="<br/>
                                    <p>Cauliflower cheese pecorino cheese on toast. Rubber cheese queso danish fontina red leicester macaroni cheese lancashire who moved my cheese cheese on toast. Port-salut bavarian bergkase hard cheese cow hard cheese parmesan swiss lancashire. Manchego emmental cheesy feet.</p>
                                    <br/>
                                    <p>Babybel fondue stilton. Cheesy grin cheese slices chalk and cheese boursin mascarpone roquefort dolcelatte blue castello. Airedale say cheese camembert de normandie babybel boursin danish fontina babybel who moved my cheese. Queso say cheese.</p>" />
                        <Accordion title="What is your policy on refunds?" content="<br/>
                                    <p>Cauliflower cheese pecorino cheese on toast. Rubber cheese queso danish fontina red leicester macaroni cheese lancashire who moved my cheese cheese on toast. Port-salut bavarian bergkase hard cheese cow hard cheese parmesan swiss lancashire. Manchego emmental cheesy feet.</p>
                                    <br/>
                                    <p>Babybel fondue stilton. Cheesy grin cheese slices chalk and cheese boursin mascarpone roquefort dolcelatte blue castello. Airedale say cheese camembert de normandie babybel boursin danish fontina babybel who moved my cheese. Queso say cheese.</p>" />
                        <Accordion title="What is your policy on donations to charities?" content="<br/>
                                    <p>Cauliflower cheese pecorino cheese on toast. Rubber cheese queso danish fontina red leicester macaroni cheese lancashire who moved my cheese cheese on toast. Port-salut bavarian bergkase hard cheese cow hard cheese parmesan swiss lancashire. Manchego emmental cheesy feet.</p>
                                    <br/>
                                    <p>Babybel fondue stilton. Cheesy grin cheese slices chalk and cheese boursin mascarpone roquefort dolcelatte blue castello. Airedale say cheese camembert de normandie babybel boursin danish fontina babybel who moved my cheese. Queso say cheese.</p>" />
                    </div>
                    <h2 className="heading-secondary">Feel free to contact us</h2>
                    <ContactForm/>
                </div>
            </div>
        </div>
    );
}

export default Faq;