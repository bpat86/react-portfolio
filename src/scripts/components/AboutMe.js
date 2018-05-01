import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LinkArrow from './LinkArrow';
import SocialButtons from './SocialButtons';

export default class About extends Component {
    render() {
        return (
            <div className="container mx-auto mt-4 flex-align-center">
            	<div className="flex-align-center flex-row">
                    <div className="col-3 flex-align-vertical-center mb-1">
                        <SocialButtons />
                    </div>
                    <div className="col-9 pr-3">
                        <div className="lrg-text-size bold mb-1">About Me</div>
                        <div className="line-seperator mb-1 bg-white faded"></div>
                        <p className="intro lh-normal mb-2">I try not to take myself <span className="italic">too</span> seriously. I attempt to maintain a healthy<span className="italic">-ish</span> work/life balance, but it can be pretty difficult sometimes to not get <span className="strikeThrough">wrapped up in the shame-spiral that is scrambling to learn the latest framework or some other new thing that every other developer has moved on to so I don't feel left behind</span> wrapped up in fun side projects.</p>
                        <p className="intro lh-normal mb-2">When not reclined in front of my laptop and getting minimal hours of sleep, I enjoy spending time with my friends & family, <span className="strikeThrough">using all my PTO days</span> traveling, playing my guitars (poorly), weight lifting, engaging in the relentless pursuit of knowledge and happiness.</p>
                        <div className="lrg-text-size bold mb-1">Get in Touch</div>
                        <div className="line-seperator mb-1 bg-white faded"></div>
                        <p className="intro lh-normal">Email me at <Link className="paragraph-link bg-round" to="mailto:bobbypatterson404@gmail.com">bobbypatterson404@gmail.com<LinkArrow /></Link></p>
                        <p className="intro lh-normal mb-2">Message me on <Link className="paragraph-link bg-round" to="https://www.linkedin.com/in/hello-bobby/">LinkedIn<LinkArrow /></Link></p>
    	            </div>
                </div>
            </div>
        );
    }
}
