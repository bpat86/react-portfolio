import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import projects from '../../data/projects';
import LinkArrow from '../LinkArrow';
import { truncate } from 'lodash';

export default class ProjectThumbnails extends Component {
	constructor(props) {
        super(props);
        this.state = {
            projects: []
        };
    }

    getProjects = () => {
        this.setState({
            projects: projects.workProjects
        });
    }

    getStyle = (project) => {
    	let logo = require(`../../../assets/images/projects/logos/${project.logo}`);
        const divStyle = {
            backgroundImage: 'url(' + logo + ')'
        };

        return divStyle;
    }

    componentDidMount() {
    	this.getProjects();
    }

	render() {
		const { projects } = this.state;
		const gridClass = projects.length < 4 ? "three" : "four";

		return (
			<div>
				<ul className={`cards flex flex-wrap list-style-none grid ${gridClass}`}>
					{
						projects.map(project =>
							<li
								key={project.id}
								className="item flex"
								>
							    <div className="card flex flex-column shadow-lg rounded-lg">
							    	<Link
                                        title={project.title}
                                        className="project-links"
                                        to={{pathname: `/${project.parent}/${project.slug}`}}
                                        >
                                        <div
                                        	title={project.title}
                                        	className="block bg-cover aspect-16x9" style={this.getStyle(project)}>
                                        </div>
                                    </Link>
									<div className="flex flex-wrap justify-between flex-column h-full p-6">
										<h3 className="xl-text-size text-black fw-bold lh-normal mb-1">{project.title}</h3>
										<div className="md-text-size text-gray fw-regular lh-normal flex-1 mb-1">
											{
												truncate(project.description, {
													'length': 85,
													'separator': /,?.?-? +/
												})
											}
										</div>
										<div className="cta mt-1">
					                    	<Link
									        	title={project.title}
										        className="button bg-round"
								        		to={{pathname: `/${project.parent}/${project.slug}`}}
								        		>
								        		View Project
								        		<LinkArrow />
								        	</Link>
					                    </div>
									</div>
								</div>
							</li>
						 )
					}
				</ul>
			</div>
		)
	}
}
