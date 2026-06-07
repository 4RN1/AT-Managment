import { get } from '@/action/ClientActions'
import Table from '@/components/client-page/Table'
import React from 'react'

const Page = async () => {
  
   const data = await get("clients");


  return (
    <div>
      <Table clientInfo={data}/>
    </div>
  )
}

export default Page