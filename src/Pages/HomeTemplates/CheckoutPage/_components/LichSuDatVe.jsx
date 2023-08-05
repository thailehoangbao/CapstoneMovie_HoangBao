import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RollbackOutlined } from '@ant-design/icons';
import { actFetchLichSuDatVe } from '../duckCheckOut/actLSDV';
import _ from 'lodash';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import Loader from '../../../../components/Loader/Loader';



export default function LichSuDatVe(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const thongTinNguoiDung = useSelector(state => state.lichSuDatVeReducer.data);
    const Loading = useSelector(state => state.lichSuDatVeReducer.loading);

    console.log(thongTinNguoiDung);

    useEffect(() => {
        dispatch(actFetchLichSuDatVe());
    }, [])

    if (Loading) {
        return <Loader />
    }

    const renderTicketItems = () => {
        return thongTinNguoiDung?.thongTinDatVe?.map((phim, index) => {

            const seats = _.first(phim.danhSachGhe);


            return <div className="p-2 lg:w-1/3 md:w-1/2 w-full" style={{height:"200px"}}  key={index}>
                <div className="h-full flex items-center border-gray-200 border p-3 rounded-lg">
                    <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={phim.hinhAnh} />
                    <div className="flex-grow ">
                        <h2 className="text-white title-font font-medium">{phim.tenPhim}</h2>
                        <p className="text-white font-thin text-xs">Thời gian đặt: {moment(phim.ngayDat).format('hh:mm A DD/MM/YYYY')}</p>
                        <p className='text-white font-thin text-xs'>Địa điểm: {seats.tenCumRap} - {seats.tenHeThongRap}</p>
                        <p className='text-white font-thin text-xs'>Ghế: {phim.danhSachGhe?.slice(0, 4).map((soGhe, index) => {
                            return <span key={index} className='p-1 text-red-600'>{`[${soGhe.tenGhe}]`}</span>
                        })} <span className='text-blue-600 cursor-pointer' onClick={() => {
                            navigate('/');
                        }}><RollbackOutlined /></span> </p>
                    </div>
                </div>
            </div>
        })
    }

    return (<section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
                <h1 className="sm:text-3xl text-xl font-medium title-font mb-4 text-purple-600">LỊCH SỬ ĐẶT VÉ KHÁCH HÀNG</h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base font-thin">Thông tin địa điểm thời gian của bạn ở dưới nhé!</p>
            </div>
            <div className="flex flex-wrap -m-2">
                {renderTicketItems()}
            </div>
        </div>
    </section>
    )
}
