import * as types from '../constants/ActionTypes';

const initialState = {
    initialPageLoading: true,
    isMobile: false,
    height: null,
    width: null,
};

export default function environmentReducer(state = initialState, action) {
    switch (action.type) {
        case types.IS_MOBILE:
            return {
                ...state,
                isMobile: action.isMobile,
                initialPageLoading: false
            };

        case types.CHANGE_WIDTH_AND_HEIGHT:
            return {
                ...state,
                height: action.height,
                width: action.width,
                initialPageLoading: false
            };

        default:
            return state;
    }
}
