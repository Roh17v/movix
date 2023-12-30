import React from 'react'
import { IoMdSearch } from "react-icons/io";

function Header() {
  return (
    <div className='bg-black/20 px-24 w-full py-2'>
        <div className='flex justify-between'>
            <div>
               <img className='h-12 cursor-pointer' src='src/assets/movix-logo.svg'/>
            </div>
            <div className='flex gap-x-6 items-center'>
              <div className='text-white text-lg cursor-pointer'>Movies</div>
              <div className='text-white text-lg cursor-pointer'>TV Shows</div>
              <div className='text-white text-lg cursor-pointer'><IoMdSearch size={22} /></div>
            </div>
        </div>
    </div>
  )
}

export default Header