
import Table from '@/components/deals-page/Table'
import React from 'react'

const page = () => {

const Info = [{
  id:1, /* კლიენტის სახელი */
  title:"ლენდინგ გვერდის დამზადება",
  company:"NovaBuild",
  type:"income",
  amount:5000,
  payment:"bank_transfer",
  status:"paid",
  created_at:"22 june , 2026"
}]



  return (
        <>
        <Table  Info={Info}/>
        </>
  )
}

export default page