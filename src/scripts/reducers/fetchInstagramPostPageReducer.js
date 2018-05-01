import * as types from '../constants/ActionTypes';

const initialState = {
    loading: true,
    instagramPosts: [],
    currentPost: null,
    currentPostIndex: null,
    type: null,
    propHistory: {},
    currentCarouselPosts: [],
    currentCarouselPost: null,
    currentCarouselPostIndex: 0,
    numberOfCarouselPosts: [],
    width: null,
    height: null,
    error: null
}

export default function fetchInstagramPostPageReducer(state = initialState, action) {
    switch (action.type) {
        case types.FETCH_INSTAGRAM_PAGE_DATA_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };

        case types.FETCH_INSTAGRAM_PAGE_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                isModalOpen: false,
                instagramPosts: action.instagramPosts.instagramPosts,
                currentPost: action.currentPost.currentPost,
                currentPostIndex: action.currentPostIndex.currentPostIndex,
                type: action.currentPost.currentPost.type,
                currentCarouselPosts: action.currentCarouselPosts.currentCarouselPosts,
                currentCarouselPost: action.currentCarouselPost.currentCarouselPost,
                currentCarouselPostIndex: 0,
                numberOfCarouselPosts: action.currentPost.currentPost.carousel_media,
                width: action.currentPost.currentPost.images.standard_resolution.width ||
                    action.currentPost.currentPost.videos.standard_resolution.width ||
                    action.currentCarouselPosts.currentCarouselPosts.images.standard_resolution.width ||
                    action.currentCarouselPosts.currentCarouselPosts.videos.standard_resolution.width,
                height: action.currentPost.currentPost.images.standard_resolution.height ||
                    action.currentPost.currentPost.videos.standard_resolution.height ||
                    action.currentCarouselPosts.currentCarouselPosts.images.standard_resolution.height ||
                    action.currentCarouselPosts.currentCarouselPosts.videos.standard_resolution.height
            };

        case types.FETCH_INSTAGRAM_PAGE_DATA_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };

        case types.INSTAGRAM_CHANGE_TYPES.NEXT_CAROUSEL_POST:
            return {
                ...state,
                currentPost: action.currentPost.currentPost,
                currentPostIndex: action.currentPostIndex.currentPostIndex,
                type: action.currentPost.currentPost.type,
                currentCarouselPosts: action.currentCarouselPosts.currentCarouselPosts,
                currentCarouselPost: action.currentCarouselPost.currentCarouselPost,
                currentCarouselPostIndex: action.currentCarouselPostIndex.currentCarouselPostIndex,
                numberOfCarouselPosts: action.currentPost.currentPost.carousel_media,
                width: action.currentPost.currentPost.images.standard_resolution.width ||
                    action.currentPost.currentPost.videos.standard_resolution.width ||
                    action.currentCarouselPosts.currentCarouselPosts.images.standard_resolution.width ||
                    action.currentCarouselPosts.currentCarouselPosts.videos.standard_resolution.width,
                height: action.currentPost.currentPost.images.standard_resolution.height ||
                    action.currentPost.currentPost.videos.standard_resolution.height ||
                    action.currentCarouselPosts.currentCarouselPosts.images.standard_resolution.height ||
                    action.currentCarouselPosts.currentCarouselPosts.videos.standard_resolution.height
            };

        case types.INSTAGRAM_CHANGE_TYPES.PREV_CAROUSEL_POST:
            return {
                ...state,
                currentPost: action.currentPost.currentPost,
                currentPostIndex: action.currentPostIndex.currentPostIndex,
                type: action.currentPost.currentPost.type,
                currentCarouselPosts: action.currentCarouselPosts.currentCarouselPosts,
                currentCarouselPost: action.currentCarouselPost.currentCarouselPost,
                currentCarouselPostIndex: action.currentCarouselPostIndex.currentCarouselPostIndex,
                numberOfCarouselPosts: action.currentPost.currentPost.carousel_media,
                width: action.currentPost.currentPost.images.standard_resolution.width ||
                    action.currentPost.currentPost.videos.standard_resolution.width ||
                    action.currentCarouselPosts.currentCarouselPosts.images.standard_resolution.width ||
                    action.currentCarouselPosts.currentCarouselPosts.videos.standard_resolution.width,
                height: action.currentPost.currentPost.images.standard_resolution.height ||
                    action.currentPost.currentPost.videos.standard_resolution.height ||
                    action.currentCarouselPosts.currentCarouselPosts.images.standard_resolution.height ||
                    action.currentCarouselPosts.currentCarouselPosts.videos.standard_resolution.height
            };

        default:
            return state;
    }
}
