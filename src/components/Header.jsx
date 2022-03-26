import React from "react"
import { ReactComponent as SearchIcon } from "../icons/search.svg"

const Header = () => {
    return (
        <>
            <div>
                <div className="flex pt-6 pl-3 justify-between">
                    <div className="relative h-fit">
                        <span className="absolute top-1/2 translate-x-[-50%] translate-y-[-50%] right-0"><SearchIcon /></span>

                        <input className="bg-gray-200 rounded-lg py-3 px-3 md:w-[441px] focus:outline-none" placeholder="Ask us any question" type="search" name="name" />
                    </div>
                    <div className="border border-gray-200 rounded-lg mr-16">
<UserNotifications />
                </div>
                </div>
                <div className="flex border-y border-gray-200 py-2 pl-3 mt-6">
<ul className="flex list-none">
                        <li className="text-black font-bold border-b-[3px] border-[#6837EF] pb-1 mb-[-.65rem]"><a href="#">Effiiency</a> </li>
                        <li className="mx-8 text-gray-600"><a href="#">Volume</a></li>
                        <li className="text-gray-600"><a href="#">Customer Satisfation</a></li>
                        <li className="mx-8 text-gray-600"><a href="#">Backlog</a></li>
</ul>
                </div>
            </div>
        </>
    )
}

export default Header;



const UserNotifications = ()=>{
    return(
        <svg width="175" height="54" viewBox="0 0 175 54" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M27.235 21.4807C27.102 20.365 26.1525 19.5 25.001 19.5C23.8495 19.5 22.9 20.365 22.7669 21.4807C20.8899 22.3316 19.5843 24.2217 19.5843 26.4167V30.1799L18.3314 32.662C18.0796 33.1609 18.4422 33.75 19.001 33.75H22.879C23.1879 34.6239 24.0213 35.25 25.001 35.25C25.9806 35.25 26.8141 34.6239 27.1229 33.75H31.001C31.5598 33.75 31.9223 33.1609 31.6705 32.662L30.4176 30.1799V26.4167C30.4176 24.2217 29.112 22.3316 27.235 21.4807ZM28.9981 30.6964L29.7823 32.25H20.2197L21.0039 30.6964C21.0568 30.5916 21.0843 30.4759 21.0843 30.3585V26.4167C21.0843 24.2536 22.8379 22.5 25.001 22.5C27.1641 22.5 28.9176 24.2536 28.9176 26.4167V30.3585C28.9176 30.4759 28.9452 30.5916 28.9981 30.6964Z" fill="#A3A3C2" />
            <rect x="38" y="19" width="16" height="16" rx="4" fill="#F25A68" />
            <path d="M46.8789 26.248C47.5312 26.3184 48.0527 26.5645 48.4434 26.9863C48.8379 27.4043 49.0352 27.9375 49.0352 28.5859C49.0352 29.082 48.9141 29.5234 48.6719 29.9102C48.4336 30.293 48.1016 30.5898 47.6758 30.8008C47.2539 31.0117 46.7754 31.1172 46.2402 31.1172C45.7129 31.1172 45.2383 31.0117 44.8164 30.8008C44.3984 30.5898 44.0723 30.2891 43.8379 29.8984C43.6074 29.5039 43.4961 29.0508 43.5039 28.5391H44.8574C44.8574 28.9453 44.9883 29.2754 45.25 29.5293C45.5117 29.7832 45.8496 29.9102 46.2637 29.9102C46.6699 29.9102 47.0059 29.7871 47.2715 29.541C47.5371 29.291 47.6699 28.9609 47.6699 28.5508C47.6699 28.168 47.5527 27.8652 47.3184 27.6426C47.0879 27.416 46.7773 27.2871 46.3867 27.2559C46.25 27.2402 45.9766 27.2324 45.5664 27.2324H45.1211V26.3066L46.9609 24.4961H43.9609V23.3066H48.666V24.4727L46.8789 26.248Z" fill="white" />
            <rect x="78" y="15" width="1" height="24" fill="#ECEBF5" />
            <path fillRule="evenodd" clipRule="evenodd" d="M119 43C127.837 43 135 35.8366 135 27C135 18.1634 127.837 11 119 11C110.163 11 103 18.1634 103 27C103 35.8366 110.163 43 119 43Z" stroke="#6837EF" />
            <path fillRule="evenodd" clipRule="evenodd" d="M151 28.0572L153.862 25.1953C154.122 24.9349 154.544 24.9349 154.805 25.1953C155.065 25.4556 155.065 25.8777 154.805 26.1381L151.471 29.4714C151.211 29.7318 150.789 29.7318 150.529 29.4714L147.195 26.1381C146.935 25.8777 146.935 25.4556 147.195 25.1953C147.456 24.9349 147.878 24.9349 148.138 25.1953L151 28.0572Z" fill="#696D8C" />
            <rect style={{display:"none"}}  x="5" y="5" width="174" height="53" rx="15" stroke="#ECEBF5" />
        </svg>
    )
}