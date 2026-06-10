import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

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
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
      <div className="bg-white w-full max-w-150 rounded-lg p-4">
        <div className="flex justify-end">
          <button onClick={onClose} className="text-zinc-400 hover:text-black cursor-pointer">
            <IoClose size={22} />
          </button>
        </div>

        <div className="space-y-5">
          <div className="">
            <h2 className="text-2xl font-semibold ">{formData.title}</h2>
          </div>

          <div className="flex justify-between max-w-70 items-center">
            <p className="text-sm text-zinc-500">სტატუსი</p>
            <p
              style={{
                color: statusConfig[formData.status]?.color,
                background: statusConfig[formData.status]?.bg,
              }}
              className="p-1 rounded-lg"
            >
              {formData.status}
            </p>
          </div>

          <div className="flex justify-between max-w-70 items-center">
            <p className="text-sm text-zinc-500">პრიორიტეტი</p>
            <p
              style={{
                color: priorityConfig[formData.priority]?.color,
                background: priorityConfig[formData.priority]?.bg,
              }}
              className="p-1 rounded-lg"
            >
              {formData.priority}
            </p>
          </div>

          <div className="flex justify-between max-w-70 items-center">
            <p className="text-sm text-zinc-500">მინიჭებულია</p>
            <p>{formData.assigned_to}</p>
          </div>

          <div className="flex flex-col gap-4 ">
            <p className="text-sm text-zinc-500 border-b border-zinc-400 pb-3">აღწერა</p>
            <p>{formData.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewTaskModal;
