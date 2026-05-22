import React from 'react'

const StatCards = ({ title, stat, icon, iconBgColor }) => {
  return (
    <div className="relative flex gap-4 bg-white rounded-2xl h-40 px-5 py-4 border border-zinc-100 shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden">
      
        {/* dekoratiuli */}
      <div className='absolute bottom-3 right-3 bg-emerald-400 w-15 h-15 rounded-full opacity-50 blur-2xl'></div>

      {/* icon */}
      <div className="absolute right-3 top-3 flex items-center justify-center w-15 h-15 rounded-xl  text-white shrink-0"
      style={{ backgroundColor: iconBgColor }}>
        {icon}
      </div>

      {/* text */}
      <div className='flex flex-col justify-around'>
        <p className="text-md font-medium text-zinc-600 uppercase tracking-wide">{title}</p>
        <p className="text-4xl font-bold text-zinc-800 leading-tight">{stat}</p>
      </div>
    </div>
  )
}

export default StatCards