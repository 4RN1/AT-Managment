"use client";
import React, { useEffect, useState } from "react";
// icons
import { BsThreeDotsVertical } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { TbArrowsExchange } from "react-icons/tb";
// actions
import { formatDate } from "@/utils/formatDate";
import { deleteInfo } from "@/action/ClientActions";
// modal
import ViewTaskModal from "./ViewTaskModal";
import ChangeStatusDropdown from "./ChangeStatusDropdown";
import EditTaskModal from "./EditTasksModal";
import { AnimatePresence } from "motion/react";
import AlertComp from "../AlertComp";

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
  assignees,
}) => {
  const [optionBox, setOptionBox] = useState(null);
  const [descOpenModal, setDescOpenModal] = useState(false);
  const [selectedTasks, setSelectedTasks] = useState(null);
  const [statusDropdown, setStatusDropdown] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [editSuccess, setEditSuccess] = useState(false);
  const [deleteSuccess, setDeleteSuccess] = useState(false);
  const [statusSuccess, setStatusSuccess] = useState(false)

  useEffect(() => {
    function handleClickOutside(e) {
      if (e.target.closest(".option-trigger")) return;
      setOptionBox(null);
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div>
      <div className="my-5 border border-zinc-400 mx-10 rounded-lg">
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

        {taskData.map((task, index) => (
          <div
            key={index}
            className="flex justify-between items-center font-medium text-sm text-black px-2 border-t border-zinc-400 py-3 hover:bg-zinc-400/10 gap-5"
          >
            <p className="w-full max-w-50">{`#-${task.id.slice(1, 8)}`}</p>
            <p className="w-full max-w-50">{task.title}</p>
            <button
              onClick={() => {
                (setDescOpenModal(true), setSelectedTasks(task));
              }}
              className="w-full max-w-50 py-1 bg-blue-500/10 text-blue-500 hover:text-blue-600 hover:bg-blue-600/10 rounded-lg cursor-pointer"
            >
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
            <p className="w-full max-w-50">{formatDate(task.due_date)}</p>
            <p className="w-full max-w-50">{task.created_by?.name}</p>

            <div className="w-full max-w-50 flex justify-end relative gap-2">
              <TbArrowsExchange
                onClick={() =>
                  setStatusDropdown(statusDropdown === task.id ? null : task.id)
                }
                size={30}
                className="cursor-pointer p-1 rounded-md text-black border border-zinc-400"
              />

              <BsThreeDotsVertical
                onClick={(e) => {
                  e.stopPropagation();
                  setOptionBox(optionBox === task.id ? null : task.id);
                }}
                size={30}
                className="cursor-pointer p-1 rounded-md text-black border border-zinc-400"
              />

              {/* OPTION BOX */}
              {optionBox === task.id && (
                <div className="bg-white border border-zinc-400 absolute top-10 right-5 z-20 text-[16px] flex flex-col option-trigger cursor-pointer ">
                  <button
                    onClick={() => {
                      setSelectedTasks(task);
                      setOpenEdit(true);
                    }}
                    className="flex items-center hover:bg-black/10 p-2 text-blue-500 cursor-pointer"
                  >
                    <FiEdit /> რედაქტირება
                  </button>
                  <button
                    onClick={() => {
                      deleteInfo("tasks", task.id, "/tasks");
                      setDeleteSuccess(true);
                      setTimeout(() => {
                        setDeleteSuccess(false);
                      }, 3000);
                    }}
                    className="flex items-center hover:bg-black/10 p-2 text-red-500 cursor-pointer"
                  >
                    <MdDelete /> წაშლა
                  </button>
                </div>
              )}
              {/* ----------------------------------- */}
              {/* DROPDOWN */}

              {statusDropdown === task.id && (
                <ChangeStatusDropdown
                  onClose={() => setStatusDropdown(null)}
                  taskId={task.id}
                  onSuccess={() => {
                    setStatusSuccess(true)
                    setTimeout(() => {
                    setStatusSuccess(false)
                    }, 3000);
                  }}
                />
              )}
            </div>
          </div>
        ))}
      </div>

      {descOpenModal && setSelectedTasks && (
        <ViewTaskModal
          task={selectedTasks}
          onClose={() => {
            (setDescOpenModal(false), setSelectedTasks(null));
          }}
        />
      )}

      {selectedTasks && openEdit && (
        <EditTaskModal
          assignees={assignees}
          client={selectedTasks}
          onClose={() => setOpenEdit(false)}
          onSuccess={() => {
            setEditSuccess(true);
            setTimeout(() => {
              setEditSuccess(false);
            }, 3000);
          }}
        />
      )}

      <div className="relative overflow-hidden">
        <AnimatePresence>
          {editSuccess && (
            <AlertComp type="update" text={"თასქი წარმატებით განახლდა"} />
          )}
          {deleteSuccess && (
            <AlertComp type="delete" text={"თასქი წარმატებით წაიშალა"} />
          )}
          {
            statusSuccess && (
              <AlertComp type = "status" text = "თასქის სტატუსი წარმატებით განახლდა" />
            )
          }
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Table;
