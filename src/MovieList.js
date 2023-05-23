import React, { useEffect, useState } from 'react'
import Movie from './Movie';
import axios from 'axios'
import ModalMovie from './ModalMovie';
import Row from 'react-bootstrap/Row';
function MovieList() {
    const [trendingMovies,setTrendingMovies]=useState([]);
  const [targetMovie,setTargetMovie]=useState({});
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    function getTrending(){
axios.get(`${process.env.REACT_APP_URL}/trending/all/week?api_key=${process.env.REACT_APP_KEY}&language=end-US`)
.then(res=>setTrendingMovies(res.data.results))
.catch(err=>console.log(err));
  }
  useEffect(()=>{
    getTrending()
  },[])
  return (
    <div className='flex flex-wrap justify-around items-center w-[100%] h-[100%]'>
      {trendingMovies.map(movie=><Movie movie={movie} setTargetMovie={setTargetMovie} setShow={setShow} key={movie.id}/>)}
            <ModalMovie handleClose={handleClose} handleShow={handleShow} show={show} targetMovie={targetMovie}/>

    </div>
  )
}

export default MovieList