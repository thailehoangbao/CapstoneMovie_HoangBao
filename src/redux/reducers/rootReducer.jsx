import {combineReducers} from 'redux';
import heThongRapReducer from './../../Pages/HomeTemplates/_components/Footer/duckFooter/heThongRapReducer'
import danhSachBannerReducer from '../../Pages/HomeTemplates/_components/Carosel/dunkCarosel/reducerDanhSachBanner';
import listMovieReducer from '../../Pages/HomeTemplates/HomePage/ListMovies/duckListMovie/reducerListMovie';
import thongTinHeThongRapReducer from '../../Pages/HomeTemplates/HomePage/HomeMenu/duckHomeMenu/reducerHomeMenu';
import detailMoviesReducer from '../../Pages/HomeTemplates/DetailPage/duckDetailPage/reducerDetailPage';
import danhSachPhongVeReducer from '../../Pages/HomeTemplates/CheckoutPage/duckCheckOut/reducerCheckout';
import registerReducer from '../../Pages/HomeTemplates/User/RegisterPage/duckRegister/reducerRegister';
import loginReducer from '../../Pages/HomeTemplates/User/LoginPage/duckLogin/reducerLogin';
import lichSuDatVeReducer from '../../Pages/HomeTemplates/CheckoutPage/duckCheckOut/recuderLSDV';
import addFilmAdminReducer from '../../Pages/AdminTemplates/FilmsAdmin/AddFilm/duckAddFilm/reducerAddFilm';
import dashboardReducer from '../../Pages/AdminTemplates/Dashboard/duckDashboard/reducerDashboard';
import editFilmAdminReducer from '../../Pages/AdminTemplates/FilmsAdmin/EditFilm/duckEditFilm/reducerEditFilm';
import updateFilmAdminReducer from '../../Pages/AdminTemplates/FilmsAdmin/EditFilm/duckEditFilm/reducerUpdateFilm';
import modalVideoReducer from '../../components/ModalVideo/duckModal/reducerModalVideo';
import heThongRapShowTimeReducer from '../../Pages/AdminTemplates/ShowTime/duckShowTime/reducerShowTime';
import authReducer from '../../Pages/AdminTemplates/AuthPage/duckAuthPage/reducerAuthPage';
import addUserReducer from '../../Pages/AdminTemplates/User/AddUser/duckAddUser/reducerAddUser';
import editUserReducer from '../../Pages/AdminTemplates/User/EditUser/duckEditUser/reducerEditUser';

const rootReducer = combineReducers({
    //child reducers
    heThongRapReducer: heThongRapReducer,
    danhSachBannerReducer: danhSachBannerReducer,
    listMovieReducer: listMovieReducer,
    thongTinHeThongRapReducer: thongTinHeThongRapReducer,
    detailMoviesReducer: detailMoviesReducer,
    danhSachPhongVeReducer: danhSachPhongVeReducer,
    registerReducer: registerReducer,
    loginReducer: loginReducer,
    lichSuDatVeReducer: lichSuDatVeReducer,
    addFilmAdminReducer: addFilmAdminReducer,
    dashboardReducer: dashboardReducer,
    editFilmAdminReducer: editFilmAdminReducer,
    updateFilmAdminReducer: updateFilmAdminReducer,
    modalVideoReducer: modalVideoReducer,
    heThongRapShowTimeReducer: heThongRapShowTimeReducer,
    authReducer: authReducer,
    addUserReducer: addUserReducer,
    editUserReducer: editUserReducer
})

export default rootReducer;