import React from "react"
import SideMenu from "./components/SideMenu"
import Header from "./components/Header";
import { ReactComponent as SearchIcon } from "./icons/search.svg"
import './App.css';



const App = () => {
  return (
    <div className="App flex">
      <SideMenu />
<div className="w-full lg:pl-[20rem] sm:pl-[5rem]">
  <Header />
  <div className="flex pl-3 pt-8 justify-between">
    <h1 className="font-bold font-gelion-semiB text-2xl">Efficiency Analytics</h1>
    <div className="flex mr-12 items-center">
      <div className="relative h-fit">
              <span className="absolute top-1/2 translate-x-[-50%] translate-y-[-50%] left-0 ml-4"><SearchIcon /></span>
              <div className="border border-gray-200 rounded-lg px-10">
              <input className="py-3 md:max-w-[350px] focus:outline-none" placeholder="Search" type="search" name="search" />
          </div>
           </div>
            <div className="border border-gray-200 rounded-lg ml-3 px-3">
            <select className="py-3" name="options" >
              <option value="">Filter Options</option>
              <option value="saab">Saab</option>
              <option value="fiat">Fiat</option>
              <option value="audi">Audi</option>
              </select>
              </div>
              <hr className="rotate-90 w-8"/>
            <button className="bg-[#25BB87] rounded-lg text-white px-3 py-2 w-24">Export</button>
    </div>
  </div>
</div>
    </div>
  );
}

export default App;
