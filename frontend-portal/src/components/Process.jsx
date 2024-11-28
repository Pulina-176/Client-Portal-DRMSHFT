import React from "react";
import { FaCalendar, FaCalendarTimes, FaClock, FaTags } from "react-icons/fa";
import { FiCheckCircle, FiClipboard } from "react-icons/fi";
import {AiOutlineCalendar} from 'react-icons/ai'
import {BiLoaderAlt, BiTask, BiCalendarEvent} from 'react-icons/bi'

const Process = ({ taskLIST }) => {
  // First, sort by status: "done" first, then "in progress", then "to do"
  const taskLIST_sorted = taskLIST.sort((a, b) => {
    const statusOrder = { "done": 1, "in progress": 2, "to do": 3 };
    const statusA = statusOrder[a.status] || 4; // Default to 4 if status is unknown
    const statusB = statusOrder[b.status] || 4;
    if (statusA !== statusB) return statusA - statusB; // Sort by status order
    if (a.dueDate === null) return 1; // place a at the end
    if (b.dueDate === null) return -1; // place a at the front
    return parseInt(a.dueDate) - parseInt(b.dueDate);
  });

  // Filtering "closed", "payment" status into "done"
  const final_taskLIST = taskLIST_sorted.map(task => {
    if (task.status === "Closed" || task.status === "payment") {
      task.status = "done";
    }
    return task;
  });

  const renderStatus = (status) => {
    switch (status) {
      case "done":
        return "Done";
      case "in progress":
        return "In Progress";
      case "to do":
        return "To Do";
      default:
        return "Unknown";
    }
  };

  const renderIcon = (status) => {
    switch (status) {
      case "done":
        return (
          <FiCheckCircle className="size-7 text-green-700" />
        );
      case "in progress":
        return (
          <BiLoaderAlt className="size-7 text-blue-700 animate-spin" />
        );
      case "to do":
        return (
          <FiClipboard className="size-7 text-yellow-600 " />

          
        );
      default:
        return null;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "done":
        return "text-green-500";
      case "in progress":
        return "text-blue-500";
      case "to do":
        return "text-yellow-500";
      default:
        return "text-gray-500";
    }
  };

  return (
    <section className="relative flex flex-col justify-center overflow-hidden antialiased font-inter">
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');`}
      </style>
      <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-2">
        <div className="flex flex-col justify-center divide-y divide-slate-200 [&>*]:py-0 mb-6">
          <div className="w-full max-w-3xl mx-auto">
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:ml-[8.75rem]  md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
              {final_taskLIST.map((task, index) => (
                <div key={index} className="relative">
                  <div className="flex items-center justify-center ml-0 sm:ml-0 md:ml-[120px] lg:ml-[120px] w-10 h-10 rounded-full bg-white shadow md:order-1">
                    {renderIcon(task.status)}
                  </div>
                  <div className="flex flex-col bg-white p-4 sm:p-6 md:p-8 rounded border border-slate-200 shadow ml-14 sm:ml-14 md:ml-44">
                    <h2 className={`text-2xl place-self-start font-inter font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight ${getStatusColor(task.status)}`}>
                      {task.name}
                    </h2>
                    <div className="flex items-center justify-around mb-4">
                      <div className="flex items-center font-inter text-black mt-4">
                        <BiCalendarEvent className="mr-2 text-gray-700" />
                        Due date: {task.dueDate}
                      </div>
                      <div className="flex items-center text-md text-semibold text-gray-500 mt-4">
                        <BiTask className="mr-2 text-gray-700" />
                        Status: <span className={`ml-2 font-semibold ${getStatusColor(task.status)}`}>{renderStatus(task.status)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
