import React from "react";
import Button from "../buttons/Button";
import { BsThreeDotsVertical } from "react-icons/bs";

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

const Table = ({ title, taskData, headingNumBgColor, headingNumColor }) => {
  return (
    <div>
      
      <div className="my-5  border border-zinc-400  mx-10 rounded-lg">
        <div className=" border-b border-zinc-400">
          <h2 className="font-medium py-2 px-2">
            {title}{" "}
            <span
              style={{ background: headingNumBgColor, color: headingNumColor }}
              className=" px-2.5 py-1 rounded-full"
            >
              0
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

        {taskData ? (
          taskData.map((task, index) => (
            <div
              key={index}
              className="flex justify-between items-center font-medium text-sm text-black px-2 border-t border-zinc-400 py-3 hover:bg-zinc-400/10 gap-5"
            >
              <p className="w-full max-w-50">{task.uniqueCode}</p>
              <p className="w-full max-w-50">{task.title}</p>
              <button className="w-full max-w-50 py-1 bg-blue-500/10 text-blue-500 hover:text-blue-600 hover:bg-blue-600/10 rounded-lg cursor-pointer">
                ნახვა
              </button>
              <p className="w-full max-w-50">{task.assigned}</p>
              <p className="w-full max-w-50  bg-red-400/30 text-red-600 py-1 rounded-lg text-center">
                {task.priority}
              </p>
              <p className="w-full max-w-50">{task.created}</p>
              <p className="w-full max-w-50">{task.expiring}</p>
              <p className="w-full max-w-50">{task.author}</p>
              <div className="w-full max-w-50 flex justify-end">
                <BsThreeDotsVertical
                  size={30}
                  className="cursor-pointer p-1 rounded-md text-black border border-zinc-400"
                />
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-zinc-400 py-5">მონაცემები არ არის</p>
        )}
      </div>
    </div>
  );
};

export default Table;
