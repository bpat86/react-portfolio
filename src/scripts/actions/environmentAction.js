import * as types from '../constants/ActionTypes';

export const changeIsMobile = (isMobile) => {
	return {
		type: types.IS_MOBILE,
		isMobile,
	};
};

export const changeWidthAndHeight = (height, width) => {
	return {
		type: types.CHANGE_WIDTH_AND_HEIGHT,
		height,
		width,
	};
};

export const initEnvironment = () => {
	return dispatch => {
		const w = window,
	    d = document,
	    e = d.documentElement,
	    g = d.getElementsByTagName('body')[0],
	    windowWidth = w.innerWidth || e.clientWidth || g.clientWidth; //window width

		const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i
		.test(navigator.userAgent) || windowWidth <= 1024;

		dispatch(changeIsMobile(isMobile));
		dispatch(changeWidthAndHeight(window.innerHeight, window.innerWidth));

		window.onresize = () => {
			dispatch(changeWidthAndHeight(window.innerHeight, window.innerWidth));
		};
	};
};
