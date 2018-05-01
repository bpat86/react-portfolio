import * as types from '../constants/ActionTypes';

const initialState = {
    isHidden: false,
    isScrolled: false
};

export default function navigationReducer(state = initialState, action) {
    switch (action.type) {
        case types.NAVIGATION_CHANGE_TYPES.VISIBLE:
            return {
                ...state,
                isHidden: action.isHidden.isHidden
            };

        case types.NAVIGATION_CHANGE_TYPES.HIDDEN:
            return {
                ...state,
                isHidden: action.isHidden.isHidden
            };

        case types.NAVIGATION_CHANGE_TYPES.NOT_SCROLLED_TO_TARGET:
            return {
                ...state,
                isScrolled: action.isScrolled.isScrolled
            };

        case types.NAVIGATION_CHANGE_TYPES.SCROLLED_TO_TARGET:
            return {
                ...state,
                isScrolled: action.isScrolled.isScrolled
            };

    default:
        return state;
    }
}
