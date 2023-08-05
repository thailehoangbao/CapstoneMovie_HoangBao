import {CLOSE_MODAL_URL, GET_MODAL_URL} from './_constantsModalVideo';

export const actModalVideo = (url) => {
    return {
        type: GET_MODAL_URL,
        payload: url
    }
}

export const actCloseModalVideo = () => {
    return {
        type: CLOSE_MODAL_URL,
    }
}