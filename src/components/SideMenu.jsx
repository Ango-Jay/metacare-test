import React from "react"
import {ReactComponent as Icon1} from "../icons/messages.svg"
import { ReactComponent as Chevron } from "../icons/chevron.svg"
import { ReactComponent as Icon2 } from "../icons/check_box.svg"
import { ReactComponent as Icon3 } from "../icons/calender.svg"
import { ReactComponent as Icon4 } from "../icons/clock.svg"
import { ReactComponent as Icon5 } from "../icons/chat.svg"

const SideMenu = () => {
    return (
        <>
            <div className="sm:w-20 sm:z-[1000] bg-white min-h-screen sm:hover:w-80 group transition-[width] ease-in-out duration-200 lg:w-80 lg:hover:w-80 fixed">
                <div className="flex flex-col py-3 border-r-2 border-gray-200 min-h-[50vh] sm:items-center sm:group-hover:items-start lg:items-start">
                    <div className="border border-gray-200 rounded-lg m-4 items-center px-10 py-3 sm:hidden sm:group-hover:flex lg:flex">
                        ghj
<div className="flex flex-col text-left px-1">
                            <p className="text-black font-bold m-0">Metacare</p>
                            <p className="text-gray-600 m-0">adeyinka@metacare.app</p>
                        </div>
                       
                    </div>
                    <ul className="flex flex-col w-full list-none text-gray-600 items-start text-left sm:pl-[25px] sm:group-hover:pl-4 lg:pl-4 text-base font-gelion sm:pt-[84px] sm:group-hover:pt-0 sm:group-hover:pb-0 sm:pb-[10rem] lg:pt-0">
                        <li className="w-full sm:h-[64px]"><a className="py-3 flex items-center hover:text-[#6837EF]"   href="#"><span className="mr-6"><Icon1 /></span><span className="sm:hidden sm:group-hover:flex lg:flex"> Admin</span> <span className="ml-auto mr-6 sm:hidden lg:flex"><Chevron /></span></a></li>
                        <li className="w-full sm:h-[64px]"><a className="py-3 flex items-center hover:text-[#6837EF]" href="#"><span className="mr-6"><Icon2 /></span><span className="sm:hidden sm:group-hover:flex lg:flex"> Knowledge Base</span> <span className="sm:hidden lg:flex ml-auto mr-6"><Chevron /></span></a></li>
                        <li className="w-full sm:h-[64px]"><a className="py-3 flex items-center hover:text-[#6837EF]" href="#"><span className="mr-6"><Icon2 /></span><span className="sm:hidden sm:group-hover:flex lg:flex">  Train SAM</span> <span className="sm:hidden lg:flex ml-auto mr-6"><Chevron /></span></a></li>
                        <li className="w-full sm:h-[64px]"><a className="py-3 flex items-center hover:text-[#6837EF]" href="#"><span className="mr-6"><Icon3 /></span><span className="sm:hidden sm:group-hover:flex lg:flex">  Agent Inbox</span> <span className="sm:hidden lg:flex ml-auto mr-6"><Chevron /></span></a></li>
                        <li className="w-full sm:h-[64px]"><a className="py-3 flex items-center hover:text-[#6837EF]" href="#"><span className="mr-6"><Icon4 /></span><span className="sm:hidden sm:group-hover:flex lg:flex">  Help Center</span> <span className="sm:hidden lg:flex ml-auto mr-6"><Chevron /></span></a></li>
                        <li className="w-full sm:h-[64px]"><a className="py-3 flex text-[#6837EF] flex-col" href="#"><div className="flex items-center"> <span className="mr-6 leading-6 py-2"><Icon5 /></span><span className="sm:hidden sm:group-hover:flex lg:flex">  Analytics </span><span className="sm:hidden lg:flex ml-auto mr-6 rotate-90"><Chevron /></span></div>
                            <ul className="pl-10 text-gray-600 sm:hidden sm:group-hover:block lg:block">
                            <li className="text-black font-bold">Teams</li> 
                            <li>Knowledge Base</li>
                            <li>Train SAM</li>
                            <li>Help Center</li>
                        </ul>
                        </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>

    )
}

export default SideMenu;