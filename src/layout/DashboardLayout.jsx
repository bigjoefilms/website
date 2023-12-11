import React from 'react'
import Sidebar from '../components/Sidebar'
import { useNavigate } from 'react-router-dom'
import { useAuth } from "../AuthContext";


const DashboardLayout = ({children}) => {
  const history = useNavigate();
  const { logout } = useAuth();
  const JWT_SECRET = 'fuegfyefgwrgty9t3ur9giht4toyogytt674'

  const handleLogout = async () => {
   logout()
   history("/")
  };

  
  return (
    <div className="flex bg-grey  w-full h-screen">
      <div className=" hidden md:block overflow-hidden">
        <Sidebar handleLogout={handleLogout}/>
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