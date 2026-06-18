"use client"
import { useState } from "react";

import { DayPicker } from "@daypicker/react";
import "@daypicker/react/style.css";

export function Calendar() {
  

  return (
    <DayPicker
      animate
      className=" px-4 h-80 py-2 rounded-2xl text-lg font-bold bg-white/20"
    />
  );
}