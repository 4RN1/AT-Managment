"use client"
import React, { useEffect,  useState } from "react";

import { BsThreeDotsVertical } from "react-icons/bs";
import { formatDate } from "@/utils/formatDate";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import ViewTaskModal from "./ViewTaskModal";
import { deleteInfo } from "@/action/ClientActions";

const taskHeadings = [
  { title: "#კოდი" },
  { title: "თასქი" },
  { title: "აღწერა" },
  { title: "მინიჭებულია" },
  { title: "პრიორიტეტი" },
  { title: "შეიქმნა" },
  { title: "ვადა" },
  { title: "ავტორი" },
  { title: "" },
];


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



const Table = ({
  title,
  taskData,
  headingNumBgColor,
  headingNumColor,
  length,
}) => {



    const [optionBox, setOptionBox] = useState(null)
    const [descOpenModal, setDescOpenModal] = useState(false)
    const [selectedTasks , setSelectedTasks] = useState(null)


useEffect(() => {
  function handleClickOutside(e) {
    if (e.target.closest(".option-trigger")) return; // ignore the toggle button
    setOptionBox(null);
  }

  document.addEventListener("mousedown", handleClickOutside);
  return () => document.removeEventListener("mousedown", handleClickOutside);
}, []);
  
  return (
    <div>
      <div className="my-5  border border-zinc-400  mx-10 rounded-lg">
        <div className=" border-b border-zinc-400">
          <h2 className="font-medium py-2 px-2">
            {title}{" "}
            <span
              style={{ background: headingNumBgColor, color: headingNumColor }}
              className=" px-2.5 py-1 rounded-full"
            >
              {length}
            </span>
          </h2>
        </div>

        <div className="flex justify-between items-center font-medium gap-5 text-zinc-600 px-2 border-zinc-400 ">
          {taskHeadings.map((heading, index) => (
            <p key={index} className="w-full max-w-50 py-1 ">
              {heading.title}
            </p>
          ))}
        </div>

        {taskData ? (
          taskData.map((task, index) => (
            <div
              key={index}
              className="flex justify-between items-center font-medium text-sm text-black px-2 border-t border-zinc-400 py-3 hover:bg-zinc-400/10 gap-5"
            >
              <p className="w-full max-w-50">{`#-${task.id.slice(1, 8)}`}</p>
              <p className="w-full max-w-50">{task.title}</p>
              <button 
              onClick={() => {setDescOpenModal(true), setSelectedTasks(task)}}
              className="w-full max-w-50 py-1 bg-blue-500/10 text-blue-500 hover:text-blue-600 hover:bg-blue-600/10 rounded-lg cursor-pointer">
                ნახვა
              </button>
              <p className="w-full max-w-50">{task.assigned?.name}</p>
              <p
                className="w-full max-w-50 py-1 rounded-lg text-center text-sm font-semibold"
                style={{
                  color: priorityConfig[task.priority]?.color,
                  background: priorityConfig[task.priority]?.bg,
                }}
              >
                {priorityConfig[task.priority]?.label}
              </p>
              <p className="w-full max-w-50">{formatDate(task.created_at)}</p>
              <p className="w-full max-w-50">
                {task.due_date ? formatDate(task.due_date) : "-"}
              </p>
              <p className="w-full max-w-50">{task.created_by?.name}</p>
              <div className="w-full max-w-50 flex justify-end relative">
                <BsThreeDotsVertical
             onClick={(e) => {
    e.stopPropagation();
    setOptionBox(optionBox === task.id ? null : task.id);
  }}

  
                  
                  size={30}
                  className="cursor-pointer p-1 rounded-md text-black border border-zinc-400"
                  
                />
                  {optionBox === task.id && (<div className="bg-white border border-zinc-400 absolute top-10 right-5 z-20 text-[16px] flex flex-col option-trigger cursor-pointer">
                                <button onClick={() => { setSelectedClient(task); setOpenEdit(true); }} className="flex items-center hover:bg-black/10 p-2 text-blue-500 cursor-pointer" ><FiEdit /> რედაქტირება</button>
                                <button onClick={() => {deleteInfo( "tasks", task.id, "/tasks")}}  className="flex items-center hover:bg-black/10 p-2 text-red-500 cursor-pointer"><MdDelete /> წაშლა</button>
                              </div> )}  
              
              </div>
               
            </div>
            
          ))
        ) : (
          <p className="text-center text-zinc-400 py-5">მონაცემები არ არის</p>
        )}
      </div>

        {descOpenModal && setSelectedTasks && <ViewTaskModal task={selectedTasks} onClose={() => {setDescOpenModal(false), setSelectedTasks(null)}}/>}

    </div>
  );
};

export default Table;
