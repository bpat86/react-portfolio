import { connect } from 'react-redux';
import React, { Component } from 'react';
import Footer from '../../components/Footer';
import Navigation from '../../components/Navigation';
import InstagramSinglePageContainer from '../../containers/InstagramSinglePageContainer';

class InstagramPageLayout extends Component {
	render() {
		return (
			<div className="Instagram">
				<Navigation {...this.props} />
				<InstagramSinglePageContainer {...this.props} />
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

export default connect(mapStateToProps)(InstagramPageLayout);
