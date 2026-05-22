import Link from 'next/link'
import React from 'react'
import { FaTasks } from 'react-icons/fa'
import { GoGoal } from 'react-icons/go'
import { RiLogoutBoxRFill, RiMoneyDollarCircleFill } from 'react-icons/ri'
import { VscOrganization } from 'react-icons/vsc'

const Sidebar = () => {
  return (
    <header className='w-22 h-full border-r border-r-zinc-400 flex flex-col items-center justify-between bg-[#211C52] text-white py-5 px-2'>
        {/* logo */}
        <div className='flex flex-col items-center'>
        <Link href="/" className='text-2xl font-bold mb-5'>AT</Link>

    <nav className='flex flex-col gap-3'>
        <Link href="tasks" className='flex flex-col items-center text-xs px-1  py-1.5 rounded-md hover:bg-[#6150E1]'><FaTasks size={25} className='mb-1.5'/> თასქები</Link>
        <Link href="clients" className='flex flex-col items-center text-xs px-1  py-1.5 rounded-md hover:bg-[#6150E1]'><VscOrganization size={25} className='mb-1.5'/> კლიენტები</Link>
        <Link href="deals" className='flex flex-col items-center text-xs px-1  py-1.5 rounded-md hover:bg-[#6150E1]'><RiMoneyDollarCircleFill size={25} className='mb-1.5' /> ფინანსები</Link>
        <Link href="goals" className='flex flex-col items-center text-xs px-1 py-1.5 rounded-md hover:bg-[#6150E1]'><GoGoal  size={25} className='mb-1.5'/> მიზნები</Link>

    </nav>
    </div>

    <button className='flex flex-col items-center text-xs p-2 hover:bg-[#6150E1] rounded-md cursor-pointer' ><RiLogoutBoxRFill  size={25} className='mb-1.5'/>გამოსვლა</button>

    </header>
  )
}

export default Sidebar