import React, { Component } from 'react';
//import Fonzie from '../../assets/video/fonzie.mp4';

export default class VideoBackground extends Component {
    constructor(props){
        super(props);
        this.state = {
            isScrolled: false
        };
    }

    viewportScrollHandler = () => {
        const { isScrolled, isMobile } = this.state;
        const { showModal } = this.props;
        const newScrollPosition = window.scrollY;
        const bgVideo = document.querySelector(".video");
        const bgVideoHeight = bgVideo.offsetHeight + 100;
        const videoTag = bgVideo;
        const videoIsPlaying = videoTag.currentTime > 0 && !videoTag.paused && !videoTag.ended && videoTag.readyState > 2;
        const videoNotInView = this.previousScrollPosition > bgVideoHeight || newScrollPosition > bgVideoHeight;

        if ((videoNotInView && !isScrolled && videoIsPlaying) || showModal) {
            this.setState({ isScrolled: true });
            this.pauseVideo(videoTag);
        }
        if (!videoNotInView && isScrolled && !videoIsPlaying && !showModal) {
            this.setState({ isScrolled: false });
            this.playVideo(videoTag);
        }
        if (isMobile) {
            this.setState({ isScrolled: true });
            this.pauseVideo(videoTag);
        }

        this.previousScrollPosition = newScrollPosition;
    }

    playVideo = (videoTag) => {
        videoTag.classList.add("playing");
        videoTag.muted = true;
        videoTag.loop = true;
        videoTag.play();
        console.log("playing");
    }

    pauseVideo = (videoTag) => {
        videoTag.classList.remove("playing");
        videoTag.muted = false;
        videoTag.loop = false;
        videoTag.pause();
        console.log("paused");
    }

    getMedia = () => {
        return (
            <div>
                <video
                    loop
                    muted
                    autoPlay
                    ref="video"
                    playsInline
                    webkit-playsinline
                    className="video playing"
                    poster="https://thumbs.gfycat.com/FancyBrilliantDugong-poster.jpg"
                    >
                    <source src="https://giant.gfycat.com/FancyBrilliantDugong.webm" type="video/webm"/>
                    <source src="https://giant.gfycat.com/FancyBrilliantDugong.mp4" type="video/mp4"/>
                </video>
                <div className="image home"></div>
            </div>
        );
    }

    addEventListeners = () => {
        window.addEventListener('scroll', this.viewportScrollHandler, false);
    }

    removeEventListeners = () => {
        window.removeEventListener('scroll', this.viewportScrollHandler, false);
    }

    componentDidMount() {
        this.viewportScrollHandler();
        this.addEventListeners();
    }

    componentDidUpdate(prevProps) {
        const { showModal } = this.props;

        if (prevProps.showModal !== showModal) {
            this.viewportScrollHandler();
        }
    }

    componentWillUnmount() {
        this.removeEventListeners();
    }

    render() {
        return (
            <div className="bg-video">
                { this.getMedia() }
            </div>
        )
    }
}
