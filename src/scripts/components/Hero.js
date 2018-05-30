import React, { Component } from 'react';
//import logo from '../../assets/images/logos/bobbypattersonWhite.svg';
import Name from './Name';

export default class Hero extends Component {
    constructor () {
        super()

        this.state = {
            text: "1Full2 1Stack2 1Developer2 1&2 1Designer2",
            print: "",
            interval: null,
            timer: null,
            isComplete: false
        }
    }

    writeText = () => {
        const { text } = this.state;
        const formattedText = text.split("");
        let print = "";

        const timer = setTimeout(() => {
            const interval = setInterval(() => {
                if (formattedText.length >= 1) {
                    if (formattedText[0] === "1") {
                        print += "<mark>";
                        formattedText.shift();
                    } else if (formattedText[0] === "2") {
                        print += "</mark>";
                        formattedText.shift();
                    } else {
                        print += formattedText.shift();
                        this.setState({ print });
                    }
                } else {
                    clearInterval(interval);
                    this.toggleClassHandler();
                }
            }, 60);
            this.setState({ interval });
        }, 750);
        this.setState({ timer });
    }

    resetHero = () => {
        const { interval, timer } = this.state;

        clearInterval(interval);
        clearTimeout(timer);
    }

    toggleClassHandler = () => {
        const typing = document.querySelector(".heroTitle");
        const timer = setTimeout(() => {
            this.setState({ isComplete: true });
        }, 10000);

        if (typing) {
            typing.classList.remove("typing");
            typing.classList.add("animate");
        }

        this.setState({ timer });
    }

    componentDidMount () {
        this.writeText();
    }

    componentWillUnmount() {
        this.resetHero();
    }

    render() {
        const { print, isComplete } = this.state;

        return (
        	<div className="hero flex-align-center w-full flex-column mt-1 px-3">
			    <div className="heroName">
                    <Name />
                </div>
                <div
                    className={`heroTitle ${isComplete ? "done" : "typing"}`}
                    dangerouslySetInnerHTML={{__html: print}}
                    />
            </div>
        );
    }
}
