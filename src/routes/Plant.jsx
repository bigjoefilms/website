import React from "react";
import Dasboard from "./Dasboard";
import DashboardLayout from "../layout/DashboardLayout";
import Topbar from "../components/Topbar";

export const Plant = () => {
  return (
    <DashboardLayout>
        <Topbar/>
      <div className="p-[30px] overflow-scroll ">
        <div className="flex justify-between ]">
          <h1 className="text-[28px] font-medium text-[#204e51]">
            Plant a crop
          </h1>

          <div className="border h-[40px] w-[90px] text-[18px] flex items-center justify-center rounded-[15px]">
            John
          </div>
        </div>
        <div className="pt-[50px]">
          <div className="flex justify-between items-center max-[800px]:flex-col max-[1000px]:items-start max-[1000px]:gap-[20px] ">
            <input
              type="search"
              placeholder="Crop"
              className="h-[50px] w-full max-w-[400px] border-b-[2px] mt-[8px] p-[20px] border-[#204e51]"
            />
            <input
              type="search"
              placeholder="Location"
              className="h-[50px] w-full max-w-[400px] border-b-[2px] mt-[8px] p-[20px] border-[#204e51]"
            />
          </div>
          <div className="text-[30px] text-[#204e51] flex justify-between items-center pt-[50px] font-medium max-[1000px]:items-start max-[1000px]:flex-col">
            <h1>Temperature :</h1>
            <h1>Humidity :</h1>
          </div>
          <div className="text-[30px] text-[#204e51] flex justify-between  pt-[80px] font-medium max-[1000px]:items-start max-[1000px]:flex-col ">
            <h1>Harvest Season :</h1>

            <div className="bg-[#F7FFDD] h-auto  w-[100%] max-w-[400px] rounded-[20px] p-[35px] flex-col flex text-[25px] mt-[20px]">
              Suggested Crops
              <div className="flex items-center gap-5 mt-[20px]">
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="29" height="29" rx="4.5" fill="#F0F0F0" stroke="#204E51"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M21.0303 10.9697C21.3232 11.2626 21.3232 11.7374 21.0303 12.0303L14.0303 19.0303C13.7374 19.3232 13.2626 19.3232 12.9697 19.0303L8.96967 15.0303C8.67678 14.7374 8.67678 14.2626 8.96967 13.9697C9.26256 13.6768 9.73744 13.6768 10.0303 13.9697L13.5 17.4393L19.9697 10.9697C20.2626 10.6768 20.7374 10.6768 21.0303 10.9697Z" fill="black"/>
</svg>

                <p className="text-[#204e51] text-[20px] font-light ">Rice</p>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center mt-[3rem] max-[850px]:flex-col max-[1000px]:w-[100%] max-[1000px]:items-start  ">

         
          <div className="bg-[#204e51] w-[100%] max-w-[230px] rounded-[20px] py-[10px] h-[50px] items-center justify-center cursor-pointer flex text-[#ffff] mt-[30px] ">Get harvest Season</div>
          <div className="bg-[#204e51] w-[100%] max-w-[230px] rounded-[20px] py-[10px] h-[50px] items-center justify-center cursor-pointer flex text-[#ffff] mt-[30px] ">Plant a Crop</div>
          <div className="bg-[#204e51] w-[100%] max-w-[230px] rounded-[20px] py-[10px] h-[50px] items-center justify-center cursor-pointer flex text-[#ffff] mt-[30px] ">Suggested Crops</div>
          </div>

        </div>
      </div>
    </DashboardLayout>
  );
};
