"use client"
import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { MdKeyboardArrowDown } from 'react-icons/md'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { logout } from '@/action/logout'
import { RiLogoutBoxRFill } from 'react-icons/ri'


const Navbar = ({user = "User"}) => {


  return (
    <header className='bg-white border border-[#E9E9E9] h-15 shadow-xs flex items-center justify-end px-10'>
        <DropdownMenu>
             <DropdownMenuTrigger >
        <div className='flex items-center gap-1.5 cursor-pointer'>
          <p className='font-medium'>გამარჯობა, {user}</p>
             <IoIosArrowDown />
             </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-50 ">
        <DropdownMenuGroup>
          <DropdownMenuLabel className="text-md">ჩემი ანგარიში</DropdownMenuLabel>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem  >
         <button onClick={() => {logout()}} className='cursor-pointer flex items-center gap-1 text-md'><RiLogoutBoxRFill/> გამოსვლა</button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>

    </header>
  )
}

export default Navbar



    
