"use client"


import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { CiCalendar, CiSearch } from "react-icons/ci";
import { GrStatusUnknown } from "react-icons/gr";
import { IoIosBusiness, IoMdArrowDropdown } from "react-icons/io";
import { IoMailOutline } from "react-icons/io5";
import { LiaIndustrySolid } from "react-icons/lia";
import { LuBookCheck, LuNotebook } from "react-icons/lu";
import { RxAvatar } from "react-icons/rx";
import Button from "../buttons/Button";
import { TfiReload } from "react-icons/tfi";
import { FaPlus } from "react-icons/fa";
import AddClientModal from "./AddClientModal";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import EditClientModal from "./EditClientModal";
import { deleteClient } from "@/action/ClientActions";

const Table = ({clientInfo}) => {

  const [open, setOpen] = useState(false)
  const [optionBox, setOptionBox] = useState(null)
  const [openEdit, setOpenEdit] = useState(false)
  const [selectedClient, setSelectedClient] = useState(null)

  const tableInfo = [
    { name: "კლიენტის სახელი", icon: RxAvatar, downArrow: IoMdArrowDropdown },
    { name: "კომპანია", icon: IoIosBusiness, downArrow: IoMdArrowDropdown },
    { name: "ინდუსტრია", icon: LiaIndustrySolid, downArrow: IoMdArrowDropdown },
    { name: "პროექტი", icon: LuBookCheck, downArrow: IoMdArrowDropdown },
    { name: "ელფოსტა", icon: IoMailOutline, downArrow: IoMdArrowDropdown },
    { name: "სტატუსი", icon: GrStatusUnknown, downArrow: IoMdArrowDropdown },
    { name: "პროექტის აღწერა", icon: LuNotebook, downArrow: IoMdArrowDropdown },
    { name: "დამატებულია", icon: CiCalendar, downArrow: IoMdArrowDropdown },
    {
      name: "",
      icon: null,
      downArrow: null,
    },
  ];

  return (
    <>
    {/* -------- Modal ---------- */}
{open && <AddClientModal onClose={() => setOpen(false)} />}
{openEdit && (
  <EditClientModal
    client={selectedClient}  // ✅ specific client, not the whole array
    onClose={() => { setOpenEdit(false); setSelectedClient(null); }}
  />
)}
{/* Search & Add Client Button */}

<div className="py-5 px-4 flex justify-between">
  <div className="flex items-center w-full justify-between max-w-115">
  <div className="relative flex items-center">
  <CiSearch className="absolute left-2 text-zinc-400" size={20} />
  <input
    placeholder="მოძებნა..."
    className="pl-8 pr-2 py-1.5 min-w-70 border border-zinc-400 rounded-md"
  />
</div>

 <hr className="h-5 border-l border-zinc-400 w-0" />


   <Button content={"განახლება"} action={null} icon={<TfiReload/>}/>
</div>

<button onClick={() => setOpen(true)} className="flex items-center gap-3 bg-emerald-500 text-white font-medium px-3.5 py-2.5 rounded-lg cursor-pointer hover:opacity-85"><FaPlus />
კლიენტის დამატება</button>

</div>




      {/*--------------- Table ------------- */}

      <table className="w-full">
        <thead>
          <tr>
            {tableInfo.map((header) => {
              const Icon = header.icon;
              const ArrowIcon = header.downArrow;

              return (
                <th
                  key={header.name}
                  className="border-b border-zinc-400 text-left px-2 py-2 lg:text-[12px]"
                >
                  <span className="flex items-center justify-between">
                    <div className="flex items-center gap-1 ">
                      {Icon && <Icon size={17} />}
                      {header.name}
                    </div>
                    {header.downArrow && (
                      <ArrowIcon size={17} className="text-zinc-400" />
                    )}
                  </span>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody >
          {clientInfo.map((info) => (
            <tr key={info.id} className="text-[13px] lg:text-[15px] text-zinc-700 font-medium">
              <td className="border-t border-b border-zinc-400 p-2">
                {info.name}
              </td>
              <td className="border-t border-b border-zinc-400 p-2">
                {info.company}
              </td>
              <td className="border-t border-b border-zinc-400 p-2">
                {info.industry}
              </td>

              <td className="border-t border-b border-zinc-400 p-2">
                {info.project}
              </td>

              <td className="border-t border-b border-zinc-400 p-2">
                {info.email}
              </td>
              <td className="border-t border-b border-zinc-400 p-2 bg-emerald-500/10 text-emerald-500 text-center">
                {info.status}
              </td>
              <td className="border-t border-b border-zinc-400 p-2">
                {info.notes}
              </td>
              <td className="border-t border-b border-zinc-400 p-2">
                {info.created_at}
              </td>
              <td className="border-t border-b border-zinc-400 p-2 text-center relative">
                {" "}
                <BsThreeDotsVertical
                onClick={() => setOptionBox(optionBox === info.id ? null : info.id) }
                  size={30}
                  className="cursor-pointer p-1 rounded-md text-black border border-zinc-400"
                />

              {optionBox === info.id && (<div className="bg-white border border-zinc-400 absolute top-10 right-5 z-10 text-[16px] flex flex-col">
                  <button onClick={() => { setSelectedClient(info); setOpenEdit(true); }} className="flex items-center hover:bg-black/10 p-2 text-blue-500 cursor-pointer" ><FiEdit /> რედაქტირება</button>
                  <button onClick={() => {deleteClient(info.id)}}  className="flex items-center hover:bg-black/10 p-2 text-red-500 cursor-pointer"><MdDelete /> წაშლა</button>
                </div> )}  
              </td>
            </tr>
          ))}

        </tbody>

      </table>
          {clientInfo.length === 0? ( <p className="text-center text-zinc-400 mt-5">კლიენტები არ არის დამატებული</p>) : null}

    </>
  );
};

export default Table;
