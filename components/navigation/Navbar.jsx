import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { MdKeyboardArrowDown } from 'react-icons/md'


const Navbar = ({user = "User"}) => {
  return (
    <header className='bg-white border border-[#E9E9E9] h-15 shadow-xs flex items-center justify-end px-10'>
        <div className='flex items-center gap-1.5'>
          <p className='font-medium'>გამარჯობა, {user}</p>
          <IoIosArrowDown />
        </div>
    </header>
  )
}

export default Navbar