import React from "react";
import {
  MdHomeFilled,
  MdSubscriptions,
  MdOutlineVideoLibrary,
  MdHistory,
  MdOutlineWatchLater,
} from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { LuThumbsUp } from "react-icons/lu";

export default function Sidebar() {
  const mainLinks = [
    {
      icon: <MdHomeFilled />,
      name: "Home",
    },
    {
      icon: <SiYoutubeshorts />,
      name: "Shorts",
    },
    {
      icon: <MdSubscriptions />,
      name: "Subscriptions",
    },
  ];
const secondaryLinks = [{
    icon: <MdOutlineVideoLibrary />,
    name: "Library",
},
{
    icon: <MdHistory/>,
    name: "History",
},
{
    icon: <MdOutlineWatchLater/>,
    name: "Watch Later",
},
{
    icon: <LuThumbsUp/>,
    name: "Liked Videos",
}
]
  return(
    <div className="sidebar w-2/12 bg-[#212121] pr-5 overflow-auto pb-8 h-screen">
        <ul className="flex flex-col border-b-1 bg-grey-800">
            {mainLinks.map(({icon, name}) => {
                return (
                    <li key={name} className='pl-6 py-3 hover:bg-zinc-600 ${name === "Home"}'>
                        <a href="#" className="link">
                            {icon}
                            <span>{name}</span>
                        </a>
                    </li>
                    )
                })
            }

        </ul>
    </div>
  )
}
