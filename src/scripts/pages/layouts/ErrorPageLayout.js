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
                <header style={height} className="flex flex-wrap vh-100">
                    <PageNotFound />
                    <div className="bg-image">
                        <div className="image error"></div>
                    </div>
                </header>
                <section className="flex flex-wrap w-full bg-white slant-top">
                    <Navigation {...this.props} />
                    <section className="flex flex-wrap w-full bg-white">
                        <div className="container mx-auto">
                            <div className="projects mtb-6">
                                <span className="lrg-text-size bold flex">Featured Work Projects</span>
                                <span className="md-text-size flex faded mb-1">{`2014 – ${ getCurrentYear() }`}</span>
                                <div className="line-seperator mb-2 bg-black faded"></div>
                                <SideProjectThumbnails history={history} />
                            </div>
                        </div>
                    </section>
                    <section className="flex flex-wrap w-full bg-light-gray slant-top-reverse">
                        <div className="container mx-auto">
                            <div className="projects mtb-6">
                                <span className="lrg-text-size bold flex">Recent Side Projects</span>
                                <span className="md-text-size flex faded mb-1">{`2017 – ${ getCurrentYear() }`}</span>
                                <div className="line-seperator mb-2 bg-black faded"></div>
                                <ProjectThumbnails
                                    history={history}
                                    />
                            </div>
                        </div>
                    </section>
                    <section className="flex flex-wrap w-full bg-white slant-top slant-top-bottom">
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
