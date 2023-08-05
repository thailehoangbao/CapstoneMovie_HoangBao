import React, { useEffect } from 'react'
import MovieItem from './MovieItem/MovieItem';
import { useDispatch, useSelector } from 'react-redux';
import {actFetchListMovie} from './duckListMovie/actListMovie';


export default function ListMovies() {
    const listMovies = useSelector(state => state.listMovieReducer.listMovieFilter);
    console.log(listMovies);
    
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(actFetchListMovie());
    },[]);


    return (
        <section className="text-gray-600 body-font px-5">
            <div className="px-2 mx-auto h-full mt-10 w-full">
                {<MovieItem listMovie= {listMovies}/>}
            </div>
        </section>
    )
}
