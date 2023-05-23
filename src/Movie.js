import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Col from 'react-bootstrap/Col';
function Movie({movie,setTargetMovie,setShow,onFav,handleDelete,handleUpdate}) {
function handleShow(){
  setShow(true)
  setTargetMovie(movie)
}

  return (
    <div className='w-[430px] h-[700px] flex flex-col items-center justify-around my-5 bg-[#FFEECF] text-[#191D32]'>
      <div className='h-[400px] w-[100%]'>
      <img className='w-[100%] h-[100%] rounded-md' src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" />
      </div>
      <div className='flex flex-col justify-around items-center h-[300px] px-5'>
      <h1 className='text-xl font-bold  text-[#0e0e0e0]'>{movie.title}</h1>
      <p className='text-lg font-light h-[100px] overflow-hidden'>{movie.overview}</p>
      {onFav?
      <div className='flex justify-around'>
       <button className='bg-blue-500 text-[#FFEECF] w-[180px] h-[45px] rounded-md font-semibold text-lg' onClick={()=>handleUpdate()}>Update</button>
       <button className='bg-red-500 text-[#FFEECF] w-[180px] h-[45px] rounded-md font-semibold text-lg' onClick={()=>handleDelete(movie)}>Delete</button>
      </div>
      :
      <button className='bg-[#191D32] text-[#FFEECF] w-[180px] h-[45px] rounded-md font-semibold text-lg' onClick={()=>handleShow()}> Add To Favorites</button>
    }
      </div>
   
    </div>
 

  )
}

export default Movie