import {GET_THONG_TIN_NGUOI_DUNG_FAIL,GET_THONG_TIN_NGUOI_DUNG_REQUEST,GET_THONG_TIN_NGUOI_DUNG_SUCCESS} from './_constantsLSDV';

const initialState = {
    loading: false,
    data: null,
    error: null,
}

const lichSuDatVeReducer = (state = initialState, action ) => {
    switch (action.type) {

        case GET_THONG_TIN_NGUOI_DUNG_FAIL: {
            state.loading = false;
            state.data = null;
            state.error = true;

            return { ...state }
        }
        case GET_THONG_TIN_NGUOI_DUNG_SUCCESS: {

            state.loading = false;
            state.data = {...action.payload};
            state.error = null;

            return { ...state }
        }

        case GET_THONG_TIN_NGUOI_DUNG_REQUEST: {
            state.loading = true;
            state.data = null;
            state.error = null;

            return { ...state }
        }
        default:
            return { ...state }
    }
}

export default lichSuDatVeReducer;