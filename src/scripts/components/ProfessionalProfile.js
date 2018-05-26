import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SocialButtons from './SocialButtons';
import LinkArrow from './LinkArrow';
import Email from './Email';

export default class ProfessionalProfile extends Component {
    render() {
        return (
            <div className="container mx-auto flex-align-center nmt-8">
            	<div className="flex-align-center w-full flex-row-reverse">
                    <div className="col-3 flex-align-vertical-center mb-1">
                        <SocialButtons />
                    </div>
                    <div className="col-9 pr-3">
                        <h2 className="xl-text-size bold mb-1">Professional Profile</h2>
                        <div className="line-seperator mb-1 bg-white faded"></div>
    					<p className="intro lh-normal mb-2">Hello! I'm Bobby Patterson, a multidisciplinary developer and UI designer living in Tempe, Arizona. I have experience in all aspects of the development life-cycle, but I specialize in front-end development. I am experienced in an agency setting and I've built sites for smaller businesses. I have been fortunate in my career to have worked on projects for <Link title="Canon" className="paragraph-link bg-round" to="/work-projects/canon">Canon<LinkArrow /></Link>, <Link title="Toshiba" className="paragraph-link bg-round" to="/work-projects/toshiba">Toshiba<LinkArrow /></Link>, and <Link title="Kaiser Permanente" className="paragraph-link bg-round" to="/work-projects/kaiser-permanente">Kaiser Permanente<LinkArrow /></Link> as a designer or developer. I really enjoy finding solutions to complicated problems.</p>
                        <h2 className="xl-text-size bold mb-1">Get in Touch</h2>
                        <div className="line-seperator mb-1 bg-white faded"></div>
                        <p className="intro lh-normal mb-2">
                            <Email /><br/>
                            Message me on <a target="_blank" rel="noopener noreferrer" className="paragraph-link bg-round" href="https://www.linkedin.com/in/hello-bobby/">LinkedIn<LinkArrow /></a>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}
