import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { throttle } from 'lodash';
import LinkArrow from '../LinkArrow';
import LinkArrowBack from '../LinkArrowBack';
import Loader from '../../components/LoadingSpinner';
import { getIndex } from '../../utilities/helpers';
import data from '../../data/projects';

export default class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {
            project: [],
            loading: true,
            isPlaying: false,
            propHistory: []
        };
    }

    getProject = () => {
        const { match, history } = this.props;
        const projects = data.workProjects;
        const validProjects = projects.map(project => project.slug);

        // returns selected project from Route match param
        const projectSlug = match.params.project;
        const isValidProject = validProjects.includes(projectSlug);

        if (isValidProject) {
            // returns selected project from Route match param
            const projectSlug = match.params.project;

            // returns index of selected project
            const getProjectIndex = getIndex(projectSlug, projects, 'slug');

            // returns selected project as JSON object
            const projectId = projects[getProjectIndex];

            // returns the 'id' of selected project
            const getProject = projects.filter(el => {
                let getMatch = (el.id === projectId.id);

                return getMatch;
            });

            this.setState({
                project: getProject,
                loading: false,
                propHistory: history
            });
        } else {
            this.setState({
                propHistory: history
            });

            history.push("/404-page-not-found");
        }
    }

    getVideosInProject = (project) => {
        if (! project.videos) return false;

        return (
            project.videos.map(video =>
                <div
                    key={video.videoId}
                    className="project-media"
                    >
                    <video
                        ref="video"
                        //preload={true.toString()}
                        src={require("../../../assets/video/" + video.videoName)}
                        type="video/mp4"
                        playsInline
                        autoPlay
                        >
                    </video>
                </div>
            )
        );
    }

    getImagesInProject = (project) => {
        if (! project.images) return false;

        return (
            project.images.map(image =>
                <div
                    key={image.imageId}
                    className="project-media"
                    >
                    <img
                        src={require("../../../assets/images/" + project.path + image.imageName)}
                        alt={image.imageTitle}
                        />
                </div>
            )
        );
    }

    prepareVideosForAutoPlay = () => {
        // Wait for videos to render before doing anything
        if (! this.refs.video) return false;

        let videoElement = document.querySelectorAll('.project-media');
        videoElement = Array.prototype.slice.call(videoElement);

        videoElement.forEach((element, index) => {
            this.autoPlayVideoHandler(element, index);
        });
    }

    checkIfElementIsFiftyPercentVisible = (element) => {
        const rect = element.getBoundingClientRect();
        const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
        const windowWidth = (window.innerWidth || document.documentElement.clientWidth);
        const leftSide = (rect.left >= 0);
        const rightSide = (rect.right <= windowWidth);
        const topSide = (rect.top + (windowHeight * 0.5) >= 0);
        const bottomSide = (rect.bottom - (windowHeight * 0.5) <= windowHeight);
        const verticalSidesInView = (topSide && bottomSide);
        const horizontalSidesInView = (leftSide && rightSide);

        return (verticalSidesInView && horizontalSidesInView);
    }

    autoPlayVideoHandler = (element, index) => {
        const { isPlaying } = this.state;

        const videoTag = element.children[0];
        const elementIsAVideo = element.querySelector("video");
        const videoIscheckIfElementIsFiftyPercentVisible = this.checkIfElementIsFiftyPercentVisible(videoTag);

        if (videoIscheckIfElementIsFiftyPercentVisible) {
            if (! isPlaying && elementIsAVideo) {
                this.playVideo(videoTag);
            }
        } else if (! videoIscheckIfElementIsFiftyPercentVisible) {
            if (elementIsAVideo) {
                this.pauseVideo(videoTag);
            }
        }
    }

    playVideo = (videoTag) => {
        this.setState({
            isPlaying: true
        });

        videoTag.classList.add("playing");
        videoTag.playbackRate = 2;
        videoTag.loop = true;
        videoTag.play();
    }

    pauseVideo = (videoTag) => {
        this.setState({
            isPlaying: false
        });

        videoTag.classList.remove("playing");
        videoTag.muted = false;
        videoTag.loop = false;
        videoTag.pause();
    }

    addScrollListener = () => {
        const throttledPrepareVideosForAutoPlayFunction = throttle(this.prepareVideosForAutoPlay, 1500, { leading: true });

        window.addEventListener("scroll", throttledPrepareVideosForAutoPlayFunction, false);
    }

    removeScrollListener = () => {
        window.removeEventListener("scroll", this.prepareVideosForAutoPlay, false);
    }

    componentDidUpdate(prevProps) {
        const { loading } = this.props;

        if (loading !== prevProps.loading) {
            this.prepareVideosForAutoPlay();
        }
    }

    componentDidMount() {
        this.getProject();
        this.addScrollListener();
    }

    componentWillUnmount() {
        this.removeScrollListener();
    }

    render() {
        const { project, loading } = this.state;

        return (
            <div className="container width-sm mx-auto">
                <div className="Project">
                    {
                        project.map(project =>
                            <div key={project.id} className="mt-7 mb-3">
                                {
                                    loading ? <Loader /> :
                                    <div>
                                        <Link
                                            title="Go back to home"
                                            className="back-button mt-2 mb-1"
                                            to="/"
                                            >
                                            <LinkArrowBack />
                                            Go back
                                        </Link>
                                        <div className="line-seperator mb-2 bg-black faded"></div>
                                        <div className="mtb-1">
                                            <div className="lrg-text-size lh-normal mb-1">{project.title}</div>
                                            <div className="md-text-size lh-normal">
                                                <span className="label inline">Tech:</span>
                                                {project.technology}
                                            </div>
                                            <div className="md-text-size lh-normal">
                                                <span className="label inline">Role:</span>
                                                {project.role}
                                            </div>
                                            <div className="md-text-size lh-normal mb-1">
                                                <span className="label inline">Year:</span>
                                                {project.year}
                                            </div>
                                            <div className="md-text-size lh-normal pr-3">
                                                <span className="label inline">Description:</span>
                                                {project.description}
                                            </div>
                                        </div>
                                        { !project.externalUrl ? null :
                                            <div>
                                                <Link
                                                    target="blank"
                                                    className="button bg-round mb-2"
                                                    to={project.externalUrl}
                                                    >
                                                    Launch it
                                                    <LinkArrow />
                                                </Link>
                                            </div>
                                        }
                                        <div className="projectContainer">
                                            { this.getVideosInProject(project) }
                                            { this.getImagesInProject(project) }
                                        </div>
                                        <Link
                                            title="Go back to home"
                                            className="back-button mt-2"
                                            to="/"
                                            >
                                            <LinkArrowBack />
                                            Go back
                                        </Link>
                                    </div>
                                }
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }
}
