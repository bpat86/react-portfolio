import * as types from '../constants/ActionTypes';
import { getIndex } from '../utilities/helpers';
import { head } from 'lodash';
import axios from 'axios';

export function fetchInstagramData() {
    const userId = process.env.REACT_APP_INSTAGRAM_USER_ID;
    const apiKey = process.env.REACT_APP_INSTAGRAM_API;

    return dispatch => {
        dispatch(fetchInstagramDataBegin());
        return axios.get(`https://api.instagram.com/v1/users/${userId}/media/recent/?access_token=${apiKey}`)
            .then(response => {
                const responseData = response.data.data;
                const getPostIdFromUrlParam = window.location.pathname.split('/')[3]; // returns Id
                const postIndex = getIndex(getPostIdFromUrlParam, responseData, 'id'); // returns index

                dispatch(postTypeHandler(responseData, responseData[postIndex], postIndex));
                return responseData;
            })
            .catch(error => {
                dispatch(fetchInstagramDataError(error));
                return error;
            });
    };
}

export const postTypeHandler = (instagramPosts, currentPost, currentPostIndex) => {
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

        dispatch(fetchInstagramDataSuccess(instagramPosts, currentPost, currentPostIndex, currentCarouselPosts, currentCarouselPost));
    };
}

export const fetchInstagramDataBegin = () => ({
    type: types.FETCH_INSTAGRAM_PAGE_DATA_BEGIN
});

export const fetchInstagramDataSuccess = (instagramPosts, currentPost, currentPostIndex, currentCarouselPosts, currentCarouselPost) => ({
    type: types.FETCH_INSTAGRAM_PAGE_DATA_SUCCESS,
    instagramPosts: { instagramPosts },
    currentPost: { currentPost },
    currentPostIndex: { currentPostIndex },
    currentCarouselPosts: { currentCarouselPosts },
    currentCarouselPost: { currentCarouselPost }
});

export const fetchInstagramDataError = error => ({
    type: types.FETCH_INSTAGRAM_PAGE_DATA_FAILURE,
    payload: { error }
});

export const changeCarouselPost = (changeType, currentPost, currentPostIndex, currentCarouselPost, currentCarouselPosts, currentCarouselPostIndex) => {
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

        dispatch(carouselPostDataHandler(changeType, currentPost, currentPostIndex, newCurrentCarouselPost, currentCarouselPosts, newCurrentCarouselPostIndex));
    };
}

export const carouselPostDataHandler = (changeType, currentPost, currentPostIndex, currentCarouselPost, currentCarouselPosts, currentCarouselPostIndex) => ({
    type: changeType,
    currentPost: { currentPost },
    currentPostIndex: { currentPostIndex },
    currentCarouselPosts: { currentCarouselPosts },
    currentCarouselPost: { currentCarouselPost },
    currentCarouselPostIndex: { currentCarouselPostIndex }
});
