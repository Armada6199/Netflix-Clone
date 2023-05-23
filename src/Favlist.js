import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Movie from './Movie';
import ModalMovie from './ModalMovie';

function Favlist() {
  const [movies,setMovies]=useState([]);
const [targetMovie,setTargetMovie]=useState({});
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
function getMovies(){
axios.get(`${process.env.REACT_APP_DATABASE}/movies`)
.then(res=>{setMovies(res.data); console.log(res)})
.catch(err=>console.log(err));
}
useEffect(()=>{
  getMovies()
 
},[])
function handleDelete(target){
  setTargetMovie(target);
  axios.delete(`${process.env.REACT_APP_DATABASE}/movies/${targetMovie.id}`)
  .then(res=>console.log(res))
  .catch(err=>console.log(err))
  setMovies(movies.filter(e=>e.id!==target.id))
}
function handleUpdate(e,target){
setTargetMovie(target);

axios.put(`${process.env.REACT_APP_DATABASE}/movies/${targetMovie.id}`,e.target.comments)
.then(res=>console.log(res))
.catch(err=>console.log(err));

}
  return (
    <div className='flex flex-wrap justify-around w-[100%] h-[100%]'>
      {movies.map(movie=><Movie movie={movie} setTargetMovie={setTargetMovie} setShow={setShow} setMovies={setMovies} handleDelete={handleDelete} handleUpdate={handleUpdate}/>)}
      <ModalMovie handleUpdate={handleUpdate} handleClose={handleClose} handleShow={handleShow} show={show} targetMovie={targetMovie}/>
    </div>
  )
}

export default Favlist