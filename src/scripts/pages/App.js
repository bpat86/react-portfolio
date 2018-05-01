import React, { Component } from 'react';
import ScrollToTop from '../components/ScrollToTop';
import ContentModalSwitch from '../components/ContentModalSwitch';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export default class App extends Component {
    progressLoader = () => {
        const progress = document.getElementById("loading-progress-indicator");

        if (progress) {
            setTimeout(() => {
                progress.classList.add("available")
                    setTimeout(() => {
                        const html = document.getElementsByTagName("html")[0];

                        html.setAttribute("class", "");
                        progress.outerHTML = "";
                    }, 250);
            }, 750);
        }
    }

    componentDidMount() {
        this.progressLoader();
    }

    render() {
        return (
            <Router>
                <ScrollToTop>
                    <Route component={ContentModalSwitch} />
                </ScrollToTop>
            </Router>
        )
    }
}
