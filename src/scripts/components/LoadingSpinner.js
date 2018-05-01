import React, { Component } from 'react';
import Loader from '../../assets/images/loading.svg';

export default class LoadingSpinner extends Component {
	render() {
		return (
			<div className="loading-container vh-100">
				<div className="loading flex-align-center absolute w-full mx-auto user-select">
					<img alt="Loading..." src={Loader} />
					<div className="text">Loading...</div>
				</div>
			</div>
	    );
	}
}
