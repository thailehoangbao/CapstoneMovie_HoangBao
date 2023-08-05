import {HE_THONG_RAP_REQUEST,HE_THONG_RAP_SUCCESS,HE_THONG_RAP_FAIL} from './contantsFooter';
import api from '../../../../../Utils/apiUtils';

const actHeThongRapSuccess = (data) => {
    return {
        type: HE_THONG_RAP_SUCCESS,
        payload: data
    }
}

const actHeThongRapFail = (error) => {
    return {
        type: HE_THONG_RAP_FAIL,
        payload: error
    }
}

const actHeThongRapRequest = () => {
    return {
        type: HE_THONG_RAP_REQUEST,
    }
}


export const actFetchHeThongRap = () => {
    return (dispatch) => {
        dispatch(actHeThongRapRequest());

        api
            .get(`QuanLyRap/LayThongTinHeThongRap`)
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



