import React, { useState } from 'react'
import SideBar from '../components/SideBar'
import TopBar from '../components/TopBar'

const LinkedIn = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className="flex flex-col lg:flex-row h-screen">
      <SideBar isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
      <div className={`flex-1 bg-slate-200 p-2 md:p-4 lg:py-6 lg:px-6 overflow-y-auto transition-all duration-300 ${
          isExpanded ? "ml-[350px]" : "ml-[100px]"
        }`}>
           <div className="mb-6 md:mb-8">
          <div className="text-sm text-gray-500 font-semibold mt-4 md:mt-5">
            Hello Dhairya,
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
              <div className="text-xl sm:text-2xl md:text-3xl font-semibold">
                Welcome to
              </div>
              <div className="text-xl sm:text-2xl md:text-3xl font-semibold bg-gradient-to-br from-[#787ef1] to-[#3710e7] bg-clip-text text-transparent">
                SalahKart
              </div>
              <div className="text-base sm:text-xl md:text-2xl mt-1 sm:mt-0 font-medium">
                - Job Finding Made Easy!
              </div>
            </div>
            <TopBar />
          </div>
        </div>
        </div>
    </div>
  )
}

export default LinkedIn