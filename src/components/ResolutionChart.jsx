import React from "react"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import faker from 'faker';


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);



const ResolutionChart = (props)=>{
    const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug'];
    return(
        <>
            <div className="flex flex-col sm:flex-row justify-between border border-gray-200 rounded-lg p-3 w-[95%] overflow-x-auto mx-3 my-6">
                <div className="flex flex-col sm:border-r border-gray-200 mr-3 p-3 shrink sm:basis-4/5">
                    <div className="flex flex-col xl:flex-row justify-between w-full">
                  <div className="flex items-center">
                        <h2 className="font-bold text-left text-xl">Average resolution time</h2>
                            <div className="flex items-center justify-center ml-3 mr-3  w-16 h-8  text-sm text-[#25BB87] bg-[#25BB87]/10">+4.14%</div>
                  </div>
                        <div className="flex items-center whitespace-nowrap">
                        <h4 className="text-sm font-bold"><span className="w-[10px] h-[10px] px-1 bg-[#FB6491] inline-block mr-2"></span>High Priority</h4>
                        <hr className="rotate-90 w-8" />
                        <div className="flex items-center justify-between p-2 border border-gray-200 rounded-lg mx-2 text-sm font-bold">
                            <h4 className="flex mr-6">This Month</h4>
                            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M11.3335 1.66653V0.999919C11.3335 0.631729 11.632 0.333252 12.0001 0.333252C12.3683 0.333252 12.6668 0.631729 12.6668 0.999919V1.66653H13.3334C14.438 1.66653 15.3334 2.56196 15.3334 3.66653V5.66653V6.99986V10.3332C15.3334 12.5423 13.5426 14.3332 11.3334 14.3332H4.66675C2.45761 14.3332 0.666748 12.5423 0.666748 10.3332V6.99986V5.66653V3.66653C0.666748 2.56196 1.56218 1.66653 2.66675 1.66653H4.00002V0.999919C4.00002 0.631729 4.2985 0.333252 4.66669 0.333252C5.03488 0.333252 5.33336 0.631729 5.33336 0.999919V1.66653H11.3335ZM2.00002 6.99986V10.3331C2.00002 11.8059 3.19393 12.9998 4.66669 12.9998H11.3334C12.8061 12.9998 14 11.8059 14 10.3331V6.99986H2.00002ZM2.66669 2.9998H4.00002V2.99992C4.00002 3.36811 4.2985 3.66659 4.66669 3.66659C5.03488 3.66659 5.33336 3.36811 5.33336 2.99992V2.9998H11.3335V2.99992C11.3335 3.36811 11.632 3.66659 12.0001 3.66659C12.3683 3.66659 12.6668 3.36811 12.6668 2.99992V2.9998H13.3334C13.7015 2.9998 14 3.29828 14 3.66647V5.66647H2.00002V3.66647C2.00002 3.29828 2.2985 2.9998 2.66669 2.9998Z" fill="#000" />
                            </svg>
                        </div>
                  </div>
                  
           </div>
     
                    <div className="relative w-full shrink lg:mx-auto lg:flex"
    >   <Line
                options={
                    {
                        scales: {
                            x: {
                                grid: {
                                   display: false
                                }
                            }
                            ,y: {
                                grid: {
                                    display: true
                                }
                            }
                        }
                    ,responsive: true,
                    plugins:{
                        legend:{
                            display:false
                        }
                    }
    }}
                data={{
                    labels,
                    datasets: [
                        {
                
                            data: labels.map(() => faker.datatype.number({ min: 0, max: 50 })),
                            borderColor: '#FB6491',
                            backgroundColor: '#fff',
                            pointRadius:7
                        }
                    ]
                }}
                {...props}
            />
            </div>
            </div>
                <div className="flex flex-row justify-center xs:justify-start sm:flex-col sm:basis-1/5 w-full sm:w-auto shrink-0 mr-0 sm:mr-6">
                    <div className="flex flex-col sm:w-full py-3 sm:py-6 pr-3 sm:pr-6 pl-3 bg-gray-200 border border-gray-200 rounded-lg sm:mb-3 sm:mr-auto mr-3">
                        <p className="text-xs text-gray-500">Average Response Time</p>
                        <p className="text-xl font-bold">30 Mins</p>
                    </div>
                    <div className="flex flex-col sm:w-full py-3 sm:py-6 pr-3 sm:pr-6 pl-3 bg-gray-200 border border-gray-200 rounded-lg">
                        <p className="text-xs text-gray-500">Response Time</p>
                        <p className="text-xl font-bold">1 Hour 30 Mins</p>
                    </div>
                </div>
            </div>
        </>
    )
}


export default ResolutionChart;

