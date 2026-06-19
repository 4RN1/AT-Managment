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
    <div className='min-h-100 bg-white rounded-2xl py-4 border-zinc-100 shadow-sm hover:shadow-md transition-shadow duration-200 px-8'>
        {/* headings */}
            <div className='grid grid-cols-6  border-b border-zinc-400 pb-3'>
            {transactionHeaders.map((header, index) => (
                <p key={index} className='text-zinc-700 font-bold text-start'>{header.title}</p>
            ))}
            </div>

            {/*  content*/}
            <div className='h-70'>
                {transactions.map((item) => (
                    <div key={item.id} className='grid grid-cols-6 border-b border-zinc-400 items-center py-3 '>
                        <p className='tracking-normal text-zinc-500 font-medium'>{item.id.slice(0, 13)}</p>
                        <p className='text-zinc-800 font-bold'>{item.clients?.company}</p>
                        <p className='text-zinc-500' suppressHydrationWarning>{formatDate(item.created_at)}</p>
                        <p className='text-zinc-500'>{paymentMethodConfig[item.payment_method]?.label}</p>
                        <p className='font-bold'>{item.amount.toFixed(2)} ₾</p>
                        <p className='flex items-center' style={{color: statusConfig[item.status]?.textColor}}><GoDotFill /> {statusConfig[item.status]?.label}</p>
                    </div>
                ))}
            </div>
    </div>
  )
}

export default TransactionList