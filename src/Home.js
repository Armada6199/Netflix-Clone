import React, { useEffect, useState } from 'react'
import ModalMovie from './ModalMovie';
import {Link} from 'react-router-dom'
import './Home.css'
function Home() {

  return (
    <div className='bg-[#EAF2D7] w-[100%] h-[100vh] text-6xl flex  font-bold items-center justify-center'>
      <h1>Welcome to Netflix Clone</h1>
      <Link to='/favList' className='font-semibold text-4xl '>Go To MoviesList</Link>
    </div>
  )
}

export default Home