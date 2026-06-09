import React from 'react'
import { FaRegCheckSquare } from 'react-icons/fa'

const STAT_CONFIG = {
  შესასრულებელი: { iconColor: "#3b82f6", cardBg: "rgba(59, 130, 246, 0.08)" },
  პროცესშია:     { iconColor: "#f59e0b", cardBg: "rgba(245, 158, 11, 0.08)" },
  შესრულებული:   { iconColor: "#22c55e", cardBg: "rgba(34, 197, 94, 0.08)"  },
  გადაცდა:       { iconColor: "#ef4444", cardBg: "rgba(239, 68, 68, 0.08)"  },
};

const StatCard = ({ name, stat }) => {
  const { iconColor, cardBg } = STAT_CONFIG[name];

  return (
    <div
      className="p-4 rounded-xl flex items-center gap-4 transition-transform duration-150 hover:-translate-y-0.5"
      style={{ backgroundColor: cardBg, border: `1px solid ${iconColor}40` }}
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
        style={{ backgroundColor: `${iconColor}20` }}
      >
        <FaRegCheckSquare size={20} color={iconColor} />
      </div>
      <div className="flex flex-col gap-0.5">
        <p className="text-md font-medium text-zinc-500">{name}</p>
        <p className="text-2xl font-medium leading-none" style={{ color: iconColor }}>{stat}</p>
      </div>
    </div>
  );
};

const StatCards = ({ შესასრულებელი, პროცესშია, შესრულებული, გადაცდა }) => {
  const stats = [
    { name: "შესასრულებელი", stat: შესასრულებელი },
    { name: "პროცესშია",     stat: პროცესშია },
    { name: "შესრულებული",   stat: შესრულებული },
    { name: "გადაცდა",       stat: გადაცდა },
  ];

  return (
    <div className='grid grid-cols-4 gap-10 mt-5 mx-10'>
      {stats.map(({ name, stat }) => (
        <StatCard key={name} name={name} stat={stat} />
      ))}
    </div>
  );
};

export default StatCards;