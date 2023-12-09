import React from 'react'
import Topbar from '../components/Topbar'
import Sidebar from '../components/Sidebar'


const DashboardLayout = ({children}) => {
  return (
    <div className="flex bg-grey  w-full h-screen">
      <div className=" hidden md:block overflow-hidden">
        <Sidebar/>
      </div>
      <div className="flex-1 flex flex-col overflow-x-scroll ">
    
        <div className="w-full h-full flex-1 flex-grow  bg-[#F9FAFB]">
          {children}
        </div>
      </div>
    </div>
   
  )
}

export default DashboardLayout