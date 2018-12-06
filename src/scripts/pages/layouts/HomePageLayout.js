import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import Hero from '../../components/Hero';
import Footer from '../../components/Footer';
import Navigation from '../../components/Navigation';
import { getCurrentYear } from '../../utilities/helpers';
import Capabilities from '../../components/Capabilities';
import ProfessionalProfile from '../../components/ProfessionalProfile';
import ProjectThumbnails from '../../components/work/ProjectThumbnails';
import SideProjectThumbnails from '../../components/projects/ProjectThumbnails';

class HomePageLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            height: null
        };
    }

    addMetaTags = () => {
        return (
            <Helmet>
                <title>Bobby Patterson | Portfolio</title>
                <meta name="robots" content="index, follow" />
                <meta name="description" content="Hello! I'm Bobby Patterson, a multidisciplinary developer and UI designer living in Tempe, Arizona. I have experience in all aspects of the development life-cycle, but I specialize in front-end development. I am experienced in an agency setting and I've built sites for smaller businesses. I have been fortunate in my career to have worked on projects for Canon, Toshiba, and Kaiser Permanente as a designer or developer. I really enjoy finding solutions to complicated problems." />
                <meta name="keywords" content="Bobby Patterson, Full Stack Developer, Front-end Developer, UI designer, Tempe, Phoenix, Scottsdale" />
                <meta property="og:url" content="https://bobbypatterson.me" />
                <meta property="og:title" content="Bobby Patterson | Portfolio" />
                <meta property="og:site_name" content="Bobby Patterson | Portfolio" />
                <meta property="og:description" content="Hello! I'm Bobby Patterson, a multidisciplinary developer and UI designer living in Tempe, Arizona. I have experience in all aspects of the development life-cycle, but I specialize in front-end development. I am experienced in an agency setting and I've built sites for smaller businesses. I have been fortunate in my career to have worked on projects for Canon, Toshiba, and Kaiser Permanente as a designer or developer. I really enjoy finding solutions to complicated problems." />
                <meta property="og:image" content="https://bobbypatterson.me/aboutme.jpg" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@bobbypatterson" />
                <meta name="twitter:creator" content="@bobbypatterson" />
                <meta name="twitter:title" content="Bobby Patterson | Portfolio" />
                <meta name="twitter:description" content="Hello! I'm Bobby Patterson, a multidisciplinary developer and UI designer living in Tempe, Arizona. I have experience in all aspects of the development life-cycle, but I specialize in front-end development. I am experienced in an agency setting and I've built sites for smaller businesses. I have been fortunate in my career to have worked on projects for Canon, Toshiba, and Kaiser Permanente as a designer or developer. I really enjoy finding solutions to complicated problems." />
                <meta name="twitter:image" content="https://bobbypatterson.me/aboutme.jpg" />
                <link rel="canonical" href="https://bobbypatterson.me" />
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
        const { history, isScrolled, isMobile } = this.props;

		return (
			<div className="Home">
                { this.addMetaTags() }
                <header style={height} className="flex flex-wrap vh-100 will-change">
                    <Hero />
                    <ProfessionalProfile />
                    <span title="Keep scrolling :)" className={`scroll-down ${isScrolled ? "" : "animate"}`}></span>
                    <div className="bg-image">
                        <div className="image about-me"></div>
                    </div>
                </header>
                <section className="flex flex-wrap w-full">
                    <Navigation {...this.props} />
                    <section id="projects" className="flex flex-wrap w-full bg-white slant-top slant-top-bottom">
                        <div className="container mx-auto">
                            <div className="projects mt-3 mb-8">
                                <h2 className="xl-text-size text-black fw-bold flex">Recent Side Projects</h2>
                                <div className="md-text-size flex text-gray mb-1">{`2017 – ${ getCurrentYear() }`}</div>
                                <div className="line-seperator mb-2 bg-black faded"></div>
                                <SideProjectThumbnails history={history} />
                            </div>
                        </div>
                    </section>
                    <section id="work" className="flex flex-wrap w-full bg-light-gray slant-top-reverse">
                        <div className="container mx-auto">
                            <div className="projects mt-6 mb-8">
                                <h2 className="xl-text-size text-black fw-bold flex">Featured Work Projects</h2>
                                <div className="md-text-size flex text-gray mb-1">{`2014 – ${ getCurrentYear() }`}</div>
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
    isMobile: state.environmentReducer.isMobile,
    isHidden: state.navigationReducer.isHidden,
    isScrolled: state.navigationReducer.isScrolled
});

export default connect(mapStateToProps)(HomePageLayout);
