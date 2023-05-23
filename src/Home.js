import React, { useEffect, useState } from 'react'
import '../src/App.css'
import MovieList from './MovieList'
function Home() {
  return (
    <div className='w-[100%] h-[100vh] flex items-center justify-center'>
      <MovieList/>
    </div>
  )
}

export default Home