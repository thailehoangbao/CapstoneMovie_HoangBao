import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actFetchDetailMovie } from './duckDetailPage/actDetaiPage';
import { useParams } from 'react-router-dom';
import './Glass.css';
import moment from 'moment/moment';
import { Rate } from 'antd';
import { Tabs, Radio, Space } from 'antd';
import { NavLink } from 'react-router-dom';
import '../../../assets/circle-rating/CircleRating.css'

export default function DetailPage() {
    const params = useParams();
    const dispatch = useDispatch();
    const filmDetail = useSelector(state => state.detailMoviesReducer.data);
    console.log(filmDetail);

    useEffect(() => {
        dispatch(actFetchDetailMovie(`${params.id}`));
    }, []);

    const { TabPane } = Tabs;

    return (
        <div className={`glassmorphism pt-60`} style={{ width: "100%", height: "1000px", backgroundPosition: "center", backgroundSize: "cover", backgroundImage: `url(${filmDetail?.hinhAnh})`, backgroundRepeat: "no-repeat" }}>
            <div className='grid grid-cols-12 detail__film__content'>
                <div className='col-span-8 col-start-3 flex'>
                    <div className='grid grid-cols-3'>
                        <img src={filmDetail?.hinhAnh} style={{ height: 300, width: 200 }} alt={filmDetail?.tenPhim} />
                        <div className='text-center text-white col-span-2 p-3'>
                            <p className='font-thin'>Ngày Chiếu : {moment(filmDetail?.ngayKhoiChieu).format("DD - MM - YYYY")}</p>
                            <p className='text-xl'>{filmDetail?.tenPhim}</p>
                            <p className='font-thin'>{filmDetail?.moTa}</p>
                        </div>
                    </div>
                    <div style={{ paddingTop: "5%" }}>
                        <div className={`c100 p${filmDetail?.danhGia * 10} medium`}>
                            <span className=''>{filmDetail?.danhGia * 10}%</span>
                            <div className="slice">
                                <div className="bar"></div>
                                <div className="fill"></div>
                            </div>
                        </div>
                        <div >
                            <Rate allowHalf defaultValue={2.5} value={filmDetail?.danhGia / 2} />
                        </div>
                        <p className='text-center text-yellow-500'>{Math.floor(Math.random() * 101)} Đánh Giá</p>
                    </div>
                </div>
                <div className='col-span-8 col-start-3'>
                    <Tabs defaultActiveKey='1' centered>
                        <TabPane tab="Lịch Chiếu" key="1">
                            <div className='col-span-6 col-start-3 mt-20'>
                                <Tabs tabPosition='left'>
                                    {filmDetail?.heThongRapChieu?.map((heThongRap, index) => {
                                        return <TabPane key={index} tab={<img src={heThongRap.logo} width={50} height={50} style={{ borderRadius: "50%" }}></img>} >
                                            <Tabs tabPosition='left'>
                                                {heThongRap.cumRapChieu?.map((cumRap, index) => {
                                                    return <TabPane key={index} tab={<img src={cumRap.hinhAnh} width={50} height={50}></img>}>
                                                        <div>
                                                            <p className='text-white text-2xl'>{cumRap.tenCumRap}</p>
                                                            <p className='text-white font-thin text-md'>{cumRap.diaChi}</p>
                                                            <div>
                                                                {cumRap.lichChieuPhim?.map((lichChieuPhim, index) => {
                                                                    return <NavLink activeClassName={``} to={`/checkout/${lichChieuPhim.maLichChieu}`} className='text-green-500 text-lg p-2 hover:no-underline hover:text-white' key={index}>
                                                                        {moment(lichChieuPhim.ngayChieuGioChieu).format("HH:MM A DD/MM/YYYY")}
                                                                    </NavLink>
                                                                })}
                                                            </div>
                                                        </div>
                                                    </TabPane>
                                                })}
                                            </Tabs>
                                        </TabPane>
                                    })}
                                </Tabs>
                            </div>
                        </TabPane>
                        <TabPane tab="Thông Tin" key="2">

                        </TabPane>
                        <TabPane tab="Đánh Giá" key="3">

                        </TabPane>
                    </Tabs>
                </div>
            </div>

        </div>
    )
}
