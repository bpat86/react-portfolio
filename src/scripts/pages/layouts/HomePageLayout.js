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
	render() {
        const { history, isScrolled } = this.props;

		return (
			<div className="Home">
                <header className="flex flex-wrap vh-100">
                    <Hero />
                    <ProfessionalProfile />
                    <span title="Keep scrolling :)" className={`scroll-down ${isScrolled ? "" : "animate"}`}></span>
                    <div className="bg-image">
                        <div className="image about-me"></div>
                    </div>
                </header>
                <section className="flex flex-wrap w-full bg-white slant-top">
                    <Navigation {...this.props} />
                    <section id="projects" className="flex flex-wrap w-full bg-white">
                        <div className="container mx-auto">
                            <div className="projects mtb-6">
                                <span className="lrg-text-size bold flex">Recent Side Projects</span>
                                <span className="md-text-size flex faded mb-1">{`2017 – ${ getCurrentYear() }`}</span>
                                <div className="line-seperator mb-2 bg-black faded"></div>
                                <SideProjectThumbnails history={history} />
                            </div>
                        </div>
                    </section>
                    <section id="work" className="flex flex-wrap w-full bg-light-gray slant-top-reverse">
                        <div className="container mx-auto">
                            <div className="projects mtb-6">
                                <span className="lrg-text-size bold flex">Featured Work Projects</span>
                                <span className="md-text-size flex faded mb-1">{`2017 – ${ getCurrentYear() }`}</span>
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

export default connect(mapStateToProps)(HomePageLayout);
