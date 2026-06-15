
import { get } from '@/action/ClientActions'
import Table from '@/components/deals-page/Table'
import React from 'react'

const page = async () => {

const info = await get("deals", "*, clients (*)")



  return (
        <>
        <Table  info={info}/>
        </>
  )
}

export default page