import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import projects from '../../data/projects';
import LinkArrow from '../LinkArrow';
import { truncate } from 'lodash';

export default class ProjectThumbnails extends Component {
	constructor(props){
        super(props);
        this.state = {
            projects: []
        };
    }

    getProjects = () => {
        this.setState({
            projects: projects.sideProjects
        });
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
						projects.map(p =>
							<li
								key={p.id}
								className="item flex"
								>

							    <div className="card flex flex-column shadow-lg rounded-lg">
							    	<Link
							        	title={p.title}
								        className="project-links"
						        		to={{pathname: `/${p.parent}/${p.slug}`}}
						        		>
										<div className="image bg-white">
											<img
												alt={p.title}
						                    	src={require('../../../assets/images/projects/logos/' + p.logo)}
						                    	/>
										</div>
									</Link>
									<div className="flex flex-wrap flex-column p-1">
										<div className="lrg-text-size lh-normal mb-1">{p.title}</div>
										<div className="md-text-size faded lh-normal mb-1">
											{
												truncate(p.description, {
													'length': 100,
													'separator': /,?.?-? +/
												})
											}
										</div>
										<div className="cta mt-1">
					                    	<Link
									        	title={p.title}
										        className="button bg-round"
								        		to={{pathname: `/${p.parent}/${p.slug}`}}
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
