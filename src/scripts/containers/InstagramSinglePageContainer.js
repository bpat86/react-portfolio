import React, { Component } from 'react';
import { connect } from 'react-redux';
import InstagramSinglePage from '../components/instagram/InstagramSinglePage';
import { fetchInstagramData } from '../actions/fetchInstagramPostPageAction';

class InstagramSinglePageContainer extends Component {
    fetchInstagramData = () => {
        const { dispatch } = this.props;
        dispatch(fetchInstagramData());
    }

    componentDidMount() {
        this.fetchInstagramData();
    }

    render() {
        return (
            <div>
                <div className="flex-align-center mt-7 mb-3">
                    <InstagramSinglePage { ...this.props } />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    instagramPosts: state.fetchInstagramPostPageReducer.instagramPosts,
    loading: state.fetchInstagramPostPageReducer.loading,
    error: state.fetchInstagramPostPageReducer.error,
    currentPost: state.fetchInstagramPostPageReducer.currentPost,
    currentPostIndex: state.fetchInstagramPostPageReducer.currentPostIndex,
    propHistory: state.fetchInstagramPostPageReducer.propHistory,
    mediaWidth: state.fetchInstagramPostPageReducer.width,
    mediaHeight: state.fetchInstagramPostPageReducer.height,
    currentCarouselPost: state.fetchInstagramPostPageReducer.currentCarouselPost,
    currentCarouselPosts: state.fetchInstagramPostPageReducer.currentCarouselPosts,
    currentCarouselPostIndex: state.fetchInstagramPostPageReducer.currentCarouselPostIndex,
    numberOfCarouselPosts: state.fetchInstagramPostPageReducer.numberOfCarouselPosts,
    isMobile: state.environmentReducer.isMobile
});

export default connect(mapStateToProps)(InstagramSinglePageContainer);
