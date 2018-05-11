import React, { Component } from 'react';
import { getCurrentYear } from '../utilities/helpers';

export default class Footer extends Component {
	render() {
        return (
        	<div className="container mx-auto">
            	<div className="footer bg-transparent flex-align-center flex-column mt-6 mb-2">
					<div className="md-text-size text-centered">&copy; Bobby Patterson { getCurrentYear() }. All Rights Reserved.</div>
                    <div className="sm-text-size bold letter-spacing faded text-centered">Literally, all of them.</div>
				</div>
            </div>
        )
    }
}
