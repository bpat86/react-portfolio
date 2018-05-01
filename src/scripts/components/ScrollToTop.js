import { Component } from 'react';
import { withRouter } from 'react-router-dom';

class ScrollToTop extends Component {
	componentDidUpdate(prevProps) {
		const { location } = this.props;
        const pageUrlHasChanged = location !== prevProps.location;
        const currentUrlContainsInstagramData = location.pathname.includes('_');
        const previousUrlContainsInstagramData = prevProps.location.pathname.includes('_');
        const bothUrlsContainInstagramData = currentUrlContainsInstagramData || previousUrlContainsInstagramData;

		if (pageUrlHasChanged && !bothUrlsContainInstagramData) {
            window.scrollTo(0, 0);
        }
	}

	render() {
		return this.props.children;
	}
}

export default withRouter(ScrollToTop);
