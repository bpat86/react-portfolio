import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ContentModal from '../components/instagram/ContentModal';
import InstagramFeed from '../components/instagram/InstagramFeed';
import { fetchInstagramData } from '../actions/fetchInstagramFeedAction';

const propTypes = {
    instagramPosts: PropTypes.array,
    dispatch: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.bool,
    currentPost: PropTypes.object,
    currentPostIndex: PropTypes.number,
    propHistory: PropTypes.object,
    showModal: PropTypes.bool.isRequired,
    mediaWidth: PropTypes.number,
    mediaHeight: PropTypes.number,
    currentCarouselPost: PropTypes.object,
    currentCarouselPosts: PropTypes.array,
    currentCarouselPostIndex: PropTypes.number,
    numberOfCarouselPosts: PropTypes.array,
};

class InstagramFeedContainer extends Component {
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(fetchInstagramData());
    }

    render() {
        return (
            <div>
                <InstagramFeed {...this.props} />
                <ContentModal {...this.props} />
            </div>
        );
    }
}

InstagramFeedContainer.propTypes = propTypes;

const mapStateToProps = state => ({
    instagramPosts: state.fetchInstagramFeedReducer.posts,
    loading: state.fetchInstagramFeedReducer.loading,
    error: state.fetchInstagramFeedReducer.error,
    currentPost: state.instagramModalReducer.currentPost,
    currentPostIndex: state.instagramModalReducer.currentPostIndex,
    propHistory: state.instagramModalReducer.propHistory,
    showModal: state.instagramModalReducer.isModalOpen,
    mediaWidth: state.instagramModalReducer.width,
    mediaHeight: state.instagramModalReducer.height,
    currentCarouselPost: state.instagramModalReducer.currentCarouselPost,
    currentCarouselPosts: state.instagramModalReducer.currentCarouselPosts,
    currentCarouselPostIndex: state.instagramModalReducer.currentCarouselPostIndex,
    numberOfCarouselPosts: state.instagramModalReducer.numberOfCarouselPosts,
    isMobile: state.environmentReducer.isMobile
});

export default connect(mapStateToProps)(InstagramFeedContainer);
