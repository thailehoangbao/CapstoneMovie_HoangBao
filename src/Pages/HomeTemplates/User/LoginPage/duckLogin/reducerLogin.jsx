import { TOKEN, USER_LOGIN } from '../../../../../Utils/_constantUtils';
import {GET_LOGIN_FAIL,GET_LOGIN_REQUEST,GET_LOGIN_SUCCESS} from './_constantsLogin';

let user = {};
if (localStorage.getItem(USER_LOGIN)) {
    user = JSON.parse(localStorage.getItem(USER_LOGIN));
}

const initialState = {
    loading: false,
    data: user,
    error: null,
}

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_LOGIN_REQUEST: {
            state.loading = true;
            state.data = null;
            state.error = null;
            return { ...state };
        }

        case GET_LOGIN_SUCCESS: {
            state.loading = false;
            state.data = {...action.payload};
            state.error = null;
            const thongTinDangNhap = {...action.payload};
            localStorage.setItem(USER_LOGIN,JSON.stringify(thongTinDangNhap));
            localStorage.setItem(TOKEN,JSON.stringify(thongTinDangNhap.accessToken));
            console.log(state.data ,"success data")
            return { ...state };
        }

        case GET_LOGIN_FAIL: {
            state.loading = false;
            state.data = null;
            state.error = true;
            return { ...state };
        }

        default:
            return { ...state };
    }
}


export default loginReducer;