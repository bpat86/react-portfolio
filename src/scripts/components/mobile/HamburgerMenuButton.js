import React, { Component } from 'react';

export default class HamburgerMenuButton extends Component {
    render() {
        const { toggleMobileMenuButton } = this.props;

        return (
            <div
                className="hamburger-menu-wrapper flex-align-vertical-center"
                onClick={() => toggleMobileMenuButton()}
                >
                <div className="hamburger-menu"></div>
            </div>
        );
    }
}
