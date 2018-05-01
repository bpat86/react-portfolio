import { connect } from 'react-redux';
import React, { Component } from 'react';
import Footer from '../../components/Footer';
import Navigation from '../../components/Navigation';
import { navigationIsHidden, navigationIsScrolled } from '../../actions/navigationAction';

class ContactPageLayout extends Component {
	render() {
        const { history, isHidden } = this.props;

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
