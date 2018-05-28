import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import Footer from '../../components/Footer';
import Navigation from '../../components/Navigation';
import PageNotFound from '../../components/PageNotFound';
import Capabilities from '../../components/Capabilities';
import { getCurrentYear } from '../../utilities/helpers';
import ProjectThumbnails from '../../components/work/ProjectThumbnails';
import SideProjectThumbnails from '../../components/projects/ProjectThumbnails';

class ErrorPageLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            height: null
        };
    }

    addMetaTags = () => {
        return (
            <Helmet>
                <title>Bobby Patterson | Page Not Found</title>
                <meta name="robots" content="noindex, nofollow" />
                <meta name="description" content="Alright, so this page doesn't exist or maybe it used to but doesn't anymore, obviously. Sorry." />
                <meta name="keywords" content="Bobby Patterson, Full Stack Developer, Front-end Developer, UI designer, Tempe, Phoenix, Scottsdale" />
                <meta property="og:url" content="https://bobbypatterson.me/404-page-not-found" />
                <meta property="og:title" content="Bobby Patterson | Page Not Found" />
                <meta property="og:site_name" content="Bobby Patterson | Page Not Found" />
                <meta property="og:description" content="Alright, so this page doesn't exist or maybe it used to but doesn't anymore, obviously. Sorry." />
                <meta property="og:image" content="https://bobbypatterson.me/aboutme.jpg" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@bobbypatterson" />
                <meta name="twitter:creator" content="@bobbypatterson" />
                <meta name="twitter:title" content="Bobby Patterson | Page Not Found" />
                <meta name="twitter:description" content="Alright, so this page doesn't exist or maybe it used to but doesn't anymore, obviously. Sorry." />
                <meta name="twitter:image" content="https://bobbypatterson.me/aboutme.jpg" />
                <link rel="canonical" href="https://bobbypatterson.me/404-page-not-found" />
            </Helmet>
        );
    }

    getHeaderHeight = () => {
        const header = document.querySelector('header').offsetHeight;
        const headerStyle = {
            width: '100%',
            height: header
        }

        this.setState({
            height: headerStyle
        })
    }

    componentDidMount() {
        this.getHeaderHeight();
    }

    render() {
        const { height } = this.state;
        const { history } = this.props;

        return (
            <div className="Home">
                { this.addMetaTags() }
                <header style={height} className="flex flex-wrap vh-100">
                    <PageNotFound />
                    <div className="bg-image">
                        <div className="image error"></div>
                    </div>
                </header>
                <section className="flex flex-wrap w-full bg-white slant-top">
                    <Navigation {...this.props} />
                    <section id="projects" className="flex flex-wrap w-full bg-white">
                        <div className="container mx-auto">
                            <div className="projects mtb-6">
                                <h2 className="xl-text-size text-black fw-bold flex">Recent Side Projects</h2>
                                <div className="md-text-size flex text-light-gray fw-semi-bold mb-1">{`2017 – ${ getCurrentYear() }`}</div>
                                <div className="line-seperator mb-2 bg-black faded"></div>
                                <SideProjectThumbnails history={history} />
                            </div>
                        </div>
                    </section>
                    <section id="work" className="flex flex-wrap w-full bg-light-gray slant-top-reverse">
                        <div className="container mx-auto">
                            <div className="projects mtb-6">
                                <h2 className="xl-text-size text-black fw-bold flex">Featured Work Projects</h2>
                                <div className="md-text-size flex text-light-gray fw-semi-bold mb-1">{`2014 – ${ getCurrentYear() }`}</div>
                                <div className="line-seperator mb-2 bg-black faded"></div>
                                <ProjectThumbnails
                                    history={history}
                                    />
                            </div>
                        </div>
                    </section>
                    <section id="capabilities" className="flex flex-wrap w-full bg-white slant-top slant-top-bottom">
                        <Capabilities />
                    </section>
                </section>
                <section className="flex flex-wrap w-full bg-transparent">
                    <Footer />
                </section>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    isHidden: state.navigationReducer.isHidden,
    isScrolled: state.navigationReducer.isScrolled
});

export default connect(mapStateToProps)(ErrorPageLayout);
