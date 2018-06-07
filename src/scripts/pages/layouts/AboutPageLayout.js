import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import Footer from '../../components/Footer';
import AboutMe from '../../components/AboutMe';
import Navigation from '../../components/Navigation';
import VideoBackground from '../../components/VideoBackground';
import InstagramFeedContainer from '../../containers/InstagramFeedContainer';

class AboutPageLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            height: null
        };
    }

    addMetaTags = () => {
        return (
            <Helmet>
                <title>Bobby Patterson | About Me</title>
                <meta name="robots" content="index, follow" />
                <meta name="description" content="I try not to take myself too seriously. I also try to maintain a healthy work/life balance, though it can be pretty difficult sometimes to not get completely wrapped up in fun side projects. What can I say really, it's a labor of love. When not reclined in front of my laptop and getting minimal hours of sleep, I enjoy spending time with my friends & family, traveling, playing my guitars (poorly), weight lifting, and engaging in the relentless pursuit of knowledge and happiness." />
                <meta name="keywords" content="Bobby Patterson, Full Stack Developer, Front-end Developer, UI designer, Tempe, Phoenix, Scottsdale" />
                <meta property="og:url" content="https://bobbypatterson.me/about" />
                <meta property="og:title" content="Bobby Patterson | About Me" />
                <meta property="og:site_name" content="Bobby Patterson | About Me" />
                <meta property="og:description" content="I try not to take myself too seriously. I also try to maintain a healthy work/life balance, though it can be pretty difficult sometimes to not get completely wrapped up in fun side projects. What can I say really, it's a labor of love. When not reclined in front of my laptop and getting minimal hours of sleep, I enjoy spending time with my friends & family, usi eling, playing my guitars (poorly), weight lifting, and engaging in the relentless pursuit of knowledge and happiness." />
                <meta property="og:image" content="https://bobbypatterson.me/aboutme.jpg" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@bobbypatterson" />
                <meta name="twitter:creator" content="@bobbypatterson" />
                <meta name="twitter:title" content="Bobby Patterson | About Me" />
                <meta name="twitter:description" content="I try not to take myself too seriously. I also try to maintain a healthy work/life balance, though it can be pretty difficult sometimes to not get completely wrapped up in fun side projects. What can I say really, it's a labor of love. When not reclined in front of my laptop and getting minimal hours of sleep, I enjoy spending time with my friends & family, usi eling, playing my guitars (poorly), weight lifting, and engaging in the relentless pursuit of knowledge and happiness." />
                <meta name="twitter:image" content="https://bobbypatterson.me/aboutme.jpg" />
                <link rel="canonical" href="https://bobbypatterson.me/about" />
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
        const { history, isMobile, showModal, isScrolled } = this.props;

		return (
			<div className="About">
                { this.addMetaTags() }
				<header style={height} className="flex flex-wrap vh-100">
                    <AboutMe />
                    <span title="Keep scrolling :)" className={`scroll-down ${isScrolled ? "" : "animate"}`}></span>
                    <VideoBackground
                        showModal={showModal}
                        isMobile={isMobile}
                        />
                </header>
                <section className="flex flex-wrap w-full bg-white slant-top slant-top-bottom">
                    <Navigation {...this.props} />
                    <div className="container mx-auto mt-3 mb-6">
                        <div>
                            <h2 className="xl-text-size text-black fw-bold flex">My Life As It Appears on Instagram</h2>
                            <div className="md-text-size text-gray flex mb-1">I don't expect you to care about my Instagram pics, I really just felt like using their soon-to-be deprecated API (deep sigh) in a project. Click one to see the overlay!</div>
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
    isMobile: state.environmentReducer.isMobile,
    showModal: state.instagramModalReducer.isModalOpen,
    isHidden: state.navigationReducer.isHidden,
    isScrolled: state.navigationReducer.isScrolled
});

export default connect(mapStateToProps)(AboutPageLayout);
