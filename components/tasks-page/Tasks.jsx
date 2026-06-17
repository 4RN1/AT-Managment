"use client"

import React, { useState } from 'react'
import AddTasksModal from './AddTasksModal'
import StatCards from './StatCard'
import Table from './Table'
import { AnimatePresence } from 'motion/react'
import AlertComp from '../AlertComp'

const Tasks = ({profiles, allCount, todo, inProgress, done, overdue }) => {

  const [onSuccess, setOnSuccess] = useState(false)
    return (
    <>
    <div className="relative overflow-hidden">
       <AnimatePresence>
        {onSuccess && (
          <AlertComp type="success" text={"თასკი წარმატებით შეიქმნა"} />
        )}
      </AnimatePresence>
    </div>
    
      <AddTasksModal assignees={profiles} onSuccess={() => {
        setOnSuccess(true)
        setTimeout(() => {
            setOnSuccess(false)
        }, 3000);
      }

       } />
      <StatCards
        სულ={allCount.length}
        შესასრულებელი={todo.length}
        პროცესშია={inProgress.length}
        შესრულებული={done.length}
        გადაცდა={overdue.length} 
      />
      <Table title="შესასრულებელი" length={todo.length} taskData={todo}   headingNumBgColor="rgba(59, 130, 246, 0.08)"  headingNumColor="#3b82f6"  assignees={profiles}/>
      <Table title="პროცესშია"    length={inProgress.length}  taskData={inProgress} headingNumBgColor="rgba(245, 158, 11, 0.08)" headingNumColor="#f59e0b"  assignees={profiles}/>
      <Table title="შესრულებული"   length={done.length} taskData={done}       headingNumBgColor="rgba(34, 197, 94, 0.08)"  headingNumColor="#22c55e"  assignees={profiles}/>
      <Table title="გადაცდა"     length={overdue.length}   taskData={overdue}    headingNumBgColor="rgba(239, 68, 68, 0.08)"  headingNumColor="#ef4444"  assignees={profiles}/>
    </>
  )
}

export default Tasks