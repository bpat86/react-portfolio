import React, { Component } from 'react';
import LinkArrow from './LinkArrow';

export default class Email extends Component {
    render() {
        return (
            <span>
                Email me at <a className="paragraph-link bg-round" href="mailto:&#098;&#111;&#098;&#098;&#121;&#112;&#097;&#116;&#116;&#101;&#114;&#115;&#111;&#110;&#052;&#048;&#052;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;">
                &#098;&#111;&#098;&#098;&#121;&#112;&#097;&#116;&#116;&#101;&#114;&#115;&#111;&#110;&#052;&#048;&#052;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;<LinkArrow /></a>
            </span>
        );
    }
}
