import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../data/routes';
import taglines from '../data/taglines';
import * as types from '../constants/ActionTypes';
import MobileNavigation from '../components/mobile/MobileNavigation';
import HamburgerMenuButton from '../components/mobile/HamburgerMenuButton';
import { navigationIsHidden, navigationIsScrolled } from '../actions/navigationAction';

export default class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            primaryRoutes: [],
            isToggled: false,
            taglines: []
        };
    }

    navigationIsHidden = () => {
        const { dispatch, isHidden } = this.props;
        const newScrollPosition = window.scrollY;
        const maximumScrollLengthAchieved = this.previousScrollPosition > 60 || newScrollPosition > 60;
        const userIsScrolling = newScrollPosition > this.previousScrollPosition;

        if (userIsScrolling && maximumScrollLengthAchieved && !isHidden) {
            dispatch(navigationIsHidden(types.NAVIGATION_CHANGE_TYPES.HIDDEN));
        }
        if (!userIsScrolling && isHidden) {
            dispatch(navigationIsHidden(types.NAVIGATION_CHANGE_TYPES.VISIBLE));
            this.changeTagline();
        }

        this.previousScrollPosition = newScrollPosition;
    }

    navigationIsScrolled = () => {
        const { dispatch, isScrolled } = this.props;
        const newScrollPosition = window.scrollY;
        const maximumScrollLengthAchieved = this.previousScrollPosition > 60 || newScrollPosition > 60;

        if (maximumScrollLengthAchieved && !isScrolled) {
            dispatch(navigationIsScrolled(types.NAVIGATION_CHANGE_TYPES.SCROLLED_TO_TARGET));
        }
        if (!maximumScrollLengthAchieved && isScrolled) {
            dispatch(navigationIsScrolled(types.NAVIGATION_CHANGE_TYPES.NOT_SCROLLED_TO_TARGET));
        }

        this.previousScrollPosition = newScrollPosition;
    }

    clickHandler = (e) => {
        const dataLink = e.currentTarget.getAttribute("href");
        const scrollTop = document.documentElement.scrollTop;
        const url = window.location.pathname;

        if (dataLink === url && !scrollTop) {
            this.screenShake();
        }
    }

    screenShake = () => {
        const html = document.getElementsByTagName("html")[0];
        html.setAttribute("class", "shake");
        let timerid;

        if (timerid) {
            clearTimeout(timerid);
        }

        timerid = setTimeout(() => {
            html.setAttribute("class", "");
        }, 2000);
    }

    navigationBehaviorHandler = () => {
        this.navigationIsHidden();
        this.navigationIsScrolled();
    }

    setUpRoutes = () => {
        const getPrimaryRoutes = routes.routes.filter(el => {
            return el.route_class === 'primary';
        });

        this.setState({
            primaryRoutes: getPrimaryRoutes
        });
    }

    generateARandomNumber = (min, maximum) => {
        const randomNumber = Math.floor(Math.random() * (maximum - min + 1)) + min;
        return randomNumber;
    }

    taglineIsTooLong = (tagline) => {
        return tagline.offsetWidth >= 280;
    }

    changeTagline = () => {
        const tagline = document.querySelector('.tagline');
        const taglineArray = taglines.taglines;
        const tempTaglineLength = taglineArray.length - 1;
        const tempTagline = this.generateARandomNumber(0, tempTaglineLength);
        const newTagline = taglineArray[tempTagline];
        const navLogo = document.querySelector('.logo');

        this.setState({
            taglines: newTagline
        });

        if (! tagline.classList.contains("f-sm") && this.taglineIsTooLong(tagline)) {
            tagline.classList.add("f-sm");
        } else {
            tagline.classList.remove("f-sm");
        }

        navLogo.addEventListener('mouseleave', this.changeTagline, false);
    }

    toggleMobileMenuButton = () => {
        const { isToggled } = this.state;
        const hamburgerMenuButton = document.querySelector(".hamburger-menu");

        hamburgerMenuButton.classList.toggle("animate");

        this.setState({
            isToggled: !isToggled
        });

        this.toggleClassHandler(!isToggled);
    }

    toggleClassHandler = (isMobileMenuVisible) => {
        const html = document.getElementsByTagName("html")[0];
        html.setAttribute("class", `${isMobileMenuVisible ? "mobile-navigation-menu-visible" : ""}`);
    }

    addEventListeners = () => {
        window.addEventListener('scroll', this.navigationBehaviorHandler, false);
    }

    removeEventListeners = () => {
        const navLogo = document.querySelector('.logo');
        navLogo.removeEventListener('mouseleave', this.changeTagline, false);
        window.removeEventListener('scroll', this.navigationBehaviorHandler, false);
    }

    componentDidMount() {
        this.navigationBehaviorHandler();
        this.addEventListeners();
        this.changeTagline();
        this.setUpRoutes();
    }

    componentWillUnmount() {
        this.removeEventListeners();
    }

    render() {
        const { taglines, primaryRoutes, isToggled } = this.state;
        const { isHidden, isScrolled } = this.props;
        let classHide = isHidden ? " hide" : "";
        let classScrolled = isScrolled ? " scrolled" : "";

        return (
            <div>
                <div
                    className={`navigation-bar flex-align-vertical-center fixed z-index-3 border-top-gray${classHide}${classScrolled}`}
                    >
                	<div className="container mx-auto nmt-2">
                		<ul className="navigation list-style-none">
                			<li className="navigation-section">
                                <div className="logo">
                    				<Link
                                        to="/"
                                        onClick={isToggled ? this.toggleMobileMenuButton : null}
                                        >
                                        <h1
                                            className={`name-logo absolute ${isHidden ? "" : "animate"}`}
                                            >
                                            bobbypatterson:~$
                                        </h1>
                                        <div className="tagline absolute">{taglines}</div>
                                    </Link>
                                </div>
                			</li>
                			<li className="navigation-section primary flex desktop">
                                {
                                    primaryRoutes.filter(active => active.visible_in_menu)
                                        .map(route =>
                            				<Link
                                                key={route.id}
                                                to={route.path}
                                                className="navigation-link"
                                                name={route.route_data_name}
                                                data-links={route.route_data_name}
                                                onClick={(e) => this.clickHandler(e)}
                                                >
                                                {route.route_name}
                                            </Link>
                                        )
                                }
                			</li>
                            <li className="navigation-section primary flex mobile">
                                <div className="navigation-link">
                                    <HamburgerMenuButton
                                        toggleMobileMenuButton={this.toggleMobileMenuButton}
                                        isToggled={isToggled}
                                        />
                                </div>
                            </li>
                		</ul>
                	</div>
                </div>
                <MobileNavigation
                    isToggled={isToggled}
                    toggleMobileMenuButton={this.toggleMobileMenuButton}
                    />
            </div>
        );
    }
}
