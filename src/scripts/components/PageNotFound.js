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
                    <div className="col-3 flex-align-center">
                        <SocialButtons />
                    </div>
                    <div className="col-9 pr-3">
                        <div className="xl-text-size fw-bold mb-1">Page Not Found</div>
                        <div className="line-seperator mb-1 bg-white faded"></div>
                        <p className="intro lh-roomy mb-2">Alright, so the page you're trying to reach doesn't exist anymore but it probably used to. Yeeeesh, how awkward is this?</p>
                        <div className="xl-text-size fw-bold mb-1">Get in Touch</div>
                        <div className="line-seperator mb-1 bg-white faded"></div>
                        <p className="intro lh-normal">
                            <Email /><br/>
                            Message me on <a target="_blank" rel="noopener noreferrer" className="paragraph-link bg-round" href="https://www.linkedin.com/in/hello-bobby/">LinkedIn<LinkArrow /></a>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}
