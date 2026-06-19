"use client";
import { formatDate } from "@/utils/formatDate";
import React, { useState } from "react";
import ViewTaskModal from "../tasks-page/ViewTaskModal";

const priorityConfig = {
  low: { label: "დაბალი", color: "#22c55e", bg: "rgba(34, 197, 94, 0.1)" },
  medium: { label: "საშუალო", color: "#f59e0b", bg: "rgba(245, 158, 11, 0.1)" },
  high: { label: "მაღალი", color: "#ef4444", bg: "rgba(239, 68, 68, 0.1)" },
  urgent: {
    label: "სასწრაფო",
    color: "#7c3aed",
    bg: "rgba(124, 58, 237, 0.1)",
  },
};

const statusConfig = {
  todo: { label: "შესასრულებელი", color:"blue" },
  in_progress: { label: "პროცესშია", color:"orange" },
  done: { label: "შესრულდა", color:"green" },
  cancelled: { label: "გადაცდა", color:"red" },
};


const Priority = ({ tasksInfo}) => {

  // const [viewDesc, setViewDesc] = useState(false)
  const [selectedTask, setSelectedTask] = useState(null);
  return (
    <div className="bg-white rounded-2xl w-full   min-h-100  py-4 border border-zinc-100 shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden">
      <h2 className="text-md text-center font-bold text-zinc-700">
        ბოლო თასქები
      </h2>
    
      <div className="h-80 overflow-y-scroll mt-2 ">
        {tasksInfo.map((task) => (
          <div
            key={task.id}
            onClick={() => {   setSelectedTask(task)}}
            className="flex flex-col gap-1 py-3 border-b border-zinc-100 hover:bg-zinc-400/10 px-5 cursor-pointer"
          >
            <div className="flex justify-between items-center">
              <p className="font-semibold text-sm text-zinc-800">
                {task.title}
              </p>
              <p className="p-1.5 font-medium rounded-md text-sm"
              style={{
                color: priorityConfig[task.priority]?.color,
                background: priorityConfig[task.priority]?.bg,
              }}
              >
                {priorityConfig[task.priority]?.label}
              </p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-xs text-zinc-400">
                <span style={{color:statusConfig[task.status]?.color}}>{statusConfig[task.status]?.label}</span> · <span  suppressHydrationWarning>⏰ {formatDate(task.due_date)}</span>
              </p>
            </div>
          </div>

        ))}
      </div>
      {selectedTask && <ViewTaskModal onClose={() => setSelectedTask(null)} task={selectedTask} />}
    </div>
  );
};

export default Priority;
