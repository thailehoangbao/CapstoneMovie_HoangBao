import {DANH_SACH_BANNER_FAIL,DANH_SACH_BANNER_SUCCESS,DANH_SACH_BANNER_REQUEST} from './_contantsCarosel';
import api from '../../../../../Utils/apiUtils'

const actDanhSachBannerSuccess = (data) => {
    return {
        type: DANH_SACH_BANNER_SUCCESS,
        payload: data
    }
}

const actDanhSachBannerFail = (error) => {
    return {
        type: DANH_SACH_BANNER_FAIL,
        payload: error
    }
}

const actDanhSachBannerRequest = () => {
    return {
        type: DANH_SACH_BANNER_REQUEST,
    }
}


export const actFetchDanhSachBanner = () => {
    return (dispatch) => {
        dispatch(actDanhSachBannerRequest());

        api
            .get(`/QuanLyPhim/LayDanhSachBanner`)
            .then((result) => {
                if (result.data.statusCode === 200) {
                    dispatch(actDanhSachBannerSuccess(result.data.content));
                }
            })
            .catch((error) => {
                dispatch(actDanhSachBannerFail(error));
            })
    }
}