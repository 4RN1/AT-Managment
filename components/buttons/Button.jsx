"use client"
import React from 'react'

const Button = ({content, icon, action}) => {

  

  return (
    <button onClick={() => action?.()} className='flex items-center gap-2 py-1.5 px-2.5 border border-zinc-400 rounded-lg cursor-pointer font-medium hover:opacity-85'>
        {icon}
            {content}
    </button>
  )
}

export default Button