import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LinkArrow from '../LinkArrow';
import CloseButton from '../CloseButton';
import { parseDate } from '../../utilities/helpers';
import * as types from '../../constants/ActionTypes';
import { calculateMediaAspectRatio } from '../../utilities/helpers';
import { toggleModalVisibility, changePost, changeCarouselPost } from '../../actions/instagramModalAction';

export default class ContentModal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isPlaying: false,
			isMuted: true,
			mediaInlineStyle: null,
			buttonContainerInlineStyle: null
		};
	}

	changePost = (changeType) => {
		const { dispatch, history, currentPost, currentPostIndex } = this.props;
		dispatch(changePost(changeType, currentPost, currentPostIndex, history));
	}

	changeCarouselPost = (changeType) => {
		const { dispatch, history, currentPost, currentPostIndex, currentCarouselPost, currentCarouselPosts, currentCarouselPostIndex } = this.props;
		dispatch(changeCarouselPost(changeType, currentPost, currentPostIndex, currentCarouselPost, currentCarouselPosts, currentCarouselPostIndex, history));
	}

	closeInstagramModal = (actionType) => {
        const { dispatch, history, showModal, currentPost, currentPostIndex } = this.props;
        const html = document.getElementsByTagName("html")[0];
        html.setAttribute("class", `${!showModal ? "modal-visible" : ""}`);
        dispatch(toggleModalVisibility(actionType, currentPost, currentPostIndex, history));
    }

	getMediaDimensions = () => {
		const { mediaWidth, mediaHeight } = this.props;
		const square = mediaWidth === mediaHeight;
		const maxMediaWidth = (! square && mediaHeight >= 640) ? mediaWidth - 120 : 620;
		const maxMediaHeight = (! square && mediaHeight >= 640) ? mediaHeight - 120 : 620;
		const mediaDimensions = calculateMediaAspectRatio(mediaWidth, mediaHeight, maxMediaWidth, maxMediaHeight);
		const buttonContainerDimensions = {
			height: mediaDimensions.height
		}

		this.setState({
			mediaInlineStyle: mediaDimensions,
			buttonContainerInlineStyle: buttonContainerDimensions
		});
	}

	resetVideo = (videoTag) => {
		this.setState({
			isPlaying: false,
			isMuted: true
		});

		if (! videoTag) return false;

		videoTag.classList.remove("playing");
		videoTag.muted = false;
		videoTag.loop = false;
	}

	pauseVideo = (videoTag) => {
		this.setState({
			isPlaying: false
		});

		if (! videoTag) return false;

		videoTag.classList.remove("playing");
		videoTag.loop = false;
		videoTag.pause();
	}

	playVideo = (videoTag) => {
		const { isMuted } = this.state;

		this.setState({
			isPlaying: true
		});

		if (! videoTag) return false;

		videoTag.classList.add("playing");
		videoTag.muted = isMuted;
		videoTag.loop = true;
		videoTag.play();
	}

	muteVideoToggle = (e) => {
		const videoTag = e.target.parentNode.children[0];

		this.setState({
			isMuted: !this.state.isMuted
		});

		videoTag.muted = !this.state.isMuted;
	}

	playVideoHandler = (e) => {
		const { isPlaying } = this.state;
		const { showModal } = this.props;
		const videoTag = e.currentTarget.children[0].children[0];
		const muteBtn = e.currentTarget.children[0].children[0].nextSibling;

		if (videoTag.tagName.toLowerCase() !== 'video') return false;
		if (e.target === muteBtn) return false;

		if (! isPlaying && showModal) {
			this.playVideo(videoTag);
		} else {
			this.pauseVideo(videoTag);
		}
	}

	getContentModal = () => {
		const { buttonContainerInlineStyle } = this.state;
		const { currentPost, currentPostIndex } = this.props;

		const prevFunc = () => this.changePost(types.INSTAGRAM_CHANGE_TYPES.PREV_POST, currentPost, currentPostIndex);
		const nextFunc = () => this.changePost(types.INSTAGRAM_CHANGE_TYPES.NEXT_POST, currentPost, currentPostIndex);
		const closeFunc = () => this.closeInstagramModal(types.TOGGLE_MODAL_CLOSED, currentPost, currentPostIndex);

		return (
			<div className="flex-container">
				<article
					id={currentPost.id}
					className="contentModal mobile-positioning z-index-6"
					>
					<div className="mainContent">
						<div className="mediaContainer">
							{ this.getPostMedia() }
						</div>
					</div>
					<div className="contentSideBar">
						<div className="sideBarInfo">
							<header className="profileInfo flex flex-align-vertical-center flex-start">
								<Link
									title="View on Instagram.com"
									target="blank"
									to={currentPost.link}
									>
									<div className="profilePicture flex">
										<img src={currentPost.user.profile_picture} alt={currentPost.user.username} />
									</div>
								</Link>
								<Link
									target="blank"
									to={currentPost.link}
									>
									<div className="username">{currentPost.user.username}</div>
								</Link>
							</header>
							<Link
								title="View on Instagram.com"
								target="blank"
								to={currentPost.link}
								>
								<div className="postedDate">
									{ parseDate(currentPost.created_time) }
								</div>
							</Link>
							{
								!currentPost.location ? null :
								<Link
									title="View on Instagram.com"
									target="blank"
									to={currentPost.link}
									>
									<div className="postedLocation">
										<i className="fa fa-map-marker" aria-hidden="true"></i>
										{ currentPost.location.name }
									</div>
								</Link>
							}
							<Link
								title="View on Instagram.com"
								target="blank"
								to={currentPost.link}
								>
								<h5 className="likes">
									<i className="fa fa-heart" aria-hidden="true"></i> {currentPost.likes.count}
								</h5>
								<hr/>
							</Link>
							<Link
								title="View on Instagram.com"
								target="blank"
								to={currentPost.link}
								>
								{
									!currentPost.caption ? null :
									<div>
										<div className="username">
											{currentPost.user.username}
										</div>
										<div className="caption">
											{currentPost.caption.text}
										</div>
									</div>
								}
							</Link>
							<Link
								title="View other comments on Instagram.com"
								target="blank"
								to={currentPost.link}
								>
							</Link>
							<Link
								title="View on Instagram.com"
								className="button mb-1"
								target="blank"
								to={currentPost.link}
								>
								View on Instagram.com
								<LinkArrow />
							</Link>
						</div>
					</div>
				</article>
				<div className="buttonContainer">
					<div
						title="close"
						className="closeButton z-index-6"
						onClick={closeFunc}
						>
						<CloseButton />
					</div>
					<div
						className="buttons z-index-5"
						style={buttonContainerInlineStyle}
						>
						<div
							title="Previous Post"
							className="prevButton z-index-5"
							onClick={prevFunc}
							>
							<i className="fa fa-angle-left" aria-hidden="true"></i>
						</div>
						<div
							title="Next Post"
							className="nextButton z-index-5"
							onClick={nextFunc}
							>
							<i className="fa fa-angle-right" aria-hidden="true"></i>
						</div>
					</div>
				</div>
			</div>
		);
	}

	getNumberOfCarouselPosts = (numberOfCarouselPosts) => {
		const { currentCarouselPostIndex } = this.props;

		return (
			<div className="numberOfPosts">
				{(currentCarouselPostIndex + 1) + " / " + numberOfCarouselPosts.length}
			</div>
		);
	}

	getPostMedia = () => {
		const { isPlaying, isMuted, mediaInlineStyle, buttonContainerInlineStyle } = this.state;
		const { currentPost, currentCarouselPostIndex, numberOfCarouselPosts } = this.props;
		let hidePlayBtnClass = isPlaying ? "hide" : "";

		const prevCarouselFunc = () => this.changeCarouselPost(types.INSTAGRAM_CHANGE_TYPES.PREV_CAROUSEL_POST);
		const nextCarouselFunc = () => this.changeCarouselPost(types.INSTAGRAM_CHANGE_TYPES.NEXT_CAROUSEL_POST);

		if (currentPost.type === "carousel") {
			return (
				<div>
					<div
						className="carouselContainer"
						onClick={(e) => this.playVideoHandler(e)}
						>
						{ this.getCarouselPostMedia() }
						<div
							className="buttons z-index-5"
							style={buttonContainerInlineStyle}
							>
							<div
								className="prevButton z-index-5"
								onClick={prevCarouselFunc}
								>
								<i className="fa fa-chevron-circle-left small" aria-hidden="true"></i>
							</div>
							<div
								className="nextButton z-index-5"
								onClick={nextCarouselFunc}
								>
								<i className="fa fa-chevron-circle-right small" aria-hidden="true"></i>
							</div>
						</div>
						{ this.getNumberOfCarouselPosts(numberOfCarouselPosts) }
						<ul className="dots">
							{
								numberOfCarouselPosts.map((index, i) =>
									<li
										key={i}
										className={i === currentCarouselPostIndex ? "active" : ""}
										>
										<button></button>
									</li>
								)
							}
						</ul>
					</div>
				</div>
			);
		}
		if (currentPost.type === "video") {
			return (
				<div>
					<div
						className="videoContainer"
						onClick={(e) => this.playVideoHandler(e)}
						title={`${isPlaying ? "pause" : "play"}`}
						>
						<div
							style={mediaInlineStyle}
							className="videoImageContainer"
							>
							<video
								muted
								playsInline
								type="video/mp4"
								className="z-index-3"
								//preload={true.toString()}
								src={currentPost.videos.standard_resolution.url}
								poster={currentPost.images.standard_resolution.url}
								>
							</video>
							{
								isMuted ?
								<div
									title="unmute"
									className="muteButton"
									onClick={(e) => this.muteVideoToggle(e)}
									>
								</div> :
								<div
									title="mute"
									className="unmuteButton"
									onClick={(e) => this.muteVideoToggle(e)}
									>
								</div>
							}
							<div className={`videoControlsSprite ${hidePlayBtnClass}`}></div>
						</div>
					</div>
				</div>
			);
		}
		if (currentPost.type === "image") {
			return (
				<div className="mediaContainer">
					<div
						style={mediaInlineStyle}
						className="imageContainer"
						>
						<img
							src={currentPost.images.standard_resolution.url}
							alt={currentPost.caption ? currentPost.caption.text : null}
							/>
					</div>
				</div>
			);
		}
	}

	getCarouselPostMedia = () => {
		const { isPlaying, mediaInlineStyle, isMuted } = this.state;
		const { currentPost, currentCarouselPost } = this.props;
		let hidePlayBtnClass = isPlaying ? "hide" : "";

		if (currentCarouselPost.type === "image") {
			return (
				<div
					style={mediaInlineStyle}
					className="carouselMediaContainer"
					>
					<img
						alt={currentPost.caption ? currentPost.caption.text : null}
						src={currentCarouselPost.images.standard_resolution.url}
						/>
				</div>
			);
		}
		if (currentCarouselPost.type === "video") {
			return (
				<div
					style={mediaInlineStyle}
					className="carouselMediaContainer"
					>
					<video
						muted
						playsInline
						type="video/mp4"
						//preload={true.toString()}
						src={currentCarouselPost.videos.standard_resolution.url}
						>
					</video>
					{
						isMuted ?
						<div
							title="unmute"
							className="muteButton"
							onClick={(e) => this.muteVideoToggle(e)}
							>
						</div> :
						<div
							title="mute"
							className="unmuteButton"
							onClick={(e) => this.muteVideoToggle(e)}
							>
						</div>
					}
					<div className={`videoControlsSprite ${hidePlayBtnClass}`}></div>
				</div>
			);
		}
	}

	componentDidMount() {
		this.resetVideo();
		this.getMediaDimensions();
	}

	componentWillUpdate(nextProps) {
		const { currentPostIndex, currentCarouselPostIndex } = this.props;

		if (currentPostIndex !== nextProps.currentPostIndex) {
			this.resetVideo();
			this.getMediaDimensions();
		}

		if (currentCarouselPostIndex !== nextProps.currentCarouselPostIndex) {
			this.resetVideo();
		}
	}

	componentDidUpdate(prevProps) {
		const { currentPostIndex, currentCarouselPostIndex } = this.props;

		if (currentPostIndex !== prevProps.currentPostIndex) {
			this.resetVideo();
			this.getMediaDimensions();
		}

		if (currentCarouselPostIndex !== prevProps.currentCarouselPostIndex) {
			this.resetVideo();
		}
	}

	render() {
		const { currentPost, currentPostIndex, showModal } = this.props;
		const closeFunc = () => this.closeInstagramModal(types.TOGGLE_MODAL_CLOSED, currentPost, currentPostIndex);

		return (
			<div>
				{
					showModal ?
					<div className="flex-container">
						<div className="contentModalContainer flex-align-center z-index-5">
							{ this.getContentModal() }
							<div
								className="contentModalBackground"
								onClick={closeFunc}
								>
							</div>
						</div>
					</div> :
					<div></div>
				}
			</div>
		)
	}
}
