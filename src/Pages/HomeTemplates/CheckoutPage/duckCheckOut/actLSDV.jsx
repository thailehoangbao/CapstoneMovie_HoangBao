import {GET_THONG_TIN_NGUOI_DUNG_FAIL,GET_THONG_TIN_NGUOI_DUNG_REQUEST,GET_THONG_TIN_NGUOI_DUNG_SUCCESS} from './_constantsLSDV';
import api from '../../../../Utils/apiUtils';

const actLichSuDatVeRequest = () => {
    return {
        type: GET_THONG_TIN_NGUOI_DUNG_REQUEST
    }
}

const actLichSuDatVeSuccess = (data) => {
    return {
        type: GET_THONG_TIN_NGUOI_DUNG_SUCCESS,
        payload: data
    }
}

const actLichSuDatVeFail = (error) => {
    return {
        type: GET_THONG_TIN_NGUOI_DUNG_FAIL,
        payload: error
    }
}


export const actFetchLichSuDatVe = () => {
    return (dispatch) => {
        dispatch(actLichSuDatVeRequest());

        api
            .post(`QuanLyNguoiDung/ThongTinTaiKhoan`)
            .then((result) => {
                if (result.data.statusCode === 200) {
                    dispatch(actLichSuDatVeSuccess(result.data.content));
                    console.log("Success")
                }
            })
            .catch(error => {
                dispatch(actLichSuDatVeFail(error));
                console.log("Error: " + error)
            })
    }
}