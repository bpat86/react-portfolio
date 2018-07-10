import React, { Component } from 'react';
import * as types from '../../constants/ActionTypes';
import { Link } from 'react-router-dom';
import { throttle } from 'lodash';
import LoadingSpinner from '../../components/LoadingSpinner';
import { toggleModalVisibility } from '../../actions/instagramModalAction';

export default class InstagramFeed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPlaying: false
        };
    }

    toggleInstagramModal = (post, index) => {
        const { dispatch, history, isMobile } = this.props;
        if (isMobile) return false;
        dispatch(toggleModalVisibility(types.TOGGLE_MODAL_OPEN, post, index, history));
    }

    getPostMedia = (post) => {
        if (post.type === "carousel") {
            return (
                <div className="carouselContainer">
                    <img
                        src={post.images.standard_resolution.url}
                        alt={post.caption ? post.caption.text : null}
                        />
                    <div className="carouselThumbnailControlsSprite"></div>
                </div>
            );
        }
        if (post.type === "video") {
            return (
                <div className="videoContainer">
                    <video
                        ref="video"
                        type="video/mp4"
                        muted={true.toString()}
                        preload={true.toString()}
                        playsInline={true.toString()}
                        src={post.videos.low_resolution.url}
                        poster={post.images.standard_resolution.url}
                        >
                    </video>
                    <div className="videoThumbnailControlsSprite"></div>
                </div>
            );
        }
        if (post.type === "image") {
            return (
                <img
                    alt={post.caption ? post.caption.text : null}
                    src={post.images.standard_resolution.url}
                    />
            );
        }
    }

    prepareVideosForAutoPlay = () => {
        // Wait for videos to render before doing anything
        if (! this.refs.video) return false;

        let videoElement = document.querySelectorAll('.instagramFeedContainer .videoContainer');
        videoElement = Array.prototype.slice.call(videoElement);

        videoElement.forEach((element, index) => {
            this.autoPlayVideoHandler(element, index);
        });
    }

    checkIfElementIsFiftyPercentVisible = (element) => {
        if (! this.refs.video) return false;
        if (! this.refs.post) return false;

        const rect = element.getBoundingClientRect();
        const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
        const windowWidth = (window.innerWidth || document.documentElement.clientWidth);
        const leftSide = (rect.left >= 0);
        const rightSide = (rect.right <= windowWidth);
        const topSide = (rect.top + (windowHeight * 0.3) >= 0);
        const bottomSide = (rect.bottom - (windowHeight * 0.3) <= windowHeight);
        const verticalSidesInView = (topSide && bottomSide);
        const horizontalSidesInView = (leftSide && rightSide);

        return (verticalSidesInView && horizontalSidesInView);
    }

    autoPlayVideoHandler = (element, index) => {
        const { showModal } = this.props;
        const videoTag = element.children[0];
        const videoIscheckIfElementIsFiftyPercentVisible = this.checkIfElementIsFiftyPercentVisible(videoTag);

        if (! showModal && videoIscheckIfElementIsFiftyPercentVisible) {
            this.playVideo(videoTag);
        } else {
            this.pauseVideo(videoTag);
        }
    }

    playVideo = (videoTag) => {
        this.setState({
            isPlaying: true
        });

        videoTag.classList.add("playing");
        videoTag.muted = true;
        videoTag.loop = true;
        videoTag.play();
    }

    pauseVideo = (videoTag) => {
        this.setState({
            isPlaying: false
        });

        videoTag.classList.remove("playing");
        videoTag.muted = true;
        videoTag.loop = false;
        videoTag.pause();
    }

    addScrollListener = () => {
        const throttledPrepareVideosForAutoPlayFunction = throttle(this.prepareVideosForAutoPlay, 1000, { leading: true });

        window.addEventListener("scroll", throttledPrepareVideosForAutoPlayFunction, false);
    }

    removeScrollListener = () => {
        window.removeEventListener("scroll", this.prepareVideosForAutoPlay, false);
    }

    componentDidUpdate(prevProps) {
        const { showModal } = this.props;

        if (showModal !== prevProps.showModal) {
            this.prepareVideosForAutoPlay();
        }
    }

    componentDidMount() {
        this.addScrollListener();
    }

    componentWillUnmount() {
        this.removeScrollListener();
    }

    render() {
        const { loading, instagramPosts } = this.props;

        return (
            <div>
                {
                    loading ? <LoadingSpinner /> :
                    <div className="instagramFeed">
                    	<div className="instagramFeedContainer">
            				{
            					instagramPosts.map((post, index) =>
            					    <div
                                        key={index}
                                        id={post.id}
                                        ref="post"
                                        className="post"
                                        >
            					    	<Link
                                            className="postLinks"
                                            onClick={() => this.toggleInstagramModal(post, index)}
                                            to={{pathname: `/about/instagram/${post.id}/?taken-by=${post.user.username}`}}
                                            >
            						        <div className="content">
            						        	<div className="info">
            				                    	<h3 className="likes">
                                                        <i className="fa fa-heart" aria-hidden="true"></i>
                                                        {post.likes.count}
                                                    </h3>
            				                    </div>
            				                    { this.getPostMedia(post) }
            				                </div>
            				            </Link>
            						</div>
            					)
            				}
            			</div>
                    </div>
                }
            </div>
        );
    }
}
