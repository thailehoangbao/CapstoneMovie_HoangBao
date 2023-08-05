import { HE_THONG_RAP_FAIL, HE_THONG_RAP_SUCCESS, HE_THONG_RAP_REQUEST } from './contantsFooter';

const initialState = {
    loading: false,
    data: null,
    error: null,
}

const heThongRapReducer = (state = initialState, action) => {
    switch (action.type) {
        case HE_THONG_RAP_REQUEST: {
            state.loading = true;
            state.data = null;
            state.error = null;
            return { ...state };
        }

        case HE_THONG_RAP_SUCCESS: {
            state.loading = false;
            state.data = action.payload;
            state.error = null;
            return { ...state };
        }

        case HE_THONG_RAP_FAIL: {
            state.loading = false;
            state.data = null;
            state.error = true;
            return { ...state };
        }

        default:
            return { ...state };
    }
}


export default heThongRapReducer;