import React from 'react'

const DashboardLayout = ({children}) => {
  return (
    <div className="w-full h-full flex-1 flex-grow overflow-hidden bg-[#F9FAFB]">
          {children}
        </div>
  )
}

export default DashboardLayout