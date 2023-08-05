import {GET_HE_THONG_RAP_HOMEMENU_FAIL,GET_HE_THONG_RAP_HOMEMENU_REQUEST,GET_HE_THONG_RAP_HOMEMENU_SUCCESS} from './_constantsHomeMenu';
const initialState = {
    loading: false,
    data: null,
    error: null,
}

const thongTinHeThongRapReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_HE_THONG_RAP_HOMEMENU_REQUEST: {
            state.loading = true;
            state.data = null;
            state.error = null;
            return { ...state };
        }

        case GET_HE_THONG_RAP_HOMEMENU_SUCCESS: {
            state.loading = false;
            state.data = [...action.payload];
            state.listMovieFilter = [...state.data];
            state.error = null;
            return { ...state };
        }

        case GET_HE_THONG_RAP_HOMEMENU_FAIL: {
            state.loading = false;
            state.data = null;
            state.error = true;
            return { ...state };
        }

        default:
            return {...state}
    }
}

export default thongTinHeThongRapReducer;