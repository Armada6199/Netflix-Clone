import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div className='w-[100%] h-[45px] bg-[#f6f6f6] flex flex-row justify-around items-center text-white font-bold text-xl  '>
    <Link className='text-black font-bold text-2xl no-underline cursor-pointer' to='/'>Home</Link>  
    <Link className='text-black font-bold text-2xl no-underline cursor-pointer' to='/movieList'>MoviesList</Link>  
    <Link className='text-black font-bold text-2xl no-underline cursor-pointer' to='/favList'>Favorite List</Link>  
    </div>
  )
}

export default Navbar