import React from "react";
import { MdHomeFilled, MdSubscriptions, MdOutlineVideoLibrary, MdHistory, MdOutlineWatchLater } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { LuThumbsUp } from "react-icons/lu";

export default function Sidebar() {
  const mainLinks = [
    {
      icon: <MdHomeFilled className="text-xl" />,
      name: "Home",
    },
    {
      icon: <SiYoutubeshorts className="text-xl" />,
      name: "Shorts",
    },
    {
      icon: <MdSubscriptions className="text-xl" />,
      name: "Subscriptions",
    },
  ];

  const secondaryLinks = [
    {
      icon: <MdOutlineVideoLibrary className="text-xl" />,
      name: "Library",
    },
    {
      icon: <MdHistory className="text-xl" />,
      name: "History",
    },
    {
      icon: <MdOutlineWatchLater className="text-xl" />,
      name: "Watch Later",
    },
    {
      icon: <LuThumbsUp className="text-xl" />,
      name: "Liked Videos",
    },
  ];

  return (
    <div className="sidebar w-2/12 bg-[#212121] p-2 pr-5 overflow-auto pb-8 h-screen">
      <ul className="flex flex-col border-b-2 border-gray-700">
        {mainLinks.map(({ icon, name }) => {
          return (
            <li key={name} className={`pl-6 py-3 hover:bg-zinc-600 ${name === "Home" ? "bg-slate-600" : ""} rounded-xl`}>
              <button onClick={() => alert(`${name} clicked`)} className="flex items-center gap-5 w-full text-left">
                {icon}
                <span className="text-sm tracking-wider">{name}</span>
              </button>
            </li>
          );
        })}
      </ul>
      <ul className="flex flex-col border-b-1 border-gray-800">
        {secondaryLinks.map(({ icon, name }) => {
          return (
            <li key={name} className={`pl-6 py-3 hover:bg-zinc-600 ${name === "Home" ? "bg-slate-600" : ""} rounded-xl`}>
              <button onClick={() => alert(`${name} clicked`)} className="flex items-center gap-5 w-full text-left">
                {icon}
                <span className="text-sm tracking-wider">{name}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
