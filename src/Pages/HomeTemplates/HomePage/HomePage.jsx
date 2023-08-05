import React from 'react'
import ModalVideo from 'react-modal-video';
import Carosel from '../_components/Carosel/Carosel'
import HomeMenu from './HomeMenu/HomeMenu'
import ListMovies from './ListMovies/ListMovies'
import { useDispatch, useSelector } from 'react-redux';
import '../../../../node_modules/react-modal-video/css/modal-video.css'
import { actCloseModalVideo } from '../../../components/ModalVideo/duckModal/actModalVideo';
import HomeApp from './HomeApp/HomeApp';
import News from './News/News';




export default function HomePage() {
  const dispatch = useDispatch();
  const url = useSelector(state => state.modalVideoReducer.url);
  const turn = useSelector(state => state.modalVideoReducer.turn);
  console.log("turn", turn);
  return (
    <div>
      <Carosel />
      <ListMovies />
      <HomeMenu />
      <ModalVideo channel='youtube' autoplay isOpen={ turn} videoId={url} onClose={() => {
        dispatch(actCloseModalVideo());
      }}/>
      <News />
      <HomeApp />
    </div>
  )
}
