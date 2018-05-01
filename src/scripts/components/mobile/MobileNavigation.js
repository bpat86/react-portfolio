import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../../data/routes';

export default class MobileNavigation extends Component {
    constructor(props){
        super(props);
        this.state = {
            primaryRoutes: []
        };
    }

    setUpRoutes = () => {
        const getPrimaryRoutes = routes.routes.filter(el => {
            return el.route_class === 'primary';
        });

        this.setState({
            primaryRoutes: getPrimaryRoutes
        });
    }

    componentDidMount() {
        this.setUpRoutes();
    }

    render() {
        const { primaryRoutes } = this.state;
        const { isToggled, toggleMobileMenuButton } = this.props;

        return (
            <div className={`mobile-navigation-menu mobile flex-align-center fixed z-index-2 ${isToggled ? "show" : ""}`}>
                <ul className="mobile-navigation list-style-none">
                    <li className="mobile-navigation-section flex-align-center flex-column">
                        {
                            primaryRoutes.filter(active => active.visible_in_menu)
                                .map(route =>
                                    <Link
                                        key={route.id}
                                        to={route.path}
                                        data-links={route.route_data_name}
                                        onClick={() => toggleMobileMenuButton()}
                                        className="mobile-navigation-link lh-roomy"
                                        >
                                        {route.route_name}
                                    </Link>
                                )
                        }
                    </li>
                </ul>
            </div>
        )
    }
}
