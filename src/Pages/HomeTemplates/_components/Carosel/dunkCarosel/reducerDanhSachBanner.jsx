import {DANH_SACH_BANNER_FAIL,DANH_SACH_BANNER_SUCCESS,DANH_SACH_BANNER_REQUEST} from './_contantsCarosel';
const initialState = {
    loading: false,
    data: null,
    error: null,
};

const danhSachBannerReducer = (state = initialState, action) => {
    switch (action.type) {
        case DANH_SACH_BANNER_REQUEST: {
            state.loading = true;
            state.data = null;
            state.error = null;
            return { ...state };
        }

        case DANH_SACH_BANNER_SUCCESS: {
            state.loading = false;
            state.data = action.payload;
            state.error = null;
            return { ...state };
        }

        case DANH_SACH_BANNER_FAIL: {
            state.loading = false;
            state.data = null;
            state.error = true;
            return { ...state };
        }

        default:
            return { ...state };
    }
}

export default danhSachBannerReducer ;
