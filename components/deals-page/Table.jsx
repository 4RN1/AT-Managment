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

const tableInfo = [
  { name: "თარიღი", downArrow: IoMdArrowDropdown },
  { name: "სერვისი", downArrow: IoMdArrowDropdown },
  { name: "კომპანია", downArrow: IoMdArrowDropdown },
  { name: "ტიპი", downArrow: IoMdArrowDropdown },
  { name: "სტატუსი", downArrow: IoMdArrowDropdown },
  { name: "გადახდის ტიპი", downArrow: IoMdArrowDropdown },
  { name: "თანხა", downArrow: IoMdArrowDropdown },
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
  pending: { label: "მუშავდება", bgColor: "rgba(245, 158, 11, 0.1)", textColor: "#f59e0b" , icon:GiSandsOfTime},
  paid: { label: "გადახდილია", bgColor: "rgba(34, 197, 94, 0.1)", textColor: "#22c55e" , icon:FaRegCircleCheck},
  cancelled: { label: "გაუქმდა", bgColor: "rgba(239, 68, 68, 0.1)", textColor: "#ef4444",icon:IoCloseCircleOutline},
};
const paymentMethodConfig = {
  cash: { label: "ნაღდი"},
  card: { label: "ბარათი"},
  bank_transfer:{ label: "საბანკო გადარიცხვა"},
};

const Table = ({ Info }) => {
  const [optionBox, setOptionBox] = useState(false);

  return (
    <>
      {/* -------- Modal ---------- */}
      {/* {open && <AddClientModal onClose={() => setOpen(false)} />}
{openEdit && (
  <EditClientModal
    client={selectedClient}  
    onClose={() => { setOpenEdit(false); setSelectedClient(null); }}
  />
)} */}
      {/* Search & Add Client Button */}

      <div className="py-5 px-4 flex ">
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

        {/* <button  className="flex items-center gap-3 bg-emerald-500 text-white font-medium px-3.5 py-2.5 rounded-lg cursor-pointer hover:opacity-85"><FaPlus />
          </button> */}
      </div>

      {/*--------------- Table ------------- */}

      <table className="w-full">
        <thead>
          <tr>
            {tableInfo.map((header) => {
              const ArrowIcon = header.downArrow;

              return (
                <th
                  key={header.name}
                  className="border-b border-zinc-400 text-left px-2 py-2 lg:text-[13px]"
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
          {Info.map((info) => (
            <tr
              key={info.id}
              className="text-[13px] lg:text-[15px] text-zinc-700 font-medium"
            >
              <td className="border-t border-b border-zinc-400 p-2">
                {formatDate(info.created_at)}
              </td>
              <td className="border-t border-b border-zinc-400 p-2">
                {info.title}
              </td>
              <td className="border-t border-b border-zinc-400 p-2">
                {info.company}
              </td>
              <td className="border-t border-b border-zinc-400 p-2 ">
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
              <td className="border-t border-b border-zinc-400 p-2">
                <span className="p-2 rounded-lg"
                style={{
                    color: statusConfig[info.type]?.textColor,
                    background: statusConfig[info.type]?.bgColor,
                  }}
                >
                  {statusConfig[info.status]?.label}
                </span>
              </td>
              <td className="border-t border-b border-zinc-400 p-2 font-bold">
                <span className="p-2 rounded-lg"
                style={{
                    color: paymentMethodConfig[info.type]?.textColor,
                    background: paymentMethodConfig[info.type]?.bgColor,
                  }}
                >
                {paymentMethodConfig[info.payment]?.label}
                </span>
              </td>

              <td className="border-t border-b border-zinc-400 p-2 font-bold text-black">
                {info.amount.toFixed(2)} ₾
              </td>
              <td className="border-t border-b border-zinc-400 p-2 text-center relative">
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
                        deleteInfo("clients", info.id, "/clients");
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
      {Info.length === 0 ? (
        <p className="text-center text-zinc-400 mt-5">
          კლიენტები არ არის დამატებული
        </p>
      ) : null}
    </>
  );
};

export default Table;
