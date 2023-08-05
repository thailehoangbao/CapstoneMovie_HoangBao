import { GET_LOGIN_FAIL, GET_LOGIN_REQUEST, GET_LOGIN_SUCCESS } from './_constantsLogin';
import api from '../../../../../Utils/apiUtils';

const actLoginSuccess = (data) => {
    return {
        type: GET_LOGIN_SUCCESS,
        payload: data
    }
}

const actLoginFail = (error) => {
    return {
        type: GET_LOGIN_FAIL,
        payload: error
    }
}

const actLoginRequest = () => {
    return {
        type: GET_LOGIN_REQUEST,
    }
}


export const actFetchLogin = (user, navigate) => {
    return (dispatch) => {
        dispatch(actLoginRequest());
        api
            .post(`/QuanLyNguoiDung/DangNhap`, user)
            .then((result) => {
                if (result.data.statusCode === 200) {
                    dispatch(actLoginSuccess(result.data.content));
                    console.log("Đăng Nhập Thành Công!", result.data.content);
                    if (navigate) {
                        alert('Bạn đã đăng nhập thành công!');
                        navigate('/'); // Gọi callback function để chuyển trang
                    }
                }
            })
            .catch((error) => {
                dispatch(actLoginFail(error));
                console.log("Thất bại", error);
            })
    }
}