import { CHUYEN_TABS, DAT_VE, GET_DANH_SACH_PHONG_VE_FAIL, GET_DANH_SACH_PHONG_VE_REQUEST, GET_DANH_SACH_PHONG_VE_SUCCESS } from './_constatnsCheckout';
import api from '../../../../Utils/apiUtils';

const actDanhSachPhongVeRequest = () => {
    return {
        type: GET_DANH_SACH_PHONG_VE_REQUEST
    }
}

const actDanhSachPhongVeSuccess = (data) => {
    return {
        type: GET_DANH_SACH_PHONG_VE_SUCCESS,
        payload: data
    }
}

const actDanhSachPhongVeFail = (error) => {
    return {
        type: GET_DANH_SACH_PHONG_VE_FAIL,
        payload: error
    }
}

export const actDatVe = (gheDuocChon) => {
    return {
        type: DAT_VE,
        payload: gheDuocChon
    }
}


export const actChuyenTabs = (key) => {
    return {
        type: CHUYEN_TABS,
        payload: key
    }
}


export const actFetchDanhSachPhongVe = (maLichChieu) => {
    return (dispatch) => {
        dispatch(actDanhSachPhongVeRequest());
        
        api
            .get(`QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`)
            .then((result) => {
                if (result.data.statusCode === 200) {
                    dispatch(actDanhSachPhongVeSuccess(result.data.content));
                }
            })
            .catch(error => {
                dispatch(actDanhSachPhongVeFail(error));
            })
    }
}


export const actFetchQuanLyDatVe = (thongTinGheDaChon) => {
    return (dispatch) => {
        dispatch(actDanhSachPhongVeRequest());

        api
            .post(`QuanLyDatVe/DatVe`,thongTinGheDaChon)
            .then((result) => {
                if (result.data.statusCode === 200) {
                    dispatch(actDanhSachPhongVeSuccess(result.data.content));
                    console.log("Đặt vé thành công!");
                }
            })
            .then(() => {
                dispatch(actFetchDanhSachPhongVe(thongTinGheDaChon.maLichChieu));
            })
            .catch(error => {
                dispatch(actDanhSachPhongVeFail(error));
            })
    }
}