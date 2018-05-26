import React, { Component } from 'react';
import LinkArrow from './LinkArrow';
import SocialButtons from './SocialButtons';
import Email from './Email';

export default class About extends Component {
    render() {
        return (
            <div className="container mx-auto mt-4 flex-align-center">
            	<div className="flex-align-center flex-row-reverse">
                    <div className="col-3 flex-align-vertical-center mb-1">
                        <SocialButtons />
                    </div>
                    <div className="col-9 pr-3">
                        <h2 className="xl-text-size bold mb-1">About Me</h2>
                        <div className="line-seperator mb-1 bg-white faded"></div>
                        <p className="intro lh-normal mb-2">I try not to take myself too seriously. I also try to maintain a healthy work/life balance, though it can be pretty difficult sometimes to not get completely <span className="strikeThrough">wrapped up in the shame spiral that is scrambling to learn the latest framework or some other new thing that every other developer has moved on to so I don't feel left behind</span> wrapped up in fun side projects. What can I say really, it's a labor of love.</p>
                        <p className="intro lh-normal mb-2">When not reclined in front of my laptop and getting minimal hours of sleep, I enjoy spending time with my friends & family, <span className="strikeThrough">using all my PTO days</span> traveling, playing my guitars (poorly), weight lifting, and engaging in the relentless pursuit of knowledge and happiness.</p>
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
