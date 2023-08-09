import {ADD_FILM_ADMIN_FAIL,ADD_FILM_ADMIN_REQUSET,ADD_FILM_ADMIN_SUCCESS} from './_constantsAddFilm';
import api from '../../../../../Utils/apiUtils';

export const actFetchAddFilm= (form) => {
    return (dispatch) => {
        dispatch(actAddFilmRequest());

        api
            .post(`QuanLyPhim/ThemPhimUploadHinh`,form)
            .then((result) => {
                if (result.data.statusCode === 200) {
                    dispatch(actAddFilmSuccess(result.data.content));
                    console.log("Thêm phim success!");
                    alert('Thêm phim thành công!');
                }
            })
            .catch(error => {
                dispatch(actAddFilmFail(error));
                console.log("Thêm phim fail!", error)
            })
    }
}


const actAddFilmRequest = () => {
    return {
        type: ADD_FILM_ADMIN_REQUSET
    }
}

const actAddFilmSuccess = (data) => {
    return {
        type: ADD_FILM_ADMIN_SUCCESS,
        payload: data
    }
}

const actAddFilmFail = (error) => {
    return {
        type: ADD_FILM_ADMIN_FAIL,
        payload: error
    }
}