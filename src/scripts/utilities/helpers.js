import moment from 'moment';

export function isMobile() {
    const w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    windowWidth = w.innerWidth || e.clientWidth || g.clientWidth; //window width

    return windowWidth <= 823; //returns true for widths smaller than 823 pixels
}

export function parseDate(value) {
    const parsedDate = new Date(1000*value);
    var monthAndDay = moment(parsedDate).format("MMMM D, YYYY");

    return monthAndDay;
}

export function calculateMediaAspectRatio(srcWidth, srcHeight, maxWidth, maxHeight) {
    const ratio = Math.min(maxWidth/srcWidth, maxHeight/srcHeight);

    return { width: srcWidth*ratio+"px", height: srcHeight*ratio+"px"};
}

export function getIndex(value, arr, param) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i][param] === value) {
            return i;
        }
    }

    // The value doesn't exist
    return -1;
}

export function getCurrentYear() {
    const currentTime = new Date();
    const currentYear = currentTime.getFullYear();

    return currentYear;
}
