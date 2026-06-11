'use client'

import { edit } from '@/action/ClientActions'
import React from 'react'
import { FaRegCheckCircle } from 'react-icons/fa'
import { LuCircleDashed, LuLoaderCircle } from 'react-icons/lu'
import { TbClockOff } from 'react-icons/tb'

const ChangeStatusDropdown = ({ onClose, taskId }) => {

  const buttons = [
    {
      label: 'შესასრულებელი',
      icon: <LuCircleDashed color='blue' />,
      action: () => edit("tasks", {id: taskId, status: "todo" }, "/tasks"),
    },
    {
      label: 'პროცესშია',
      icon: <LuLoaderCircle color='orange' />,
      action: () => edit("tasks", {id: taskId, status: "in_progress" }, "/tasks"),
    },
    {
      label: 'შესრულებული',
      icon: <FaRegCheckCircle color='green' />,
      action: () => edit("tasks", {id: taskId, status: "done" }, "/tasks"),
    },
    {
      label: 'გადაცდა',
      icon: <TbClockOff color='red' />,
      action: () => edit("tasks", {id: taskId, status: "cancelled" }, "/tasks"),
    },
  ]

  return (
    <div className='gap-2 text-sm bg-white border border-zinc-400 absolute top-10 right-5 z-20 text-[16px] flex flex-col'>
      <p className='text-xs px-2 pt-2 text-center'>სტატუსის შეცვლა</p>
      <div className='flex flex-col text-sm'>
        {buttons.map(({ label, icon, action }) => (
          <button
            key={label}
            onClick={() => { action(); onClose?.() }}
            className='flex items-center gap-2 hover:bg-zinc-400 p-2 cursor-pointer'
          >
            {icon}
            {label}
          </button>
        ))}
      </div>
    </div>
  )
}

export default ChangeStatusDropdown