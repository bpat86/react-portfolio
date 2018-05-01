import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ThemeChanger extends Component {
    render() {
        const { themes } = this.props;

    	return (
			<ul className="themeContainer">
				<li className="theme">
					{
	                    themes.map(theme =>
	        				<img
                                key={theme.id}
                                src={theme.theme_thumbnail}
                                alt={theme.theme_name}
                                />
	                    )
	                }
                </li>
			</ul>
    	);
    }
}
export default ThemeChanger;
