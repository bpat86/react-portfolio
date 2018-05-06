import React, { Component } from 'react';

export default class Capabilities extends Component {
    render() {
        return (
            <div className="container mx-auto">
                <div className="capabilities mtb-6">
                    <span className="lrg-text-size bold">Capabilities</span>
                    <span className="md-text-size flex faded mb-1">Things I use and/or tinker around with</span>
                    <div className="line-seperator mb-2 bg-black faded"></div>
                    <div className="flex grid w-full flex-align-center">
                        <img
                            alt="HTML5"
                            title="HTML5"
                            className="responsive-img"
                            src={require('../../assets/images/logos/capabilities/html5.svg')}
                            />
                        <img
                            alt="CSS3"
                            title="CSS3"
                            className="responsive-img"
                            src={require('../../assets/images/logos/capabilities/css3.svg')}
                            />
                        <img
                            alt="Sass"
                            title="Sass"
                            className="responsive-img"
                            src={require('../../assets/images/logos/capabilities/sass.svg')}
                            />
                        <img
                            alt="Javascript"
                            title="Javascript"
                            className="responsive-img"
                            src={require('../../assets/images/logos/capabilities/javascript.svg')}
                            />
                        <img
                            alt="jQuery"
                            title="jQuery"
                            className="responsive-img"
                            src={require('../../assets/images/logos/capabilities/jquery.svg')}
                            />
                        <img
                            alt="React.js"
                            title="React.js"
                            className="responsive-img"
                            src={require('../../assets/images/logos/capabilities/react.svg')}
                            />
                        <img
                            alt="Redux"
                            title="Redux"
                            className="responsive-img"
                            src={require('../../assets/images/logos/capabilities/redux.svg')}
                            />
                        <img
                            alt="Vue.js"
                            title="Vue.js"
                            className="responsive-img"
                            src={require('../../assets/images/logos/capabilities/vue.svg')}
                            />
                        <img
                            alt="Socket.io"
                            title="Socket.io"
                            className="responsive-img"
                            src={require('../../assets/images/logos/capabilities/socket-io.svg')}
                            />
                        <img
                            alt="Node.js"
                            title="Node.js"
                            className="responsive-img"
                            src={require('../../assets/images/logos/capabilities/nodejs.svg')}
                            />
                        <img
                            alt="Dojo"
                            title="Dojo"
                            className="responsive-img"
                            src={require('../../assets/images/logos/capabilities/dojo.svg')}
                            />
                        <img
                            alt="Laravel"
                            title="Laravel"
                            className="responsive-img"
                            src={require('../../assets/images/logos/capabilities/laravel.svg')}
                            />
                        <img
                            alt="MySQL"
                            title="MySQL"
                            className="responsive-img"
                            src={require('../../assets/images/logos/capabilities/mysql.svg')}
                            />
                        <img
                            alt="GitHub"
                            title="GitHub"
                            className="responsive-img"
                            src={require('../../assets/images/logos/capabilities/github.svg')}
                            />
                        <img
                            alt="Adobe Photoshop"
                            title="Adobe Photoshop"
                            className="responsive-img"
                            src={require('../../assets/images/logos/capabilities/adobe-photoshop.svg')}
                            />
                        <img
                            alt="Adobe Illustrator"
                            title="Adobe Illustrator"
                            className="responsive-img"
                            src={require('../../assets/images/logos/capabilities/adobe-illustrator.svg')}
                            />
                        <img
                            alt="Adobe Premiere"
                            title="Adobe Premiere"
                            className="responsive-img"
                            src={require('../../assets/images/logos/capabilities/adobe-premiere.svg')}
                            />
                        <img
                            alt="Adobe After Effects"
                            title="Adobe After Effects"
                            className="responsive-img"
                            src={require('../../assets/images/logos/capabilities/adobe-after-effects.svg')}
                            />
                    </div>
                </div>
            </div>
        );
    }
}
