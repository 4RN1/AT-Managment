
import { get } from '@/action/ClientActions'
import Table from '@/components/deals-page/Table'
import React from 'react'

const page = async () => {

const info = await get("deals", "*, clients (company, name)")
const clients = await get("clients", " id , company")


  return (
        <>
        <Table  info={info} clients={clients}/>
        </>
  )
}

export default page