import { CLOSE_MODAL_URL, GET_MODAL_URL } from './_constantsModalVideo';


const initialState = {
    turn: false,
    url: ''
}

const modalVideoReducer = (state = initialState,action) => {
    switch (action.type) {

        case GET_MODAL_URL: {
            state.turn = true;
            state.url = action.payload;
            return {...state}
        }

        case CLOSE_MODAL_URL : {
            state.turn = false;
            console.log(state.turn);
            return {...state}
        }

        default:
            return state
    }
}

export default modalVideoReducer;
