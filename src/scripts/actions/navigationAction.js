import * as types from '../constants/ActionTypes';

export const navigationIsHidden = (actionType) => {
    return dispatch => {
        if (actionType === types.NAVIGATION_CHANGE_TYPES.HIDDEN) {
            let isHidden = true;
            dispatch(navigationVisibilityHandler(actionType, isHidden));
        }
        if (actionType === types.NAVIGATION_CHANGE_TYPES.VISIBLE) {
            let isHidden = false;
            dispatch(navigationVisibilityHandler(actionType, isHidden));
        }
    };
}

export const navigationIsScrolled = (actionType) => {
    return dispatch => {
        if (actionType === types.NAVIGATION_CHANGE_TYPES.SCROLLED_TO_TARGET) {
            let isScrolled = true;
            dispatch(navigationScrollHandler(actionType, isScrolled));
        }
        if (actionType === types.NAVIGATION_CHANGE_TYPES.NOT_SCROLLED_TO_TARGET) {
            let isScrolled = false;
            dispatch(navigationScrollHandler(actionType, isScrolled));
        }
    };
}

export const navigationVisibilityHandler = (actionType, isHidden) => ({
    type: actionType,
    isHidden: { isHidden }
});

export const navigationScrollHandler = (actionType, isScrolled) => ({
    type: actionType,
    isScrolled: { isScrolled }
});

