import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actChuyenTabs, actFetchDanhSachPhongVe, actFetchQuanLyDatVe } from './duckCheckOut/actCheckout';
import { useNavigate, useParams } from 'react-router-dom';
import style from './Checkoutcss.module.css';
import { Tabs } from 'antd';
import TabPane from 'antd/es/tabs/TabPane';
import _ from 'lodash';
import { CloseCircleOutlined, UserOutlined,RollbackOutlined,HomeOutlined } from '@ant-design/icons';
import { ThongTinDatVe } from './duckCheckOut/_constatnsCheckout';
import { actDatVe } from './duckCheckOut/actCheckout';
import LichSuDatVe from './_components/LichSuDatVe';
import { USER_LOGIN } from '../../../Utils/_constantUtils';
import Loader from '../../../components/Loader/Loader';




function CheckoutPage() {

    const dispatch = useDispatch();
    const danhSachPhongVe = useSelector(state => state.danhSachPhongVeReducer.data);
    const danhSachGheDangDat = useSelector(state => state.danhSachPhongVeReducer.danhSachGheDangDat);
    const danhSachGheKhachDat = useSelector(state => state.danhSachPhongVeReducer.danhSachGheKhachDat);
    const LoadingDanhSachPhongVe = useSelector(state => state.danhSachPhongVeReducer.loading);
    const LoadingDatVe = useSelector(state => state.danhSachPhongVeReducer.loading);


    console.log(danhSachPhongVe);
    const maLichChieu = useParams();

    const userLogin = useSelector(state => state.loginReducer.data);
    console.log("userLogin: " + userLogin);

    useEffect(() => {
        dispatch(actFetchDanhSachPhongVe(maLichChieu.id));
    }, []);

    if (LoadingDanhSachPhongVe) {
        return <Loader />
    }

    const thongTinPhim = danhSachPhongVe?.thongTinPhim;
    const danhSachGhe = danhSachPhongVe?.danhSachGhe;

    const renderSeats = () => {
        return danhSachGhe?.map((ghe, index) => {
            let gheDaDat = ghe.daDat === true ? 'gheDaDat' : '';
            let gheDangDat = '';
            let viTriDangChon = danhSachGheDangDat.findIndex(gheDD => gheDD.maGhe === ghe.maGhe);
            let gheDaDuocDat = '';


            //kiểm tra từng ghế render xem có phải ghế khách đặt hay kg
            let gheKhachDat = '';
            let vitriGheKhachDat = danhSachGheKhachDat.findIndex(gheKD => gheKD.maGhe === ghe.maGhe);
            if (vitriGheKhachDat !== -1) {
                gheKhachDat = 'gheKhachDangDat';
            }


            if (userLogin.taiKhoan === ghe.taiKhoanNguoiDat) {
                gheDaDuocDat = 'gheDaDuocDat';
            }


            if (viTriDangChon !== -1) {
                gheDangDat = 'gheDangDat'
            } else {
                gheDangDat = '';
            }

            const iconCloseCircleOutlined = (ghe) => {
                if (gheDaDuocDat || gheKhachDat !== '') {
                    return <UserOutlined style={{ marginBottom: 5 }} />
                } else {
                    if (ghe.daDat === true) {
                        return < CloseCircleOutlined style={{ marginBottom: 5 }} />
                    }
                    return ghe.stt
                }
            }

            return (
                <Fragment key={index}>
                    {ghe.loaiGhe === "Vip" ?
                        <button onClick={() => {
                            dispatch(actDatVe(ghe));
                        }} disabled={ghe.daDat || gheKhachDat !== ''} className={`${style['gheVip']} ${style['ghe']} ${style[`${gheDaDat}`]} ${style[`${gheDangDat}`]} ${style[`${gheDaDuocDat}`]} ${style[`${gheKhachDat}`]} ${style[`buttonAction`]}`} key={index}>
                            {iconCloseCircleOutlined(ghe)}
                        </button> :
                        <button onClick={() => {
                            dispatch(actDatVe(ghe));
                        }} disabled={ghe.daDat || gheKhachDat !== ''} className={`${style['ghe']} ${style[`${gheDaDat}`]} ${style[`${gheDangDat}`]} ${style[`${gheDaDuocDat}`]} ${style[`${gheKhachDat}`]} ${style[`buttonAction`]}`} key={index}>
                            {iconCloseCircleOutlined(ghe)}
                        </button>}
                    {(index + 1) % 16 === 0 ? <br /> : ''}
                </Fragment>
            )
        })
    }


    return (
        <div className='min-h-screen p-0'>
            <div className='grid grid-cols-12'>
                <div className='col-span-9'>
                    <div className='flex flex-col justify-center mt-5'>
                        <div className='bg-black' style={{ height: "8px", width: "98%" }}>

                        </div>
                        <div className={`${style['hinh_thang']} text-center`}>
                            <h3 className='text-yellow-400 text-lg'>Màn Hình</h3>
                        </div>
                        <div className='container'>
                            {renderSeats()}
                        </div>
                    </div>
                    <div className='mt-5 flex justify-center text-white'>
                        <table className='min-w-full divide-y divide-gray-300 text-center'>
                            <thead>
                                <tr>
                                    <th>Ghế Thường</th>
                                    <th>Ghế VIP</th>
                                    <th>Ghế Đã Đặt</th>
                                    <th>Ghế Bạn Đã Chọn</th>
                                    <th>Ghế Đang Chọn</th>
                                    <th>Ghế Khách Đang Đặt</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <button className={`${style['ghe']}`}>00</button>
                                    </td>
                                    <td>
                                        <button className={`${style['ghe']} ${style['gheVip']}`}>00</button>
                                    </td>
                                    <td>
                                        <button className={`${style['ghe']} ${style['gheDaDat']}`}>< CloseCircleOutlined style={{ marginBottom: 5 }} /></button>
                                    </td>
                                    <td>
                                        <button className={`${style['ghe']} ${style['gheDaDuocDat']}`}><UserOutlined style={{ marginBottom: 5 }} /></button>
                                    </td>
                                    <td>
                                        <button className={`${style['ghe']} ${style['gheDangDat']}`}>00</button>
                                    </td>
                                    <td>
                                        <button className={`${style['ghe']} ${style['gheKhachDangDat']}`}><UserOutlined style={{ marginBottom: 5 }} /></button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='col-span-3 mt-20 text-white'>
                    <hr />
                    <h3 className='text-xl text-center text-red-600 py-2'>{thongTinPhim?.tenPhim}</h3>
                    <p><span className='font-bold'>Tên Rạp: </span>{thongTinPhim?.tenCumRap}</p>
                    <p><span className='font-bold'>Địa Chỉ: </span>{thongTinPhim?.diaChi}</p>
                    <p><span className='font-bold'>Ngày Chiếu: </span>{thongTinPhim?.ngayChieu}</p>
                    <p className='pb-2'><span className='font-bold'>Giờ Chiếu: </span>{thongTinPhim?.gioChieu}</p>
                    <hr />
                    <div className='w-full py-2'>
                        <div className='flex flex-wrap'>
                            <span className='text-red-600'>Ghế :</span>
                            {_.sortBy(danhSachGheDangDat, ['stt']).map((gheDD, index) => {
                                return <span className='text-green-600 px-2' key={index}>{gheDD.stt}</span>
                            })}
                        </div>
                    </div>
                    <hr />
                    <div className='text-left py-2'>
                        <span className='text-red-600 mr-2'>Tổng Tiền : </span>
                        <span className='text-lg text-green-500'>{danhSachGheDangDat.reduce((sum, gheDD, index) => {
                            return sum += gheDD.giaVe * 1;
                        }, 0).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</span>
                    </div>
                    <hr />
                    <div className='mt-4'>Tài Khoản: {userLogin.taiKhoan}</div>
                    <div className='mt-4 mb-4'>Email:  {userLogin.email}</div>
                    <hr />
                    <div className='flex flex-col justify-end mb-0 items-center'>
                        <button onClick={() => {
                            const thongTinDatVe = new ThongTinDatVe();
                            thongTinDatVe.maLichChieu = maLichChieu.id * 1;
                            thongTinDatVe.danhSachVe = danhSachGheDangDat;

                            const request = {
                                maLichChieu: thongTinDatVe.maLichChieu,
                                danhSachVe: thongTinDatVe.danhSachVe
                            }
                            dispatch(actFetchQuanLyDatVe(request));
                            if (LoadingDanhSachPhongVe) {
                                return <Loader />
                            }
                        }} className={`${style[`ticketAction`]} mt-4 text-white py-2 w-full rounded-md cursor-pointer`} >
                            ĐẶT VÉ
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default function (props) {
    const navigate = useNavigate();


    if (!localStorage.getItem(USER_LOGIN)) {
        useEffect(() => {
            navigate('/login');
        }, []);
    }


    const tabActive = useSelector(state => state.danhSachPhongVeReducer.tabActive);
    const userLogin = useSelector(state => state.loginReducer.data);

    const dispatch = useDispatch();
    return <div className={`relative pl-20 pr-20 ${style[`bg-checkout`]} text-white`}>
        <Tabs className={`${style[`ant-tabs-tab-btn`]}`} defaultActiveKey='1' activeKey={tabActive} onChange={(key) => {
            dispatch(actChuyenTabs(key));
        }}>
            <TabPane tab='01 THÔNG TIN RẠP CHIẾU' key={1} label={`Tabs 1`}>
                <CheckoutPage />
            </TabPane>
            <TabPane tab='02 LỊCH SỬ ĐẶT VÉ' key={2} label={`Tabs 2`} >
                <LichSuDatVe />
            </TabPane>
        </Tabs>
        <div style={{ position: "absolute", top: "10px", right: "120px", zIndex: "1", width: "150px" }}>
            <div className='grid grid-cols-3'>
                <div className='col-span-1'>
                    <button className='btn btn-danger' onClick={()=>{
                        navigate('/')
                    }}><HomeOutlined /><RollbackOutlined /></button>
                </div>
                <div className='col-span-2'>
                    <div className='grid grid-cols-2 w-full'>
                        <div className='col-span-1/3'>
                            <img src={`https://i.pravatar.cc/150?u=${userLogin.taiKhoan}`} alt="" style={{ width: "30px", height: "30px", borderRadius: "50%", marginLeft: "8px" }} />
                        </div>
                        <div className='col-span-2/3 mt-1'>
                            {userLogin.taiKhoan}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

