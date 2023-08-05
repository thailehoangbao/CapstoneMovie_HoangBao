import {GET_REGISTER_FAIL,GET_REGISTER_REQUEST,GET_REGISTER_SUCCESS} from './_constantsRegister';
import api from '../../../../../Utils/apiUtils';

const actRegisterSuccess = (data) => {
    return {
        type:GET_REGISTER_SUCCESS,
        payload: data
    }
}

const actRegisterFail = (error) => {
    return {
        type: GET_REGISTER_FAIL,
        payload: error
    }
}

const actRegisterRequest = () => {
    return {
        type: GET_REGISTER_REQUEST,
    }
}


export const actFetchRegister = (user) => {
    return (dispatch) => {
        dispatch(actRegisterRequest());

        api
            .post(`/QuanLyNguoiDung/DangKy`,user)
            .then((result) => {
                if (result.data.statusCode === 200) {
                    dispatch(actRegisterSuccess(result.data.content));
                }
            })
            .catch((error) => {
                dispatch(actRegisterFail(error));
            })
    }
}