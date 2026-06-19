"use client"
import { ka } from "date-fns/locale"; 

import { DayPicker } from "@daypicker/react";
import "@daypicker/react/style.css";

export function Calendar() {
  

  return (
    <DayPicker
      animate
      locale={ka}
      className="h-85  px-4  text-lg   rounded-2xl font-bold bg-white shadow-sm border border-zinc-100  hover:shadow-md transition-shadow duration-200 overflow-hidden"
      classNames={{
      months: "w-full",
      month: "w-full",
      table: "w-full",
      month_grid: "w-full",
      today:"bg-emerald-500 text-white rounded-4xl"
     
  }}
    />
  );
}