import Link from "next/link";
import React from "react";

const Priority = ({ clientName = "client", priorityStatus = "მაღალი" }) => {
  return (
    <div className="bg-white rounded-2xl max-w-80  min-h-100  py-4 border border-zinc-100 shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden">
      <h2 className="text-md text-center font-medium text-zinc-700">
        პრიორიტეტული პროექტები
      </h2>
      <div className="mt-5 text-xs flex gap-2 justify-center items-center">
        <span className="p-2 bg-zinc-400/30 text-zinc-600 rounded-md cursor-pointer hover:bg-zinc-400/20">
          ყველა
        </span>
        <span className="p-2 bg-green-400/30 text-green-600 rounded-md cursor-pointer hover:bg-green-400/20">
          დაბალი
        </span>
        <span className="p-2 bg-yellow-400/30 text-yellow-600 rounded-md cursor-pointer hover:bg-yellow-400/20">
          საშუალო
        </span>
        <span className="p-2 bg-red-400/30 text-red-600 rounded-md cursor-pointer hover:bg-red-400/20">
          მაღალი
        </span>
      </div>

      <div className="h-70 overflow-y-scroll mt-2 px-5">
        <div className="flex flex-col gap-1 py-3 border-b border-zinc-100">
          <div className="flex justify-between items-center">
            <p className="font-semibold text-sm text-zinc-800">
              საიტის დიზაინი
            </p>
            <p className="p-1.5 bg-red-400/30 text-red-600 font-medium rounded-md text-xs">
              მაღალი
            </p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-xs text-zinc-400">TBC Bank · ⏰ 24 მაისი</p>
          </div>
        </div>

         <div className="flex flex-col gap-1 py-3 border-b border-zinc-100">
          <div className="flex justify-between items-center">
            <p className="font-semibold text-sm text-zinc-800">
              საიტის დიზაინი
            </p>
            <p className="p-1.5 bg-green-400/30 text-green-600 font-medium rounded-md text-xs">
              მაღალი
            </p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-xs text-zinc-400">TBC Bank · ⏰ 24 მაისი</p>
          </div>
        </div>
         <div className="flex flex-col gap-1 py-3 border-b border-zinc-100">
          <div className="flex justify-between items-center">
            <p className="font-semibold text-sm text-zinc-800">
              საიტის დიზაინი
            </p>
            <p className="p-1.5 bg-red-400/30 text-red-600 font-medium rounded-md text-xs">
              მაღალი
            </p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-xs text-zinc-400">TBC Bank · ⏰ 24 მაისი</p>
          </div>
        </div>
         <div className="flex flex-col gap-1 py-3 border-b border-zinc-100">
          <div className="flex justify-between items-center">
            <p className="font-semibold text-sm text-zinc-800">
              საიტის დიზაინი
            </p>
            <p className="p-1.5 bg-red-400/30 text-red-600 font-medium rounded-md text-xs">
              მაღალი
            </p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-xs text-zinc-400">TBC Bank · ⏰ 24 მაისი</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Priority;
