import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsYoutube } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMicrophone } from "react-icons/fa";
import { RiVideoAddLine } from "react-icons/ri";
import { BsBell } from "react-icons/bs";

export default function Navbar() {
  return (
    <div className="flex justify-between px-14 h-14 items-center bg-[#212121] opacity-95 sticky ">
      <div className="flex gap-8 items-center text-2xl ">
        <div>
          <GiHamburgerMenu />
        </div>
        <div className="flex gap-2 items-center justify-center">
          <BsYoutube className="text-3xl text-red-600" />
          <span className="text-2xl">Youtube</span>
        </div>
      </div>
      <div className="flex items-center justify-center gap-5">
        <form>
          <div className="flex h-10 bg-zinc-900 px-4 pr-0 items-center rounded-3xl">
            <div className="flex gap-5 items-center pr-5">
              <input
                type="text"
                placeholder="Search"
                className="w-96 bg-zinc-900 focus:outline-none"
              />
            </div>
            <button className="h-10 w-16 flex items-center justify-center bg-zinc-800 rounded-r-3xl">
              <AiOutlineSearch className="text-xl" />
            </button>
          </div>
        </form>
        <div className="text-2xl bg-zinc-900 rounded-full p-3">
          <FaMicrophone />
        </div>
      </div>
      <div className="flex gap-8 items-center text-xl">
        <RiVideoAddLine />
        <div className="relative">
          <BsBell />
          <span className="absolute bottom-2 left-2 text-xs bg-red-600 rounded-full px-1">
            9+
          </span>
        </div>
        <img
          src="https://avatarfiles.alphacoders.com/365/365831.png"
          className="w-9 h-9 rounded-full"
          alt="User Avatar"
        />
      </div>
    </div>
  );
}
