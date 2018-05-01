import { connect } from 'react-redux';
import React, { Component } from 'react';
import Footer from '../../../components/Footer';
import Navigation from '../../../components/Navigation';
import SideProjectMedia from '../../../components/projects/ProjectMedia';
import { navigationIsHidden, navigationIsScrolled } from '../../../actions/navigationAction';

class ProjectPageLayout extends Component {
	render() {
        const { match, history } = this.props;

		return (
			<div>
				<Navigation {...this.props} />
				<SideProjectMedia
					match={match}
					history={history}
					/>
				<section className="flex flex-wrap w-full bg-transparent">
                    <Footer />
                </section>
			</div>
		)
	}
}

const mapStateToProps = state => ({
    isHidden: state.navigationReducer.isHidden,
    isScrolled: state.navigationReducer.isScrolled
});

export default connect(mapStateToProps)(ProjectPageLayout);
