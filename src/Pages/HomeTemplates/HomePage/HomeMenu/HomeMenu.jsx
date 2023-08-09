import React, { useEffect ,Fragment,useState} from 'react';
import { Radio, Space, Tabs } from 'antd';
import TabPane from 'antd/es/tabs/TabPane';
import moment from 'moment/moment';
import { useDispatch, useSelector } from 'react-redux';
import { actFetchThongTinHeThongRap } from './duckHomeMenu/actHomeMenu';
import { NavLink } from 'react-router-dom';

export default function HomeMenu() {

    const dispatch = useDispatch();
    const ThongTinHeThongRap = useSelector(state => state.thongTinHeThongRapReducer.data);

    console.log(ThongTinHeThongRap);

    useEffect(() => {
        dispatch(actFetchThongTinHeThongRap());
    }, []);

    const [tabPosition, setTabPosition] = useState('left');
    const changeTabPosition = (e) => {
        setTabPosition(e.target.value);
    };


    const renderHeThongRap = () => {
        return ThongTinHeThongRap?.map((heThongRap, index) => {
            let tabPosition = 'left';
            return (<TabPane tab={<img src={heThongRap.logo} className='rounded-full w-10'></img>} key={index}>
                <Tabs tabPosition={tabPosition}>
                    {heThongRap.lstCumRap.map((CumRap, index) => {
                        return (
                            <TabPane style={{height:"500px",overflowY:"auto"}} tab={
                                <div style={{ width: "300px" }} className='flex'>
                                    <img src={CumRap.hinhAnh} className='rounded-full w-10'></img>
                                    <div className='ml-2 text-left'>
                                        {CumRap.tenCumRap}
                                        <p className='text-red-700'>Xem chi tiết</p>
                                    </div>
                                </div>

                            } key={index}>
                                {CumRap.danhSachPhim?.slice(0, 10).map((phim, index) => {
                                    return <Fragment key={index}  >
                                        <div style={{ display: "flex" }} className='my-2'>
                                            <div style={{ display: "flex" }}>
                                                <img style={{ height: 84, width: 84 }} src={phim.hinhAnh} alt={phim.tenPhim} onError={(e) => { e.target.src = 'https://w7.pngwing.com/pngs/595/505/png-transparent-computer-icons-error-closeup-miscellaneous-text-logo.png'; e.target.onError = null; }} />
                                                <div>
                                                    <h1 className='ml-2 font text-xl text-red-600'>{phim.tenPhim}</h1>
                                                    <p className='text-gray-600 ml-2 mt-1'>{CumRap.diaChi}</p>
                                                    <div className='grid grid-cols-6 gap-1 ml-1'>
                                                        {phim.lstLichChieuTheoPhim?.slice(0, 10).map((lichChieu, index) => {
                                                            return <NavLink to={`/checkout/${lichChieu.maLichChieu}`} key={index} className="p-1 text-orange-600 font-thin hover:text-green-600 hover:transition-all duration-700">
                                                                {moment(lichChieu.ngayChieuGioChieu).format('hh:mm A')}
                                                            </NavLink>
                                                        })}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <hr />
                                    </Fragment>
                                })}
                            </TabPane>
                        )
                    })}
                </Tabs>
            </TabPane>
            )
        })
    }

    return (
        <div className='container mt-5 w-full'>
            {<div className='p-5' style={{width:"100%"}}>
                <Tabs tabPosition={tabPosition}>
                    {renderHeThongRap()}
                </Tabs>
            </div>}
        </div>
    )
}
