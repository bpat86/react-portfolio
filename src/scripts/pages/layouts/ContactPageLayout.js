import { connect } from 'react-redux';
import React, { Component } from 'react';
import Footer from '../../components/Footer';
import Navigation from '../../components/Navigation';

class ContactPageLayout extends Component {
	render() {
		return (
			<div className="Contact">
				<Navigation {...this.props} />
				<Footer />
			</div>
	    );
	}
}

const mapStateToProps = state => ({
    isHidden: state.navigationReducer.isHidden,
    isScrolled: state.navigationReducer.isScrolled
});

export default connect(mapStateToProps)(ContactPageLayout);
