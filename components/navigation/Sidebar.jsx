"use client"
import { logout } from '@/action/logout'
import Link from 'next/link'
import React from 'react'
import { FaTasks } from 'react-icons/fa'
import { GoGoal } from 'react-icons/go'
import { GrDashboard } from 'react-icons/gr'
import { RiLogoutBoxRFill, RiMoneyDollarCircleFill } from 'react-icons/ri'
import { TbHeartRateMonitor } from 'react-icons/tb'
import { VscOrganization } from 'react-icons/vsc'

const navLinks = [

   { name:"ანალიტიკა",
    link:"/" ,
    icon:TbHeartRateMonitor 
  },
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
  <header className='
    fixed bottom-0 left-0 right-0 w-full h-16 flex flex-row justify-around items-center px-4
  md:static md:w-19 md:h-full md:flex-col md:justify-between md:items-center md:px-1.5 md:py-5
  bg-[#211C52] text-white z-50
  '>
    {/* Logo — hidden on mobile, visible on desktop */}
    <div className='hidden md:flex flex-col items-center'>
      <Link href="/" className='text-2xl font-bold mb-5'>AT</Link>

      <nav className='flex flex-col gap-3'>
        {navLinks.map((nav) => {
          const Icon = nav.icon
          return (
            <Link
              key={nav.link}
              href={nav.link}
              className='flex flex-col items-center text-[10px] px-1 py-1.5 rounded-md hover:bg-[#6150E1] text-center'
            >
              <Icon size={22} className='mb-1.5' />
              {nav.name}
            </Link>
          )
        })}
      </nav>
    </div>

    {/* Mobile/Tablet nav — horizontal, visible only on small screens */}
    <nav className='flex md:hidden flex-row items-center justify-around w-full'>
      {navLinks.map((nav) => {
        const Icon = nav.icon
        return (
          <Link
            key={nav.link}
            href={nav.link}
            className='flex flex-col items-center text-[10px] px-2 py-1 rounded-md hover:bg-[#6150E1]'
          >
            <Icon size={22} className='mb-1' />
            {nav.name}
          </Link>
        )
      })}
      {/* Logout included in bottom bar on mobile */}
    </nav>

    {/* Desktop logout button */}
    <button
      onClick={() => logout()}
      className='hidden md:flex flex-col items-center text-xs p-2 hover:bg-[#6150E1] rounded-md cursor-pointer'
    >
      <RiLogoutBoxRFill size={25} className='mb-1.5' />
      გამოსვლა
    </button>
  </header>
)
}

export default Sidebar