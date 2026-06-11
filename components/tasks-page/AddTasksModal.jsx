"use client";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { add } from "@/action/ClientActions";

const priorities = [
  { value: "low", label: "დაბალი", color: "#22c55e" },
  { value: "medium", label: "საშუალო", color: "#f59e0b" },
  { value: "high", label: "მაღალი", color: "#ef4444" },
  { value: "urgent", label: "სასწრაფო", color: "#7c3aed" },
];

const AddTasksModal = ({ assignees = [] }) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const formData = {
        title: e.target.title.value,
        description: e.target.description.value,
        assigned_to: e.target.assigned_to.value,
        priority: e.target.priority.value,
        status: "todo",
        due_date:e.target.due_date.value
      };
      await add("tasks", formData, "/tasks");
      setOpen(false);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  
  return (
    <div className="mx-10 mt-5">
      <div className="flex items-center justify-end">
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-3 bg-emerald-500 text-white font-medium px-3.5 py-2.5 rounded-lg cursor-pointer hover:opacity-85 "
      >
        <FaPlus />
        თასქის დამატება
      </button>
  </div>
      {open && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-6 relative">
            {/* Header */}
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-lg font-semibold">თასქის დამატება</h2>
              <button
                onClick={() => setOpen(false)}
                className="text-zinc-400 hover:text-black"
              >
                <IoClose size={22} />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              {/* Title */}
              <div className="flex flex-col gap-1">
                <label className="text-sm text-zinc-500">თასქი</label>
                <input
                  name="title"
                  type="text"
                  required
                  className="border border-zinc-300 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:border-emerald-500"
                />
              </div>

              {/* Description */}
              <div className="flex flex-col gap-1">
                <label className="text-sm text-zinc-500">აღწერა</label>
                <textarea
                  name="description"
                  rows={3}
                  required
                  className="border border-zinc-300 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:border-emerald-500 resize-none"
                />
              </div>

              {/* Assigned */}
              <div className="flex flex-col gap-1">
                <label className="text-sm text-zinc-500">მინიჭებულია</label>
                <select
                  name="assigned_to"
                  required
                  className="border border-zinc-300 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:border-emerald-500"
                >
                  <option value="">აირჩიე...</option>
                  {assignees.map((a) => (
                    <option key={a.id} value={a.id}>
                      {a.name} {/* ✅ display is name/email */}
                    </option>
                  ))}
                </select>
              </div>

              {/* Priority */}
              <div className="flex flex-col gap-1">
                <label className="text-sm text-zinc-500">პრიორიტეტი</label>
                <select
                  name="priority"
                  required
                  className="border border-zinc-300 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:border-emerald-500"
                >
                  {priorities.map((p) => (
                    <option key={p.value} value={p.value}>
                      {p.label}
                    </option>
                  ))}
                </select>
              </div>

                   <div className="flex flex-col gap-1">
                <label className="text-sm text-zinc-500">ვადა</label>
                <input
                  name="due_date"
                  type="date"
                  required
                  className="border border-zinc-300 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:border-emerald-500"
                />
              </div>


              {error && <p className="text-red-500 text-sm">{error}</p>}

              <button
                type="submit"
                disabled={loading}
                className="mt-2 bg-emerald-500 text-white font-medium py-2 rounded-lg hover:opacity-85 disabled:opacity-50"
              >
                {loading ? "იტვირთება..." : "დამატება"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddTasksModal;
