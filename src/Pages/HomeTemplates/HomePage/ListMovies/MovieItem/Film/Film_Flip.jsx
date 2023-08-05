import React, { useState } from 'react';
import './Film_flip.css';
import { PlayCircleOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { actModalVideo } from '../../../../../../components/ModalVideo/duckModal/actModalVideo';


export default function Film_Flip(props) {
    const { film } = props;
    const dispatch = useDispatch();

    return (
        <div className="flip-card mb-5" style={{ width: 200, height: 300 }}>
            <div className="flip-card-inner w-full">
                <div className="flip-card-front" >
                    <img src={film.hinhAnh} alt="Avatar" style={{ width: 200, height: 300 }} />
                </div>
                <div className="flip-card-back" style={{ position: "relative", backgroundColor: "rgba(0,0,0,0.9)" }}>
                    <div style={{ position: "absolute", top: 0, left: 0 }}>
                        <img src={film.hinhAnh} alt="Avatar" style={{ width: 200, height: 300 }} />
                    </div>
                    <div className='w-full h-full' style={{ position: "absolute", width: "100%", height: "100%", top: 0, left: 0, backgroundColor: "rgba(0,0,0,.5)", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <div >
                            <div className='rounded-full cursor-pointer '><PlayCircleOutlined className='hover:text-yellow-400 hover:transition-all hover:duration-700' style={{ fontSize: "50px" }} onClick={() => {
                                dispatch(actModalVideo(film.trailer.split('v=')[1].split('&')[0]));
                            }} /></div>
                            <div className='text-xl mt-2 font-bold'>{film.tenPhim}</div>
                        </div>
                    </div>
                </div>
            </div>
            <Link to={`detail/${film.maPhim}`} onClick={() => {
            }} style={{
                padding: '8px',
                borderRadius: '4px',
                overflow: 'hidden',
                width: '100%',
                display: 'block',
                color: 'white',
                backgroundColor: '#696969',
                textAlign: 'center',
                fontWeight: 'bold',
                marginTop: '2px',
            }} className='hover:opacity-80 hover:transition-all duration-700'>ĐẶT VÉ</Link>
        </div>
    )
}
