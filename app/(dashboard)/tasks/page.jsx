import StatCard from '@/components/tasks-page/StatCard'
import Table from '@/components/tasks-page/Table';
import React from 'react'
import { FaRegCheckSquare } from 'react-icons/fa'

const STAT_CONFIG = {
  შესასრულებელი: { iconColor: "#3b82f6", cardBg: "rgba(59, 130, 246, 0.08)" },  // blue
  პროცესშია:     { iconColor: "#f59e0b", cardBg: "rgba(245, 158, 11, 0.08)" },  // amber
  შესრულებული:   { iconColor: "#22c55e", cardBg: "rgba(34, 197, 94, 0.08)"  },  // green
  გადაცდა:       { iconColor: "#ef4444", cardBg: "rgba(239, 68, 68, 0.08)"  },  // red
  დრაფტი:        { iconColor: "#a855f7", cardBg: "rgba(168, 85, 247, 0.08)" },  // purple
};

const stats = [
  { name: "შესასრულებელი", stat: 10 },
  { name: "პროცესშია",     stat: 10 },
  { name: "შესრულებული",   stat: 10 },
  { name: "გადაცდა",       stat: 10 },
  { name: "დრაფტი",        stat: 10 },
];



const page = () => {


  
  return (
    <>
    <div className='grid grid-cols-5 gap-2 mt-5 mx-10'>
    {stats.map(({ name, stat }) => (
  <StatCard
    key={name}
    icon={FaRegCheckSquare}
    name={name}
    stat={stat}
    iconColor={STAT_CONFIG[name].iconColor}
    cardBg={STAT_CONFIG[name].cardBg}
  />
))}
    </div>

    <Table />
    </>
  )
}

export default page