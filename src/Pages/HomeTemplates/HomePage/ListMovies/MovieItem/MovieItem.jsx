import React, { useState } from 'react';
import Slider from "react-slick";
import styleSlickRow from './MovieItemStyle.css';
import Film_Flip from './Film/Film_Flip';
import { actPhimDangChieu, actPhimSapChieu } from '../duckListMovie/actListMovie';
import { useDispatch } from 'react-redux';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} ${styleSlickRow['slick-next']}`}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        >
        </div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} ${styleSlickRow['slick-prev']}`}
            style={{ ...style, display: "block", left: "-50px" }}
            onClick={onClick}
        >
        </div>
    );
}



export default function MovieItem(props) {
    const [classAdd,setClassAdd] = useState('');
    const [classNone,setClassNone] = useState('');

    const dispatch = useDispatch();
    const renderListFilm = () => {

        return props.listMovie?.slice(0, 12).map((film, index) => {
            return (
                <div key={index} className={`${styleSlickRow['width-item']} mt-3`}>
                    <Film_Flip film={film} />
                </div>
            )
        })
    }



    const settings = {
        className: "center variable-width",
        centerMode: true,
        infinite: true,
        centerPadding: "-10px",
        slidesToShow: 3,
        speed: 500,
        rows: 1,
        slidesPerRow: 2,
        variableWidth: true,
        nextArrow: <SampleNextArrow />,
        preArrow: <SamplePrevArrow />
    };


    return (
        <div className="my-5">
            <button type="button" className={`${classAdd} px-4 py-2 font-semibold border rounded dark:border-gray-100`} onClick={() => {
                dispatch(actPhimDangChieu());
                setClassAdd('bg-black text-white');
                setClassNone('');
            }}>ĐANG CHIẾU</button>
            <button type="button" className={`${classNone} px-4 py-2 font-semibold border rounded dark:border-gray-100 ml-2`} onClick={() => {
                dispatch(actPhimSapChieu());
                setClassNone('bg-black text-white'); 
                setClassAdd('');
            }}>SẮP CHIẾU</button>
            <Slider {...settings}>
                {renderListFilm()}
            </Slider>
        </div>
    )
}
