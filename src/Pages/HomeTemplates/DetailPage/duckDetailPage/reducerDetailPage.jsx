import { GET_DETAIL_MOVIES_FAIL, GET_DETAIL_MOVIES_SUCCESS, GET_DETAIL_MOVIES_REQUEST } from './_constantsDetailPage'
const initialState = {
    loading: false,
    danhSachGheData: null,
    error: null,
}

const detailMoviesReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_DETAIL_MOVIES_FAIL: {
            state.loading = false;
            state.data = null;
            state.error = true;

            return { ...state }
        }
        case GET_DETAIL_MOVIES_SUCCESS: {

            state.loading = false;
            state.data = action.payload;
            state.error = null;

            return { ...state }
        }

        case GET_DETAIL_MOVIES_REQUEST: {
            state.loading = true;
            state.data = null;
            state.error = null;

            return { ...state }
        }
        
        default:
            return state
    }
}

export default detailMoviesReducer;
