"use client"
import { formatDate } from "@/utils/formatDate";
import React, { useState } from "react";
import { FcHighPriority } from "react-icons/fc";
import { GrStatusGood } from "react-icons/gr";
import { IoClose } from "react-icons/io5";
import { LuCalendarClock } from "react-icons/lu";
import { MdAssignmentAdd, MdAssignmentInd, MdDescription } from "react-icons/md";

const ViewTaskModal = ({ task, onClose }) => {
  const fields = [
    { name: "title", label: "" },
    { name: "status", label: "სტატუსი" },
    { name: "assigned_to", label: "მინიჭებულია" },
    { name: "priority", label: "პრიორიტეტი" },
    { name: "description", label: "აღწერა" },
  ];

  const [formData, setFormData] = useState({
    id: task?.id ?? null,
    title: task?.title ?? "",
    status: task?.status ?? "active",
    assigned_to: task?.assigned.name ?? "",
    priority: task?.priority ?? "",
    description: task?.description ?? "",
    created_at: task?.created_at ?? "",
    due_date: task?.due_date ?? "",

  });

  const priorityConfig = {
    low: { label: "დაბალი", color: "#22c55e", bg: "rgba(34, 197, 94, 0.1)" },
    medium: {
      label: "საშუალო",
      color: "#f59e0b",
      bg: "rgba(245, 158, 11, 0.1)",
    },
    high: { label: "მაღალი", color: "#ef4444", bg: "rgba(239, 68, 68, 0.1)" },
    urgent: {
      label: "სასწრაფო",
      color: "#7c3aed",
      bg: "rgba(124, 58, 237, 0.1)",
    },
  };

  const statusConfig = {
    todo: {
      label: "შესასრულებელი",
      color: "#22c55e",
      bg: "rgba(34, 197, 94, 0.1)",
    },
    in_progress: {
      label: "პროცესშია",
      color: "#f59e0b",
      bg: "rgba(245, 158, 11, 0.1)",
    },
    done: {
      label: "შესრულებულია",
      color: "#ef4444",
      bg: "rgba(239, 68, 68, 0.1)",
    },
  };

  return (
    <div onClick={() => onClose()} className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center">
      <div className="bg-white w-full max-w-150 rounded-lg ">
        <div className="flex justify-end px-4 pt-4">
          <button onClick={onClose} className="text-zinc-400 hover:text-black cursor-pointer">
            <IoClose size={25} />
          </button>
        </div>

        <div className="space-y-5 px-8 pb-4">
          <div className="border-b border-zinc-300 pb-4">
            <h2 className="text-2xl font-semibold ">{formData.title}</h2>
          </div>

          <div className="flex justify-between max-w-70 items-center">
            <p className="text-sm text-zinc-500 flex items-center gap-2"><GrStatusGood color="green" size={20}/>სტატუსი</p>
            <p
              style={{
                color: statusConfig[formData.status]?.color,
                background: statusConfig[formData.status]?.bg,
              }}
              className="p-1 rounded-lg font-medium"
            >
             {statusConfig[formData.status]?.label}
            </p>
          </div>

          <div className="flex justify-between max-w-70 items-center">
            <p className="text-sm text-zinc-500 flex items-center gap-2"><FcHighPriority size={20} /> პრიორიტეტი</p>
            <p
              style={{
                color: priorityConfig[formData.priority]?.color,
                background: priorityConfig[formData.priority]?.bg,
               
              }}
              className="px-2 py-1 rounded-lg font-medium"
            >
              {priorityConfig[formData.priority]?.label}
            </p>
          </div>

          <div className="flex justify-between max-w-70 items-center">
            <p className="text-sm text-zinc-500 flex items-center gap-2"><MdAssignmentInd  size={20} color="blue"/> მინიჭებულია</p>
            <p className="font-medium">{formData.assigned_to}</p>
          </div>

          <div className="flex justify-between max-w-70 items-center">
            <p className="text-sm text-zinc-500 flex items-center gap-2"><MdAssignmentAdd  size={20} color="green"/> შეიქმნა</p>
            <p className="font-medium"  suppressHydrationWarning>{formatDate(formData.created_at)}</p>
          </div>

          <div className="flex justify-between max-w-70 items-center mb-7">
            <p className="text-sm text-zinc-500 flex items-center gap-2"><LuCalendarClock  size={20} color="red"/>ვადა</p>
            <p className="font-medium"  suppressHydrationWarning>{formatDate(formData.due_date)}</p>
          </div>

          <div className="flex flex-col gap-2 ">
            <p className="text-sm text-zinc-500  flex items-center gap-2 border-b border-zinc-300 pb-2"><MdDescription  size={20} color="black"/>აღწერა</p>
            <p className="text-justify text-zinc-800">{formData.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewTaskModal;
