import React, { Component } from 'react';
import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import { connect } from 'react-redux';
import { initEnvironment } from '../actions/environmentAction';
import ErrorPageLayout from '../pages/layouts/ErrorPageLayout';
import HomePageLayout from '../pages/layouts/HomePageLayout';
import AboutPageLayout from '../pages/layouts/AboutPageLayout';
import ContactPageLayout from '../pages/layouts/ContactPageLayout';
import InstagramPageLayout from '../pages/layouts/InstagramPageLayout';
import ProjectPageLayout from '../pages/layouts/work/ProjectPageLayout';
import SideProjectPageLayout from '../pages/layouts/projects/ProjectPageLayout';

class ContentModalSwitch extends Component {
	previousLocation = this.props.location;

    componentWillUpdate(nextProps) {
        const { location } = this.props;
        const currentUrlContainsInstagramData = location.pathname.includes('_');
        const instagramPostReloaded = (nextProps.history.action !== 'POP') && ((! location.state) || (! location.state.showModal) || !currentUrlContainsInstagramData);

        if (instagramPostReloaded) {
        	this.previousLocation = this.props.location;
        }
    }

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(initEnvironment());
    }

	render() {
		const { location, isMobile } = this.props;
	    const isModal = !!(
            location.pathname.includes('_') &&
            this.previousLocation !== location &&
            !isMobile
	    )

	    return (
			<div>
			    <Switch location={isModal ? this.previousLocation : location}>
			        <Route exact path='/' component={HomePageLayout} />
			        <Route exact path='/work-projects/:project' component={ProjectPageLayout}></Route>
                    <Route exact path='/side-projects/:project' component={SideProjectPageLayout}></Route>
			        <Route exact path='/about' component={AboutPageLayout} />
			        {
                        isModal ?
                        <Route exact path='/about/instagram/:id/:user?' component={AboutPageLayout} /> :
                        <Route exact path='/about/instagram/:id/:user?' component={InstagramPageLayout} />
                    }
			        <Route exact path='/contact' component={ContactPageLayout} />
                    <Route exact path='/404-page-not-found' component={ErrorPageLayout} />
                    <Redirect to="/404-page-not-found" />
			    </Switch>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
    const { environmentReducer } = state;
    const { height, isMobile, width, initialPageLoading } = environmentReducer;

    return {
        height,
        isMobile,
        width,
        initialPageLoading
    };
}

export default connect(mapStateToProps)(ContentModalSwitch);
