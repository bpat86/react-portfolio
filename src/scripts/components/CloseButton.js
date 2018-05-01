import React, { Component } from 'react';

export default class CloseButton extends Component {
    render() {
        return (
            <button>
                <svg
                    width="25"
                    height="25"
                    viewBox="0 0 40 40"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        stroke="white"
                        strokeWidth="5"
                        strokeLinecap="round"
                        d="M 10,10 L 30,30 M 30,10 L 10,30"
                        >
                    </path>
                </svg>
            </button>
        )
    }
}
