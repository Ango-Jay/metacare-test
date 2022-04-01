import React,{useState} from "react"
import {ReactComponent as Icon1} from "../icons/messages.svg"
import { ReactComponent as Chevron } from "../icons/chevron.svg"
import { ReactComponent as Icon2 } from "../icons/check_box.svg"
import { ReactComponent as Icon3 } from "../icons/calender.svg"
import { ReactComponent as Icon4 } from "../icons/clock.svg"
import { ReactComponent as Icon5 } from "../icons/chat.svg"

const SideMenu = () => {
    const [isMobile, setIsMobile] = useState(false);
    return (
        <>
            <div className="w-[100%] mb-0 sm:mb-0 sm:w-20 z-[1000] sm:z-[1000] bg-white h-[3rem] sm:min-h-screen sm:hover:w-80 group transition-[width] ease-in-out duration-200 lg:w-80 lg:hover:w-80 relative sm:fixed border-b border-gray-200 sm:border-0 sm:rs:overflow-y-auto lg:overflow-y-visible">
                <a
                    href="#"
                    // className="mobile-burger w-inline-block"
                    className="absolute top-0 right-0 flex sm:hidden flex-col mt-3 mr-3 justify-around w-[2rem] h-[1.5rem] bg-transparent pointer z-[10001]"
                    onClick={() => setIsMobile(!isMobile)}
                    style={{WebkitTapHighlightColor:"transparent"}}
                    role="button"
                >
                    <div
                        // className="mobile-burger-line"
                        className="w-[1.8rem] h-[0.18rem] bg-black rounded-xl relative origin-[1px] transition-[transform] ease-in-out duration-500"
                        style={
                            isMobile
                                ? { transform: `rotate(${45}deg)`, width: "1.5rem" }
                                : { transform: `rotate(${0})` }
                        }
                    />
                    <div
                        // className="mobile-burger-line"
                        className="w-[1.8rem] h-[0.18rem] bg-black rounded-xl relative origin-[1px] transition-[transform] ease-in-out duration-500"
                        style={
                            isMobile
                                ? { transform: `translateX(${20}px)`, opacity: 0 }
                                : { transform: `translateX(${0})`, opacity: 1 }
                        }
                    />
                    <div
                        // className="mobile-burger-line"
                        className="w-[1.8rem] h-[0.18rem] bg-black rounded-xl relative origin-[1px] transition-[transform] ease-in-out duration-500"
                        style={
                            isMobile
                                ? { transform: `rotate(${-45}deg)`, width: "1.5rem" }
                                : { transform: `rotate(${0})` }
                        }
                    />
                </a>
                {/* mobile */}
                <div className="fixed top-0 w-full flex sm:hidden flex-col transition-[transform] ease-in-out duration-200 py-8 px-3 bg-white border-r-2 border-gray-200 min-h-[100vh]"
                style={
                        isMobile
                        ? { transform: `translate(${0},${0})`}
                        : { transform: `translate(${100}vw,${0})`}
}>
                    <div className="border border-gray-200 rounded-lg m-4 items-center px-10 py-3">
                    
<div className="flex flex-col text-left px-1">
                            <p className="text-black font-bold m-0">Metacare</p>
                            <p className="text-gray-600 m-0">adeyinka@metacare.app</p>
                        </div>

                    </div>
                    <ul className="flex flex-col w-full list-none text-gray-600 items-start text-left text-base font-gelion overflow-y-auto">
                        <li className="w-full"><a className="py-3 flex items-center hover:text-[#6837EF]" href="#"><span className="mr-6"><Icon1 /></span><span> Admin</span> <span className="ml-auto mr-6" ><Chevron /></span></a></li>
                        <li className="w-full"><a className="py-3 flex items-center hover:text-[#6837EF]" href="#"><span className="mr-6"><Icon2 /></span><span> Knowledge Base</span> <span className="ml-auto mr-6"><Chevron /></span></a></li>
                        <li className="w-full"><a className="py-3 flex items-center hover:text-[#6837EF]" href="#"><span className="mr-6"><Icon2 /></span><span>  Train SAM</span> <span className="ml-auto mr-6"><Chevron /></span></a></li>
                        <li className="w-full"><a className="py-3 flex items-center hover:text-[#6837EF]" href="#"><span className="mr-6"><Icon3 /></span><span>  Agent Inbox</span> <span className="ml-auto mr-6"><Chevron /></span></a></li>
                        <li className="w-full"><a className="py-3 flex items-center hover:text-[#6837EF]" href="#"><span className="mr-6"><Icon4 /></span><span>  Help Center</span> <span className="ml-auto mr-6"><Chevron /></span></a></li>
                        <li className="w-full"><a className="py-3 flex text-[#6837EF] flex-col" href="#"><div className="flex items-center"> <span className="mr-6 leading-6 py-2"><Icon5 /></span><span>  Analytics </span><span className="ml-auto mr-6 rotate-90"><Chevron /></span></div>
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
                {/* desktop */}
                <div className="hidden sm:flex flex-col py-3 lg:px-4 bg-white border-r-2 border-gray-200 min-h-[50vh] sm:items-center sm:group-hover:items-start lg:items-start">
                    <div className="border border-gray-200 rounded-lg m-4 items-center px-10 py-3 sm:hidden  sm:translate-x-[-100vw] sm:group-hover:translate-x-0 transition-[transform] ease-in-out duration-200 sm:group-hover:flex lg:flex lg:translate-x-0">
                        
<div className="flex flex-col text-left px-1">
                            <p className="text-black font-bold m-0">Metacare</p>
                            <p className="text-gray-600 m-0">adeyinka@metacare.app</p>
                        </div>
                       
                    </div>
                    <ul className="flex flex-col w-full list-none text-gray-600 items-start text-left sm:pl-[25px] sm:group-hover:pl-4 lg:pl-4 text-base font-gelion sm:pt-[84px] sm:group-hover:pt-0 sm:group-hover:pb-0 sm:pb-[10rem] lg:pt-0 ">
                        <li className="w-full sm:h-[52px]"><a className="py-3 flex items-center hover:text-[#6837EF]" href="#"><span className="mr-6"><Icon1 /></span><span className="sm:translate-x-[-100vw] sm:group-hover:translate-x-0 transition-[transform] ease-in-out duration-200 flex lg:flex lg:translate-x-0"> Admin</span> <span className="ml-auto mr-6 sm:translate-x-[-100vw] sm:group-hover:translate-x-0 transition-[transform] ease-in-out duration-200 lg:flex lg:translate-x-0"><Chevron /></span></a></li>
                        <li className="w-full sm:h-[52px]"><a className="py-3 flex items-center hover:text-[#6837EF]" href="#"><span className="mr-6"><Icon2 /></span><span className="sm:translate-x-[-100vw] sm:group-hover:translate-x-0 transition-[transform] ease-in-out duration-200 flex lg:flex lg:translate-x-0"> Knowledge Base</span> <span className="sm:translate-x-[-100vw] sm:group-hover:translate-x-0 transition-[transform] ease-in-out duration-200 lg:flex lg:translate-x-0 ml-auto mr-6"><Chevron /></span></a></li>
                        <li className="w-full sm:h-[52px]"><a className="py-3 flex items-center hover:text-[#6837EF]" href="#"><span className="mr-6"><Icon2 /></span><span className="sm:translate-x-[-100vw] sm:group-hover:translate-x-0 transition-[transform] ease-in-out duration-200 flex lg:flex lg:translate-x-0">  Train SAM</span> <span className="sm:translate-x-[-100vw] sm:group-hover:translate-x-0 transition-[transform] ease-in-out duration-200 lg:flex lg:translate-x-0 ml-auto mr-6"><Chevron /></span></a></li>
                        <li className="w-full sm:h-[52px]"><a className="py-3 flex items-center hover:text-[#6837EF]" href="#"><span className="mr-6"><Icon3 /></span><span className="sm:translate-x-[-100vw] sm:group-hover:translate-x-0 transition-[transform] ease-in-out duration-200 flex lg:flex lg:translate-x-0">  Agent Inbox</span> <span className="sm:translate-x-[-100vw] sm:group-hover:translate-x-0 transition-[transform] ease-in-out duration-200 lg:flex lg:translate-x-0 ml-auto mr-6"><Chevron /></span></a></li>
                        <li className="w-full sm:h-[52px]"><a className="py-3 flex items-center hover:text-[#6837EF]" href="#"><span className="mr-6"><Icon4 /></span><span className="sm:translate-x-[-100vw] sm:group-hover:translate-x-0 transition-[transform] ease-in-out duration-200 flex lg:flex lg:translate-x-0">  Help Center</span> <span className="sm:translate-x-[-100vw] sm:group-hover:translate-x-0 transition-[transform] ease-in-out duration-200 lg:flex lg:translate-x-0 ml-auto mr-6"><Chevron /></span></a></li>
                        <li className="w-full sm:h-[52px]"><a className="py-3 flex text-[#6837EF] flex-col" href="#"><div className="flex items-center"> <span className="mr-6 leading-6 py-2"><Icon5 /></span><span className="sm:translate-x-[-100vw] sm:group-hover:translate-x-0 transition-[transform] ease-in-out duration-200 flex lg:flex lg:translate-x-0">  Analytics </span><span className="sm:translate-x-[-100vw] sm:group-hover:translate-x-0 transition-[transform] ease-in-out duration-200 lg:flex lg:translate-x-0 ml-auto mr-6 rotate-90"><Chevron /></span></div>
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