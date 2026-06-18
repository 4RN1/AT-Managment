import React from 'react'

const StatCard = ({icon, title, stat, bgColor}) => {
  return (
    <div className='bg-black/10 h-20'>
        <p className='p-2' style={{background:bgColor}}>{icon}</p>
        <p className='text-zinc-400'>{title}</p>
        <p>{stat}</p>
    </div>
  )
}

export default StatCard