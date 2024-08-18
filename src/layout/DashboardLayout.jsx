import React from 'react';
import Sidebar from '../components/Sidebar';
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../AuthContext";
import Topbar from '../components/Topbar';

const DashboardLayout = ({ children }) => {
  const navigate = useNavigate();  // Corrected from `history` to `navigate`
  const { logout } = useAuth();

  const handleLogout = async () => {
    logout();
    navigate("/");  // Redirect after logout
  };

  return (
    <div className="flex bg-grey w-full h-screen">
      <div className="hidden md:block overflow-hidden">
        <Sidebar handleLogout={handleLogout} />
      </div>
      <div className="flex-1 flex flex-col overflow-x-scroll">
        <Topbar handleLogout={handleLogout} />
        <div className="w-full h-full flex-1 flex-grow bg-[#F9FAFB]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
