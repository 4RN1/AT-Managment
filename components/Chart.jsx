'use client'

import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer
} from 'recharts'

const data = [
  { month: 'Jan', Income: 310, Expand: 210 },
  { month: 'Feb', Income: 320, Expand: 230 },
  { month: 'Mar', Income: 340, Expand: 220 },
  { month: 'Apr', Income: 330, Expand: 215 },
  { month: 'May', Income: 345, Expand: 210 },
  { month: 'Jun', Income: 355, Expand: 195 },
  { month: 'Jul', Income: 340, Expand: 205 },
  { month: 'Aug', Income: 350, Expand: 210 },
  { month: 'Sep', Income: 345, Expand: 215 },
  { month: 'Oct', Income: 360, Expand: 230 },
  { month: 'Nov', Income: 400, Expand: 350 },
  { month: 'Dec', Income: 380, Expand: 270 },
]

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null
  const inc = payload[0]?.value
  const exp = payload[1]?.value
  const incPct = 11
  const expPct = 10
  return (
    <div style={{ background: '#fff', border: '0.5px solid #e5e7eb', borderRadius: 12, padding: '10px 14px', fontSize: 12 }}>
      <p style={{ color: '#888', marginBottom: 8, fontWeight: 500 }}>{label}</p>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, marginBottom: 6 }}>
        <div>
          <p style={{ fontSize: 14, fontWeight: 600, margin: 0 }}>${inc}</p>
          <p style={{ color: '#888', margin: 0 }}>შემოსავალი</p>
        </div>
        <span style={{ background: '#EAF3DE', color: '#27500A', padding: '2px 8px', borderRadius: 10, fontSize: 11 }}>↑ {incPct}%</span>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16 }}>
        <div>
          <p style={{ fontSize: 14, fontWeight: 600, margin: 0 }}>${exp}</p>
          <p style={{ color: '#888', margin: 0 }}>ხარჯი</p>
        </div>
        <span style={{ background: '#FCEBEB', color: '#791F1F', padding: '2px 8px', borderRadius: 10, fontSize: 11 }}>↓ {expPct}%</span>
      </div>
    </div>
  )
}

export default function SpendingChart({data}) {
  return (
    <div style={{ background: '#fff', borderRadius: 16, padding: '24px', border: '0.5px solid #e5e7eb' }}>
      <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 4 }}>Spending Cash</h3>
      <div style={{ display: 'flex', gap: 12, fontSize: 12, color: '#888', marginBottom: 20 }}>
        <span><span style={{ color: '#4CAF7D' }}>●</span>შემოსავალი</span>
        <span><span style={{ color: '#E24B4A' }}>●</span>ხარჯი</span>
      </div>
      <ResponsiveContainer width="100%" height={220}>
        <AreaChart data={data} margin={{ top: 5, right: 10, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#4CAF7D" stopOpacity={0.15} />
              <stop offset="95%" stopColor="#4CAF7D" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
          <XAxis dataKey="month" tick={{ fontSize: 11, fill: '#aaa' }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 11, fill: '#aaa' }} axisLine={false} tickLine={false} tickFormatter={v => `₾${v}`} />
          <Tooltip content={<CustomTooltip />} />
          <Area type="monotone" dataKey="Income" stroke="#4CAF7D" strokeWidth={2} fill="url(#colorIncome)" dot={false} />
          <Area type="monotone" dataKey="Expand" stroke="#E24B4A" strokeWidth={2} fill="none" dot={false} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}