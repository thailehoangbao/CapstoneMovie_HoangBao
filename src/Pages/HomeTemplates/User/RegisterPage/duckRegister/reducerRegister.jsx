import {GET_REGISTER_FAIL,GET_REGISTER_REQUEST,GET_REGISTER_SUCCESS} from './_constantsRegister';
const initialState = {
    loading: false,
    data: null,
    error: null,
}

const registerReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_REGISTER_REQUEST: {
            state.loading = true;
            state.data = null;
            state.error = null;
            return { ...state };
        }

        case GET_REGISTER_SUCCESS: {
            state.loading = false;
            state.data = [...action.payload];
            state.error = null;
            return { ...state };
        }

        case GET_REGISTER_FAIL: {
            state.loading = false;
            state.data = null;
            state.error = true;
            return { ...state };
        }

        default:
            return { ...state };
    }
}


export default registerReducer;