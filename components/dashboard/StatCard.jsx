import React from 'react'

const StatCard = ({ icon: Icon, title, stat, bgColor, iconColor,   }) => {
  return (
    <div className=' border border-zinc-100 rounded-2xl  px-5 py-4 bg-white shadow-sm flex flex-col gap-3 hover:shadow-md transition-shadow duration-200 overflow-hidden'>
      <div className='flex items-start justify-between'>
        <div className='w-11 h-11 rounded-2xl flex items-center justify-center' style={{ backgroundColor: bgColor }}>
          {Icon && <Icon className='text-2xl' style={{ color: iconColor }} />}
        </div>
      </div>
      <p className='text-zinc-600 text-md font-bold'>{title}</p>
      <div className='flex items-center gap-2'>
        <p className='text-2xl font-bold text-zinc-800'>{stat}₾</p>
      </div>
    </div>
  )
}

export default StatCard