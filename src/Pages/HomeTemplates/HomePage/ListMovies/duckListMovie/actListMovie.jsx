import {LIST_MOVIES_FAIL,LIST_MOVIES_SUCCESS,LIST_MOVIES_REQUEST, SET_FILM_DANG_CHIEU, SET_FILM_SAP_CHIEU} from './_contantsListMovie';
import api from '../../../../../Utils/apiUtils';
import {GROUPID} from '../../../../../Utils/_constantUtils';
const actHeThongRapSuccess = (data) => {
    return {
        type:LIST_MOVIES_SUCCESS,
        payload: data
    }
}

const actHeThongRapFail = (error) => {
    return {
        type: LIST_MOVIES_FAIL,
        payload: error
    }
}

const actHeThongRapRequest = () => {
    return {
        type: LIST_MOVIES_REQUEST,
    }
}

export const actPhimDangChieu = () => {
    return {
        type: SET_FILM_DANG_CHIEU,
        payload:true
    }
}

export const actPhimSapChieu = () => {
    return {
        type: SET_FILM_SAP_CHIEU,
        payload:false
    }
}

export const actFetchListMovie = () => {
    return (dispatch) => {
        dispatch(actHeThongRapRequest());

        api
            .get(`/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUPID}`)
            .then((result) => {
                if (result.data.statusCode === 200) {
                    dispatch(actHeThongRapSuccess(result.data.content));
                }
            })
            .catch((error) => {
                dispatch(actHeThongRapFail(error));
            })
    }
}



