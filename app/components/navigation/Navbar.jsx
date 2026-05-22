import React from 'react'
import { CgProfile } from 'react-icons/cg'

const Navbar = () => {
  return (
    <header className='border border-[#E9E9E9] h-15 shadow-xs flex items-center justify-end px-10'>
        <div>
           <p className='flex items-center gap-1.5 bg-emerald-400 text-md  font-medium px-3 py-1.5 rounded-md'>  <CgProfile size={25}/>ანგარიში</p>
        </div>
    </header>
  )
}

export default Navbar