import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Navigation from '../components/Navigation';

export default class NavigationContainer extends Component {
    render() {
        return (
            <div>
                <Navigation {...this.props} />
            </div>
        );
    }
}
