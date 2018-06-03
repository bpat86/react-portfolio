import React, { Component } from 'react';
import Loader from '../../assets/images/loading.svg';

export default class LoadingSpinner extends Component {
	constructor(props) {
        super(props);
        this.state = {
            timer: null,
            isTakingTooLong: false
        };
    }

    toggleSillyMessage = () => {
        const timer = setTimeout(() => {
            this.setState({ isTakingTooLong: true });
        }, 3000);
        this.setState({ timer });
    }

    resetTimer = () => {
        const { timer } = this.state;

        clearTimeout(timer);
    }

    componentDidMount() {
		this.toggleSillyMessage();
    }

    componentWillUnmount() {
        this.resetTimer();
    }

	render() {
		const { isTakingTooLong } = this.state;

		return (
			<div className="loading-container vh-100">
				<div className="loading flex-align-center flex-column mx-auto user-select">
					<img alt="Loading..." src={Loader} />
					<div className="text">Loading...</div>
					{
						!isTakingTooLong ? null :
						<div className="md-text-size fw-semi-bold text-light-gray text-centered mt-05 px-8">It's going to Space! Can you give it a second to get back from Space?</div>
					}
				</div>
			</div>
	    );
	}
}
