import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Col from 'react-bootstrap/Col';
function Movie({movie,setTargetMovie,setShow,setMovies,handleDelete,handleUpdate}) {


  return (
    <div className='flex flex-col w-[430px] h-[340px] justify-around items-center text-lg my-5 bg-[#F1F7ED]'>
      <h1 className='text-xl font-semibold text-center w-[100%]'>{movie.title}</h1> 
      <h1>{movie.relase_date}</h1>
    <div className='flex justify-around w-[90%]'>
      <button className='w-[180px] h-[45px] bg-blue-400 rounded-lg'onClick={()=>setShow(true)} >Update</button>
      <button className='w-[180px] h-[45px] bg-red-400 rounded-lg' onClick={()=>handleDelete(movie)}>Delete</button>
    </div>
    </div>
 

  )
}

export default Movie