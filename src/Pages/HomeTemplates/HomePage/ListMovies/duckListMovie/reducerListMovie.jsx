import {LIST_MOVIES_FAIL,LIST_MOVIES_SUCCESS,LIST_MOVIES_REQUEST, SET_FILM_DANG_CHIEU, SET_FILM_SAP_CHIEU} from './_contantsListMovie';
const initialState = {
    loading: false,
    data: null,
    error: null,
    listMovieFilter: []
}

const listMovieReducer = (state = initialState, action) => {
    switch (action.type) {
        case LIST_MOVIES_REQUEST: {
            state.loading = true;
            state.data = null;
            state.error = null;
            return { ...state };
        }

        case LIST_MOVIES_SUCCESS: {
            state.loading = false;
            state.data = [...action.payload];
            state.listMovieFilter = [...state.data];
            state.error = null;
            return { ...state };
        }

        case LIST_MOVIES_FAIL: {
            state.loading = false;
            state.data = null;
            state.error = true;
            return { ...state };
        }

        case SET_FILM_DANG_CHIEU: {
            let dataClone = [...state.data];
            let newData = dataClone.filter((film,index) => film.sapChieu === action.payload);
            state.listMovieFilter = newData;
            return { ...state };
        }

        case SET_FILM_SAP_CHIEU : {
            let dataClone = [...state.data];
            let newData = [...dataClone.filter((film,index) => film.sapChieu === action.payload)];
            state.listMovieFilter = newData;
            return { ...state };
        }

        default:
            return { ...state };
    }
}


export default listMovieReducer;