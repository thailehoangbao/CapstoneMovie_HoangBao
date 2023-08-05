import React, { useEffect } from 'react'
import { Carousel } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { actFetchDanhSachBanner } from './dunkCarosel/actDanhSachBanner';
import './CaroselStyle.css';

export default function Carosel() {

    const dispatch = useDispatch();

    const listCarosel = useSelector(state => state.danhSachBannerReducer.data);

    useEffect (() => {
        dispatch(actFetchDanhSachBanner());
    },[])

    const contentStyle = {
        height: '600px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100%'
    };


    const renderCarosel = (img) => {
        return listCarosel?.map((item, index) => {
            return (
                <div key={index}>
                    <div style={{ ...contentStyle, backgroundImage: `url(${item.hinhAnh})` }} >
                        <img src={item.hinhAnh} className='w-full h-full opacity-0' alt="123" />
                    </div>
                </div>
            )
        })
    }

    return (
        <Carousel effect="fade">
            {renderCarosel()}
        </Carousel>
    )
}
