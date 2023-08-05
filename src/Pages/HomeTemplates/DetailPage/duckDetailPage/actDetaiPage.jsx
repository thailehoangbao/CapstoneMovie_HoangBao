import {GET_DETAIL_MOVIES_FAIL,GET_DETAIL_MOVIES_REQUEST,GET_DETAIL_MOVIES_SUCCESS} from './_constantsDetailPage';
import api from '../../../../Utils/apiUtils';

export const actFetchDetailMovie = (maPhim) => {
    return (dispatch) => {
        dispatch(actDetailMovieRequest());

        api
            .get(`QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`)
            .then((result) => {
                if (result.data.statusCode === 200) {
                    dispatch(actDetailMovieSuccess(result.data.content));
                }
            })
            .catch(error => {
                dispatch(actDetailMovieFail(error));
            })
    }
}


const actDetailMovieRequest = () => {
    return {
        type: GET_DETAIL_MOVIES_REQUEST
    }
}

const actDetailMovieSuccess = (data) => {
    return {
        type: GET_DETAIL_MOVIES_SUCCESS,
        payload: data
    }
}

const actDetailMovieFail = (error) => {
    return {
        type: GET_DETAIL_MOVIES_REQUEST,
        payload: error
    }
}