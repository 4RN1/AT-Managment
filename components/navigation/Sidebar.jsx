"use client"
import { logout } from '@/action/logout'
import Link from 'next/link'
import React from 'react'
import { FaTasks } from 'react-icons/fa'
import { GoGoal } from 'react-icons/go'
import { RiLogoutBoxRFill, RiMoneyDollarCircleFill } from 'react-icons/ri'
import { VscOrganization } from 'react-icons/vsc'

const navLinks = [
  { name:"თასქები",
    link:"/tasks" ,
    icon:FaTasks
  },
  { name:"კლიენტები",
    link:"/clients" ,
    icon:VscOrganization
  },
  { name:"ფინანსები",
    link:"/deals" ,
    icon:RiMoneyDollarCircleFill
  },
]

const Sidebar = () => {
  return (
    <header className='w-19 h-full flex flex-col items-center justify-between bg-[#211C52] text-white py-5 px-1.5'>
        {/* logo */}
        <div className='flex flex-col items-center'>
        <Link href="/" className='text-2xl font-bold mb-5'>AT</Link>

    <nav className='flex flex-col gap-3'>
      {navLinks.map((nav) => {

      const Icon = nav.icon
return (
        <Link key={nav.link} href={nav.link} className='flex flex-col items-center text-[10px] px-1  py-1.5 rounded-md hover:bg-[#6150E1]'><Icon size={22} className='mb-1.5' />{nav.name}</Link>
      )})}

    </nav>
    </div>

    <button onClick={() => logout()} className='flex flex-col items-center text-xs p-2 hover:bg-[#6150E1] rounded-md cursor-pointer' ><RiLogoutBoxRFill  size={25} className='mb-1.5'/>გამოსვლა</button>

    </header>
  )
}

export default Sidebar