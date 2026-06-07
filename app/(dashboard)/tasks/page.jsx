import { get } from '@/action/ClientActions';
import StatCard from '@/components/tasks-page/StatCard'
import Table from '@/components/tasks-page/Table';
import React from 'react'
import { FaPlus, FaRegCheckSquare } from 'react-icons/fa'




const page = async () => {

  const data = await get("tasks")
  
  return (
    <>
   
    <StatCard შესასრულებელი={10} პროცესშია={5} შესრულებული={20} გადაცდა={2} />
    <Table title={"შესასრულებელი"} taskData={data}  headingNumBgColor={" rgba(59, 130, 246, 0.08) "} headingNumColor={"#3b82f6"}/>
    <Table title={"პროცესშია"} taskData={data} headingNumBgColor={" rgba(245, 158, 11, 0.08)"} headingNumColor={" #f59e0b"}/>
    <Table title={"შესრულებული"} taskData={data} headingNumBgColor={" rgba(34, 197, 94, 0.08) "} headingNumColor={"#22c55e"}/>
    <Table title={"გადაცდა"} taskData={data} headingNumBgColor={" rgba(239, 68, 68, 0.08)"} headingNumColor={" #ef4444"}/>
    
    


    </>
  )
}

export default page