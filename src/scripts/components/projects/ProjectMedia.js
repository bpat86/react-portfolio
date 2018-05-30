import { Helmet } from 'react-helmet';
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
        this.videoRef = React.createRef();
    }

    addMetaTags = (project) => {
        return (
            <Helmet>
                <title>Bobby Patterson | {project.title}</title>
                <meta name="robots" content="index, follow" />
                <meta name="description" content={project.description} />
                <meta name="keywords" content={`${project.title}, ${project.technology}, ${project.role}, Bobby Patterson`} />
                <meta property="og:url" content={`https://bobbypatterson.me/${project.parent}/${project.slug}`} />
                <meta property="og:title" content={`Bobby Patterson | ${project.title}`} />
                <meta property="og:site_name" content={`Bobby Patterson | ${project.title}`} />
                <meta property="og:description" content={project.description} />
                <meta property="og:image" content="https://bobbypatterson.me/aboutme.jpg" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@bobbypatterson" />
                <meta name="twitter:creator" content="@bobbypatterson" />
                <meta name="twitter:title" content={`Bobby Patterson | ${project.title}`} />
                <meta name="twitter:description" content={project.description} />
                <meta name="twitter:image" content="https://bobbypatterson.me/aboutme.jpg" />
                <link rel="canonical" href={`https://bobbypatterson.me/${project.parent}/${project.slug}`} />
            </Helmet>
        );
    }

    getProject = () => {
        const { match, history } = this.props;
        const projects = data.sideProjects;
        const validProjects = projects.map(project => project.slug);

        // returns selected project from Route match param
        const projectSlug = match.params.project;
        const isValidProject = validProjects.includes(projectSlug);

        if (isValidProject) {
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
                        muted
                        autoPlay
                        playsInline
                        type="video/mp4"
                        ref={this.videoRef}
                        preload={true.toString()}
                        //src={require("../../../assets/video/" + video.videoName)}
                        >
                        <source src={video.webmSource} type="video/webm"/>
                        <source src={video.mp4Source} type="video/mp4"/>
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
        if (! this.videoRef.current) return false;

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
                                        { this.addMetaTags(project) }
                                        <Link
                                            title="Go back"
                                            className="back-button mb-1"
                                            to="/"
                                            >
                                            <LinkArrowBack />
                                            Go back
                                        </Link>
                                        <div className="line-seperator mb-2 bg-black faded"></div>
                                        <div className="mtb-1">
                                            <h2 className="xl-text-size text-black fw-bold mb-1">{project.title}</h2>
                                            <div className="md-text-size fw-regular text-black lh-normal mb-1">
                                                {project.description}
                                            </div>
                                            <div className="md-text-size fw-regular text-black lh-normal">
                                                <span className="label inline">Technology:</span>
                                                {project.technology}
                                            </div>
                                            <div className="md-text-size fw-regular text-black lh-normal">
                                                <span className="label inline">Role:</span>
                                                {project.role}
                                            </div>
                                            <div className="md-text-size fw-regular text-black lh-normal">
                                                <span className="label inline">Year:</span>
                                                {project.year}
                                            </div>
                                        </div>
                                        { !project.externalUrl ? null :
                                            <div>
                                                <div className="line-seperator mb-1 bg-black"></div>
                                                <Link
                                                    target="blank"
                                                    className="button bg-round mb-1"
                                                    to={project.externalUrl}
                                                    >
                                                    Launch it
                                                    <LinkArrow />
                                                </Link>
                                            </div>
                                        }
                                        { !project.gitHubUrl ? null :
                                            <div>
                                                <Link
                                                    target="blank"
                                                    className="button bg-round mb-1"
                                                    to={project.gitHubUrl}
                                                    >
                                                    View this project on GitHub
                                                    <LinkArrow />
                                                </Link>
                                            </div>
                                        }
                                        <div className="projectContainer">
                                            { this.getVideosInProject(project) }
                                            { this.getImagesInProject(project) }
                                        </div>
                                        <div className="line-seperator mt-3 mb-1 bg-black faded"></div>
                                        <Link
                                            title="Go back"
                                            className="back-button"
                                            to="/blog"
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
