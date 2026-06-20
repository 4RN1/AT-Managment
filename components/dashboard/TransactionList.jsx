import { formatDate } from '@/utils/formatDate'
import React from 'react'
import { GoDotFill } from 'react-icons/go';

const transactionHeaders = [
    {title:"ტრანზაქციის ID"},
    {title:"კომპანია"},
    {title:"თარიღი"},
    {title:"გადახდის ტიპი"},
    {title:"თანხა"},
    {title:"სტატუსი"},
]

const paymentMethodConfig = {
  cash: { label: "ნაღდი" },
  card: { label: "ბარათი" },
  bank_transfer: { label: "საბანკო გადარიცხვა" },
};

const statusConfig = {
  pending: { label: "მუშავდება", textColor: "#f59e0b"},
  paid: { label: "გადახდილია", textColor: "#22c55e"},
  cancelled: {
    label: "გაუქმდა",
    textColor: "#ef4444",
  },
};




const TransactionList = ({transactions}) => {



  return (
<div className='min-h-100 bg-white rounded-2xl py-4 border-zinc-100 shadow-sm hover:shadow-md transition-shadow duration-200 px-4 md:px-8'>
    <h2 className='text-center font-bold mb-3 text-zinc-700'>უახლესი ტრანზაქციები</h2>
  {/* Desktop table headers — hidden on mobile */}
  <div className='hidden md:grid grid-cols-6 border-b border-t border-zinc-400 py-3'>
    {transactionHeaders.map((header, index) => (
      <p key={index} className='text-zinc-700 font-bold text-start'>{header.title}</p>
    ))}
  </div>

  {/* Content */}
  <div className='md:h-70'>
    {transactions.map((item) => (

      /* Mobile: card layout / Desktop: grid row */
      <div key={item.id} className='
        flex flex-col gap-2 border border-zinc-200 rounded-xl p-4 mb-3
        md:mb-0 md:border-0 md:border-b md:border-zinc-400 md:rounded-none md:p-0
        md:grid md:grid-cols-6 md:items-center md:py-3
      '>
        {/* ID */}
        <div className='flex justify-between md:block'>
          <span className='text-xs text-zinc-400 md:hidden'>ID</span>
          <p className='tracking-normal text-zinc-500 font-medium'>{item.id.slice(0, 13)}</p>
        </div>

        {/* Client */}
        <div className='flex justify-between md:block'>
          <span className='text-xs text-zinc-400 md:hidden'>{transactionHeaders[1]?.title}</span>
          <p className='text-zinc-800 font-bold'>{item.clients?.company}</p>
        </div>

        {/* Date */}
        <div className='flex justify-between md:block'>
          <span className='text-xs text-zinc-400 md:hidden'>{transactionHeaders[2]?.title}</span>
          <p className='text-zinc-500' suppressHydrationWarning>{formatDate(item.created_at)}</p>
        </div>

        {/* Payment method */}
        <div className='flex justify-between md:block'>
          <span className='text-xs text-zinc-400 md:hidden'>{transactionHeaders[3]?.title}</span>
          <p className='text-zinc-500'>{paymentMethodConfig[item.payment_method]?.label}</p>
        </div>

        {/* Amount */}
        <div className='flex justify-between md:block'>
          <span className='text-xs text-zinc-400 md:hidden'>{transactionHeaders[4]?.title}</span>
          <p className='font-bold'>{item.amount.toFixed(2)} ₾</p>
        </div>

        {/* Status */}
        <div className='flex justify-between md:block'>
          <span className='text-xs text-zinc-400 md:hidden'>{transactionHeaders[5]?.title}</span>
          <p className='flex items-center gap-1' style={{ color: statusConfig[item.status]?.textColor }}>
            <GoDotFill />{statusConfig[item.status]?.label}
          </p>
        </div>
      </div>

    ))}
  </div>
</div>
  )
}

export default TransactionList