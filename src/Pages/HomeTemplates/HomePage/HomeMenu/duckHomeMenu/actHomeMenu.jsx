import api from '../../../../../Utils/apiUtils';
import {GROUPID} from '../../../../../Utils/_constantUtils';
import {GET_HE_THONG_RAP_HOMEMENU_FAIL,GET_HE_THONG_RAP_HOMEMENU_REQUEST,GET_HE_THONG_RAP_HOMEMENU_SUCCESS} from './_constantsHomeMenu';
const actThongTinHeThongRapSuccess = (data) => {
    return {
        type:GET_HE_THONG_RAP_HOMEMENU_SUCCESS,
        payload: data
    }
}

const actThongTinHeThongRapFail = (error) => {
    return {
        type: GET_HE_THONG_RAP_HOMEMENU_FAIL,
        payload: error
    }
}

const actThongTinHeThongRapRequest = () => {
    return {
        type: GET_HE_THONG_RAP_HOMEMENU_REQUEST,
    }
}


export const actFetchThongTinHeThongRap = () => {
    return (dispatch) => {
        dispatch(actThongTinHeThongRapRequest());

        api
            .get(`/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUPID}`)
            .then((result) => {
                if (result.data.statusCode === 200) {
                    dispatch(actThongTinHeThongRapSuccess(result.data.content));
                }
            })
            .catch((error) => {
                dispatch(actThongTinHeThongRapFail(error));
            })
    }
}
