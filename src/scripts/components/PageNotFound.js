import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SocialButtons from './SocialButtons';
import LinkArrow from './LinkArrow';
import Email from './Email';

export default class PageNotFound extends Component {
    render() {
        return (
            <div className="container mx-auto flex-align-center ">
                <div className="flex-align-center w-full flex-row-reverse">
                    <div className="col-3 flex-align-vertical-center mt-2">
                        <SocialButtons />
                    </div>
                    <div className="col-9 pr-3">
                        <div className="lrg-text-size bold">Page Not Found</div>
                        <span className="md-text-size faded flex mb-1">404 Page Error</span>
                        <div className="line-seperator mb-1 bg-white faded"></div>
                        <p className="intro lh-roomy mb-2">Alright, so this page doesn't exist or maybe it used to but doesn't anymore, obviously. Sorry. Anyways, allow me to introduce myself...</p>
                        <p className="intro lh-normal mb-2">Hello! I'm Bobby Patterson, a multidisciplinary developer and UI designer living in Tempe, Arizona. I have experience in all aspects of the development life-cycle, but I specialize in front-end development. I am experienced in an agency setting and I've built sites for smaller businesses. I have been fortunate in my career to have worked on projects for <Link title="Canon" className="paragraph-link bg-round" to="/work-projects/canon">Canon<LinkArrow /></Link>, <Link title="Toshiba" className="paragraph-link bg-round" to="/work-projects/toshiba">Toshiba<LinkArrow /></Link>, and <Link title="Kaiser Permanente" className="paragraph-link bg-round" to="/work-projects/kaiser-permanente">Kaiser Permanente<LinkArrow /></Link> as a designer or developer. I really enjoy finding solutions to complicated problems.</p>
                        <div className="lrg-text-size bold mb-1">Get in Touch</div>
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
