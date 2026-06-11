import React from 'react'
import { FaRegCheckSquare } from 'react-icons/fa'
import { IoMdSettings } from 'react-icons/io';
import { LuListTodo } from 'react-icons/lu';
import { MdCancel, MdOutlineQueryStats } from 'react-icons/md';

const STAT_CONFIG = {
  სულ: { iconColor: "#000000", cardBg: "rgba(0, 0, 0, 0.08)"  , icon:MdOutlineQueryStats}, 
  შესასრულებელი: { iconColor: "#3b82f6", cardBg: "rgba(59, 130, 246, 0.08)" , icon:LuListTodo },
  პროცესშია:     { iconColor: "#f59e0b", cardBg: "rgba(245, 158, 11, 0.08)"  , icon:IoMdSettings},
  შესრულებული:   { iconColor: "#22c55e", cardBg: "rgba(34, 197, 94, 0.08)" , icon:FaRegCheckSquare  },
  გადაცდა:       { iconColor: "#ef4444", cardBg: "rgba(239, 68, 68, 0.08)"  , icon:MdCancel },
};

const StatCard = ({ name, stat }) => {
  const { iconColor, cardBg, icon:Icon  } = STAT_CONFIG[name];



  return (

    

    <div
      className="p-4 rounded-xl flex items-center gap-4 transition-transform duration-150 hover:-translate-y-0.5"
      style={{ backgroundColor: cardBg, border: `1px solid ${iconColor}40` }}
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
        style={{ backgroundColor: `${iconColor}20` }}
      >
        <Icon size={20} color={iconColor} />
      </div>
      <div className="flex flex-col gap-0.5">
        <p className="text-md font-medium text-zinc-500">{name}</p>
        <p className="text-2xl font-medium leading-none" style={{ color: iconColor }}>{stat}</p>
      </div>
    </div>
  );
};

const StatCards = ({ სულ, შესასრულებელი, პროცესშია, შესრულებული, გადაცდა }) => {
  const stats = [
    { name: "სულ", stat: სულ },
    { name: "შესასრულებელი", stat: შესასრულებელი },
    { name: "პროცესშია",     stat: პროცესშია },
    { name: "შესრულებული",   stat: შესრულებული },
    { name: "გადაცდა",       stat: გადაცდა },
  ];

  return (
    <div className='grid grid-cols-5 gap-10 mt-5 mx-10'>
      {stats.map(({ name, stat }) => (
        <StatCard key={name} name={name} stat={stat} />
      ))}
    </div>
  );
};

export default StatCards;