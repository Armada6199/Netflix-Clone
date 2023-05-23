import React, { useEffect, useState } from 'react'
import '../src/App.css'
import MovieList from './MovieList'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <div className='w-[100%] h-[100vh] flex-col flex items-center justify-center'>
      <h1>Welcome To netflix clone </h1>
      <div className='flex flex-col justify-around h-[200px]'>
      <Link to='/movieList' className='text-xl no-underline text-center text-red-500 font-bold'>to Movie List</Link>
      <Link to='/favList' className='text-xl no-underline text-center text-red-500 font-bold'>to Favorite Movies</Link>
      </div>  
    </div>
  )
}

export default Home