import React, { Component } from 'react';
import Loader from '../../assets/images/loading.svg';

export default class LoadingSpinner extends Component {
	render() {
		return (
			<div className="loading-container vh-100">
				<div className="loading flex-align-center flex-column mx-auto user-select">
					<img alt="Loading..." src={Loader} />
					<div className="text">Loading...</div>
					<div className="sm-text-size fw-semi-bold text-light-gray mt-05">It's going to Space! Can you give it a second to get back from Space?</div>
				</div>
			</div>
	    );
	}
}
