"use client";

import React, { useState } from "react";
// icons
import { BsThreeDotsVertical } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { IoMdArrowDropdown } from "react-icons/io";
import { TfiReload } from "react-icons/tfi";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
// ----------------------------
import Button from "../buttons/Button";
import { deleteInfo } from "@/action/ClientActions";
import { formatDate } from "@/utils/formatDate";

import { GiSandsOfTime } from "react-icons/gi";
import { FaRegCircleCheck } from "react-icons/fa6";
import { IoCloseCircleOutline } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import { FaPlus } from "react-icons/fa";
import AddDealsModal from "./AddDealsmodal";

const tableInfo = [
  { name: "თარიღი", downArrow: IoMdArrowDropdown },
  { name: "სერვისი", downArrow: IoMdArrowDropdown },
  { name: "კომპანია", downArrow: IoMdArrowDropdown },
  { name: "ოპერაციის ტიპი", downArrow: IoMdArrowDropdown },
  { name: "გადახდის ტიპი", downArrow: IoMdArrowDropdown },
  { name: "თანხა", downArrow: IoMdArrowDropdown },
  { name: "სტატუსი", downArrow: IoMdArrowDropdown },
  { name: "", downArrow: null },
];

const typeConfig = {
  income: {
    label: "შემოსავალი",
    bgColor: "rgba(34, 197, 94, 0.2)",
    textColor: "#22c55e",
  },
  expense: { label: "ხარჯი", bgColor:"rgba(239, 68, 68, 0.1)", textColor: "#ef4444" },
};

const statusConfig = {
  pending: { label: "მუშავდება",  textColor: "#f59e0b" , icon:GiSandsOfTime},
  paid: { label: "გადახდილია", textColor: "#22c55e" , icon:FaRegCircleCheck},
  cancelled: { label: "გაუქმდა", textColor: "#ef4444",icon:IoCloseCircleOutline},
};
const paymentMethodConfig = {
  cash: { label: "ნაღდი"},
  card: { label: "ბარათი"},
  bank_transfer:{ label: "საბანკო გადარიცხვა"},
};

const Table = ({ info , clients }) => {
  const [optionBox, setOptionBox] = useState(false);
  const [open , setOpen] = useState(false)
  return (
    <>

   
{/* {openEdit && (
  <EditClientModal
    client={selectedClient}  
    onClose={() => { setOpenEdit(false); setSelectedClient(null); }}
  />
)} */}
      {/* Search & Add Client Button */}

      <div className="py-5  flex flex-col gap-5 max-w-380 w-full mx-auto">
    <h1 className="text-2xl text-black font-bold">ფინანსები</h1>
 
 <div className="flex justify-between">
        <div className="flex items-center w-full max-w-115 justify-between">
          <div className="relative flex items-center">
            <CiSearch className="absolute left-2 text-zinc-400" size={20} />
            <input
              placeholder="მოძებნა..."
              className="pl-8 pr-2 py-1.5 min-w-70 border border-zinc-400 rounded-md"
            />
          </div>
          <hr className="h-5 border-l border-zinc-400 w-0" />

          <Button content={"განახლება"} action={null} icon={<TfiReload />} />
        </div>

        <button onClick={() => setOpen(true)}  className="flex items-center gap-3 bg-emerald-500 text-white font-medium px-3.5 py-2.5 rounded-lg cursor-pointer hover:opacity-85"><FaPlus /> ტრანზაქციის დამატება
          </button>
          </div>
      </div>

      {/*--------------- Table ------------- */}

      <table className="w-full max-w-380 mx-auto border border-zinc-600">
        <thead>
          <tr>
            {tableInfo.map((header) => {
              const ArrowIcon = header.downArrow;

              return (
                <th
                  key={header.name}
                  className="border-b border-zinc-400 text-left px-2 py-2 lg:text-[13px] "
                >
                  <span className="flex items-center">
                    <div className="flex items-center">{header.name}</div>
                    {header.downArrow && (
                      <ArrowIcon size={17} className="text-zinc-400" />
                    )}
                  </span>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>

          {info.map((info) => (
            <tr
              key={info.id}
              className="text-[13px] lg:text-[15px] text-zinc-800 font-medium border border-zinc-600"
            >
              <td className="p-2">
                {formatDate(info.created_at)}
              </td>
              <td className="p-2">
                {info.title}
              </td>
              <td className="p-2">
                {info.clients?.company}
              </td>
              <td className="p-2 ">
                <span
                  className="p-2 rounded-lg"
                  style={{
                    color: typeConfig[info.type]?.textColor,
                    background: typeConfig[info.type]?.bgColor,
                  }}
                >
                  {" "}
                  {typeConfig[info.type]?.label}
                </span>
              </td>
            
              <td className="p-2 font-bold">
                <span className="p-2 rounded-lg"
                style={{
                    color: paymentMethodConfig[info.payment]?.textColor,
                    background: paymentMethodConfig[info.payment]?.bgColor,
                  }}
                >
                {paymentMethodConfig[info.payment_method]?.label}
                </span>
              </td>

              <td className="p-2 font-bold text-black">
                {info.amount.toFixed(2)} ₾
              </td>

                <td className="p-2">
                <span className="p-2 rounded-lg flex items-center gap-1"
                style={{
                    color: statusConfig[info.status]?.textColor,
                  }}
                >
                  <GoDotFill />   {statusConfig[info.status]?.label}
                </span>
              </td>
              <td className="p-2 text-center relative">
                {" "}
                <BsThreeDotsVertical
                  onClick={() =>
                    setOptionBox(optionBox === info.id ? null : info.id)
                  }
                  size={30}
                  className="cursor-pointer p-1 rounded-md text-black border border-zinc-400"
                />
                {optionBox === info.id && (
                  <div className="bg-white border border-zinc-400 absolute top-10 right-5 z-10 text-[16px] flex flex-col rounded-lg p-2">
                    <button
                      onClick={() => {
                        setSelectedClient(info);
                        setOpenEdit(true);
                      }}
                      className="flex items-center hover:bg-black/10 p-2 text-blue-500 cursor-pointer"
                    >
                      <FiEdit /> რედაქტირება
                    </button>
                    <button
                      onClick={() => {
                        deleteInfo("deals", info.id, "/deals");
                      }}
                      className="flex items-center hover:bg-black/10 p-2 text-red-500 cursor-pointer"
                    >
                      <MdDelete /> წაშლა
                    </button>
                  </div>
                )}
              </td>
            </tr>
            

            
          ))}
      
        </tbody>
        
      </table>
      {info.length === 0 && (
        <p className="text-center text-zinc-400 mt-5">ჩანაწერები არ არის დამატებული</p>
      )}
      {open && <AddDealsModal clients={clients} onClose={() => setOpen(false)} />}
    
    </>
  );
};

export default Table;
