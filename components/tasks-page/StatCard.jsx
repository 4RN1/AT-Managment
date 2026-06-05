import React from 'react'




const StatCard = ({ icon, name, stat, iconColor = "black", cardBg }) => {
  const Icon = icon;

  return (
    <div
      className="p-4 rounded-xl flex items-center max-w-80 gap-4 transition-transform duration-150 hover:-translate-y-0.5"
      style={{
        backgroundColor: cardBg,
        border: `1px solid ${iconColor}40`,
      }}
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
        style={{ backgroundColor: `${iconColor}20` }}
      >
        <Icon size={20} color={iconColor} />
      </div>
      <div className="flex flex-col gap-0.5">
        <p className="text-md font-medium text-zinc-500">{name}</p>
        <p className="text-2xl font-medium leading-none" style={{ color: iconColor }}>
          {stat}
        </p>
      </div>
    </div>
  )
}

export default StatCard