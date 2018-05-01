import { connect } from 'react-redux';
import React, { Component } from 'react';
import Footer from '../../components/Footer';
import AboutMe from '../../components/AboutMe';
import Navigation from '../../components/Navigation';
import VideoBackground from '../../components/VideoBackground';
import InstagramFeedContainer from '../../containers/InstagramFeedContainer';
import { navigationIsHidden, navigationIsScrolled } from '../../actions/navigationAction';

class AboutPageLayout extends Component {
	render() {
        const { history, showModal, isScrolled } = this.props;

		return (
			<div className="About">
				<header className="flex flex-wrap vh-100">
                    <AboutMe />
                    <span title="Keep scrolling :)" className={`scroll-down ${isScrolled ? "" : "animate"}`}></span>
                    <VideoBackground showModal={showModal} />
                </header>
                <section className="flex flex-wrap w-full bg-white slant--top slant--top--bottom">
                    <Navigation {...this.props} />
                    <div className="container mx-auto mtb-6">
                        <div>
                            <span className="lrg-text-size bold flex">My Life As It Appears on Instagram</span>
                            <span className="md-text-size faded flex mb-1">I don't expect you to care about my Instagram pics, I really just felt like using their API in a project. Click one to see the overlay!</span>
                            <div className="line-seperator mb-2 bg-black faded"></div>
                        </div>
					   <InstagramFeedContainer history={history} />
                    </div>
				</section>
                <section className="flex flex-wrap w-full bg-transparent">
                    <Footer />
                </section>
			</div>
	    );
	}
}

const mapStateToProps = state => ({
    showModal: state.instagramModalReducer.isModalOpen,
    isHidden: state.navigationReducer.isHidden,
    isScrolled: state.navigationReducer.isScrolled
});

export default connect(mapStateToProps)(AboutPageLayout);
