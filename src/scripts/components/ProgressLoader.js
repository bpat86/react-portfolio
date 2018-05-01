import React, { Component } from 'react';

export default class ProgressLoader extends Component {
    render() {
        return (
            <div
                id="yt-loading-progress-indicator"
                className="yt-loading-progress-indicator transparent"
                >
                <div className="yt-loading-progress-indicator-head">
                    <div className="first-indicator"></div>
                    <div className="second-indicator"></div>
                </div>
            </div>
        )
    }
}
