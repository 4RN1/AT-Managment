import { get, getWhere } from '@/action/ClientActions';
import AddTasksModal from '@/components/tasks-page/AddTasksModal';
import StatCard from '@/components/tasks-page/StatCard'
import Table from '@/components/tasks-page/Table';
import React from 'react'





const page = async () => {

  // status = todo , in_progress, done, cancelled (overdue)
  const profiles = await get("profiles", "id, name")
  const columns = `*, assigned:assigned_to(name), author:created_by(name)`

  const getToBeDoneTasks   = await getWhere("tasks", "status", "todo",        columns)
  const getInProgressTasks = await getWhere("tasks", "status", "in_progress", columns)
  const getDoneTasks       = await getWhere("tasks", "status", "done",        columns)
  const getOverdueTasks    = await getWhere("tasks", "status", "cancelled",   columns)

  return (
    <>
      <AddTasksModal assignees={profiles} />
      <StatCard
        შესასრულებელი={getToBeDoneTasks.length}
        პროცესშია={getInProgressTasks.length}
        შესრულებული={getDoneTasks.length}
        გადაცდა={getOverdueTasks.length}
      />
      <Table title="შესასრულებელი" length={getToBeDoneTasks.length} taskData={getToBeDoneTasks}   headingNumBgColor="rgba(59, 130, 246, 0.08)"  headingNumColor="#3b82f6" />
      <Table title="პროცესშია"    length={getInProgressTasks.length}  taskData={getInProgressTasks} headingNumBgColor="rgba(245, 158, 11, 0.08)" headingNumColor="#f59e0b" />
      <Table title="შესრულებული"   length={getDoneTasks.length} taskData={getDoneTasks}       headingNumBgColor="rgba(34, 197, 94, 0.08)"  headingNumColor="#22c55e" />
      <Table title="გადაცდა"     length={getOverdueTasks.length}   taskData={getOverdueTasks}    headingNumBgColor="rgba(239, 68, 68, 0.08)"  headingNumColor="#ef4444" />
    </>
  )
}

export default page