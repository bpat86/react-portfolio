import * as types from '../constants/ActionTypes';

const initialState = {
    posts: [],
    loading: true,
    error: null
}

export default function fetchInstagramFeedReducer(state = initialState, action) {
    switch (action.type) {
        case types.FETCH_INSTAGRAM_DATA_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };

        case types.FETCH_INSTAGRAM_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                posts: action.payload.posts
            };

        case types.FETCH_INSTAGRAM_DATA_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                posts: []
            };

        default:
            return state;
    }
}
