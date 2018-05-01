import * as types from '../constants/ActionTypes';

const initialState = {
	isModalOpen: false,
    currentPost: null,
    currentPostIndex: null,
    type: null,
    propHistory: {},
    currentCarouselPosts: [],
    currentCarouselPost: null,
    currentCarouselPostIndex: 0,
    numberOfCarouselPosts: [],
    width: null,
    height: null
};

export default function instagramModalReducer(state = initialState, action) {
    switch (action.type) {
        case types.TOGGLE_MODAL_OPEN:
            return {
                ...state,
                isModalOpen: true,
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

        case types.INSTAGRAM_CHANGE_TYPES.NEXT_POST:
          	return {
          		...state,
                currentPost: action.currentPost.currentPost,
                currentPostIndex: action.currentPostIndex.currentPostIndex,
                type: action.currentPost.currentPost.type,
                propHistory: action.propHistory.propHistory,
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

        case types.INSTAGRAM_CHANGE_TYPES.NEXT_CAROUSEL_POST:
            return {
                ...state,
                currentPost: action.currentPost.currentPost,
                currentPostIndex: action.currentPostIndex.currentPostIndex,
                type: action.currentPost.currentPost.type,
                propHistory: action.propHistory.propHistory,
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

        case types.INSTAGRAM_CHANGE_TYPES.PREV_POST:
            return {
                ...state,
                currentPost: action.currentPost.currentPost,
                currentPostIndex: action.currentPostIndex.currentPostIndex,
                type: action.currentPost.currentPost.type,
                propHistory: action.propHistory.propHistory,
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

        case types.INSTAGRAM_CHANGE_TYPES.PREV_CAROUSEL_POST:
            return {
                ...state,
                currentPost: action.currentPost.currentPost,
                currentPostIndex: action.currentPostIndex.currentPostIndex,
                type: action.currentPost.currentPost.type,
                propHistory: action.propHistory.propHistory,
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

        case types.TOGGLE_MODAL_CLOSED:
            return {
                ...state,
                isModalOpen: false,
                currentPost: null,
                currentPostIndex: null,
                type: null,
                propHistory: {},
                currentCarouselPosts: [],
                currentCarouselPost: null,
                currentCarouselPostIndex: 0,
                numberOfCarouselPosts: [],
                width: null,
                height: null
            };

	default:
	  	return state;
  	}
}
