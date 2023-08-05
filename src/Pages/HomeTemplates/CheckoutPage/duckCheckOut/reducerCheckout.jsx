import { CHUYEN_TABS, DAT_VE, GET_DANH_SACH_PHONG_VE_FAIL, GET_DANH_SACH_PHONG_VE_REQUEST, GET_DANH_SACH_PHONG_VE_SUCCESS } from './_constatnsCheckout';
const initialState = {
    loading: false,
    data: null,
    error: null,
    danhSachGheDangDat: [],
    danhSachGheKhachDat: [
        {
            maGhe: 49481,
        },
        {
            maGhe: 49482,
        }
    ],
    tabActive: '1'
}

const danhSachPhongVeReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_DANH_SACH_PHONG_VE_FAIL: {
            state.loading = false;
            state.data = null;
            state.error = true;

            return { ...state }
        }
        case GET_DANH_SACH_PHONG_VE_SUCCESS: {

            state.loading = false;
            state.data = action.payload;
            state.error = null;

            return { ...state }
        }

        case GET_DANH_SACH_PHONG_VE_REQUEST: {
            state.loading = true;
            state.data = null;
            state.error = null;

            return { ...state }
        }

        case DAT_VE: {
            //Cập nhật danh sách ghế cập nhật
            let danhSachGheUpdate = [...state.danhSachGheDangDat];
            let index = danhSachGheUpdate.findIndex(gheDD => gheDD.maGhe === action.payload.maGhe);
            if (index !== -1) {
                danhSachGheUpdate.splice(index, 1);
                state.danhSachGheDangDat = danhSachGheUpdate;
            } else {
                danhSachGheUpdate.push(action.payload);
            }
            state.danhSachGheDangDat = danhSachGheUpdate;
            console.log("danhSachGheUpdate", state.danhSachGheDangDat);
            return { ...state }
        }

        case CHUYEN_TABS : {
            state.tabActive = action.payload;
            return { ...state}
        }

        default:
            return { ...state }
    }
}


export default danhSachPhongVeReducer;