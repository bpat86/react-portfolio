import { head } from 'lodash';
import * as types from '../constants/ActionTypes';

export const toggleModalVisibility = (actionType, currentPost, currentPostIndex, propHistory) => {
    return dispatch => {
        const html = document.getElementsByTagName("html")[0];
        if (actionType === types.TOGGLE_MODAL_OPEN) {
            //propHistory.push("/about/instagram/"+currentPost.id+"/?taken-by="+currentPost.user.username);
            html.setAttribute("class", "modal-visible");
            dispatch(postTypeHandler(actionType, currentPost, currentPostIndex, propHistory));
        }
        if (actionType === types.TOGGLE_MODAL_CLOSED) {
            propHistory.push("/about");
            html.setAttribute("class", "");
            dispatch(closeInstagramModal());
        }
    };
}

export const postTypeHandler = (actionType, currentPost, currentPostIndex, propHistory) => {
    return dispatch => {
        let currentCarouselPosts, currentCarouselPost;

        if (currentPost.type === "image") {
            currentCarouselPosts = [];
            currentCarouselPost = null;
        }
        if (currentPost.type === "video") {
            currentCarouselPosts = [];
            currentCarouselPost = null;
        }
        if (currentPost.type === "carousel") {
            currentCarouselPosts = currentPost.carousel_media.map(media => media);
            currentCarouselPost = head(currentPost.carousel_media.map(media => media));
        }

        dispatch(postDataHandler(actionType, currentPost, currentPostIndex, currentCarouselPosts, currentCarouselPost, propHistory));
    };
}

export const changePost = (changeType, currentPost, currentPostIndex, propHistory) => {
    return (dispatch, getState) => {
        const { fetchInstagramFeedReducer } = getState();
        const { posts } = fetchInstagramFeedReducer;
        let newPostIndex, newPostValue;

        if (changeType === types.INSTAGRAM_CHANGE_TYPES.NEXT_POST) {
            newPostIndex = currentPostIndex === posts.length - 1 ? newPostIndex = 0 : newPostIndex = currentPostIndex + 1;
            newPostValue = posts[newPostIndex];
            propHistory.push("/about/instagram/"+newPostValue.id+"/?taken-by="+newPostValue.user.username);
        }
        if (changeType === types.INSTAGRAM_CHANGE_TYPES.PREV_POST) {
            newPostIndex = currentPostIndex === 0 ? newPostIndex = posts.length - 1 : newPostIndex = currentPostIndex - 1;
            newPostValue = posts[newPostIndex];
            propHistory.push("/about/instagram/"+newPostValue.id+"/?taken-by="+newPostValue.user.username);
        }

        dispatch(postTypeHandler(changeType, newPostValue, newPostIndex, propHistory));
    };
}

export const postDataHandler = (actionType, currentPost, currentPostIndex, currentCarouselPosts, currentCarouselPost, propHistory) => ({
    type: actionType,
    currentPost: { currentPost },
    currentPostIndex: { currentPostIndex },
    currentCarouselPosts: { currentCarouselPosts },
    currentCarouselPost: { currentCarouselPost },
    propHistory: { propHistory }
});

export const changeCarouselPost = (changeType, currentPost, currentPostIndex, currentCarouselPost, currentCarouselPosts, currentCarouselPostIndex, propHistory) => {
    return dispatch => {
        let newCurrentCarouselPostIndex, newCurrentCarouselPost;

        if (changeType === types.INSTAGRAM_CHANGE_TYPES.NEXT_CAROUSEL_POST) {
            newCurrentCarouselPostIndex = currentCarouselPostIndex === currentCarouselPosts.length - 1 ?
            currentCarouselPostIndex = 0 :
            currentCarouselPostIndex = currentCarouselPostIndex + 1;
            newCurrentCarouselPost = currentCarouselPosts[newCurrentCarouselPostIndex];
        }
        if (changeType === types.INSTAGRAM_CHANGE_TYPES.PREV_CAROUSEL_POST) {
            newCurrentCarouselPostIndex = currentCarouselPostIndex === 0 ?
            currentCarouselPostIndex = currentCarouselPosts.length - 1 :
            currentCarouselPostIndex = currentCarouselPostIndex - 1;
            newCurrentCarouselPost = currentCarouselPosts[newCurrentCarouselPostIndex];
        }

        dispatch(carouselPostDataHandler(changeType, currentPost, currentPostIndex, newCurrentCarouselPost, currentCarouselPosts, newCurrentCarouselPostIndex, propHistory));
    };
}

export const carouselPostDataHandler = (changeType, currentPost, currentPostIndex, currentCarouselPost, currentCarouselPosts, currentCarouselPostIndex, propHistory) => ({
    type: changeType,
    currentPost: { currentPost },
    currentPostIndex: { currentPostIndex },
    currentCarouselPosts: { currentCarouselPosts },
    currentCarouselPost: { currentCarouselPost },
    currentCarouselPostIndex: { currentCarouselPostIndex },
    propHistory: { propHistory }
});

export const closeInstagramModal = () => ({
    type: types.TOGGLE_MODAL_CLOSED
});
