import * as types from '../constants/ActionTypes';
import axios from 'axios';

export function fetchInstagramData() {
    const userId = process.env.REACT_APP_INSTAGRAM_USER_ID;
    const apiKey = process.env.REACT_APP_INSTAGRAM_API;

    return dispatch => {
        dispatch(fetchInstagramDataBegin());
        return axios.get(`//api.instagram.com/v1/users/${userId}/media/recent/?access_token=${apiKey}`)
            .then(response => {
                const responseData = response.data.data;
                dispatch(fetchInstagramDataSuccess(responseData));
                return responseData;
            })
            .catch(error => {
                dispatch(fetchInstagramDataError(error));
                return error;
            });
    };
}

export const fetchInstagramDataBegin = () => ({
    type: types.FETCH_INSTAGRAM_DATA_BEGIN
});

export const fetchInstagramDataSuccess = posts => ({
    type: types.FETCH_INSTAGRAM_DATA_SUCCESS,
    payload: { posts }
});

export const fetchInstagramDataError = error => ({
    type: types.FETCH_INSTAGRAM_DATA_FAILURE,
    payload: { error }
});
