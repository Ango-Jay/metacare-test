import React from "react"
import SideMenu from "./components/SideMenu"
import Header from "./components/Header";
import ResponseChart from "./components/ResponseChart";
import RepliesChart from "./components/RepliesChart";
import ResolutionChart from "./components/ResolutionChart";
import RateChart from "./components/RateChart";
import { ReactComponent as SearchIcon } from "./icons/search.svg"
import './App.css';




const App = () => {
  return (
    <div className="App flex flex-col sm:flex-row">
      <SideMenu />
      <div className="w-full lg:pl-[20rem] sm:pl-[5rem]">
        <Header />
        <div className="flex flex-col xl:flex-row px-3 sm:pr-0 sm:pl-3 pt-8 justify-between">
          <h1 className="font-bold font-gelion-semiB mb-4 xl:mb-0 text-2xl">Efficiency Analytics</h1>
          <div className="flex flex-wrap justify-center sm:justify-start sm:flex-nowrap sm:mr-12 items-center">
            <div className="relative h-fit w-full sm:w-auto">
              <span className="absolute top-1/2 translate-x-[-50%] translate-y-[-50%] left-0 ml-4"><SearchIcon /></span>
              <div className="border border-gray-200 rounded-lg px-10">
                <input className="py-3 w-full sm:w-auto md:max-w-[350px] focus:outline-none" placeholder="Search" type="search" name="search" />
              </div>
            </div>
            <div className="flex items-center mt-6 sm:mt-0">
              <div className="border border-gray-200 rounded-lg ml-3 px-3">
                <select className="py-3 bg-white" name="options" >
                  <option value="">Filter Options</option>
                  <option value="option1">option1</option>
                  <option value="option2">option2</option>
                  <option value="option3">option3</option>
                </select>
              </div>
              <hr className="rotate-90 w-8" />
              <button className="bg-[#25BB87] rounded-lg text-white px-3 py-2 w-24">Export</button>
            </div>
          </div>
        </div>
        <ResponseChart />
        <RepliesChart />
        <ResolutionChart />
        <RateChart />
      </div>
    </div>
  );
}

export default App;
