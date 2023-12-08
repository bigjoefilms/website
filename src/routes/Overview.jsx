import React from "react";
import DashboardLayout from "../layout/DashboardLayout";

export const Overview = () => {
  return (
    <DashboardLayout>
      <div className="p-[30px] overflow-scroll">
        <h1 className="text-[28px] font-medium text-[#204e51]">
          Your crops Progress
        </h1>
        <div className="flex gap-7  justify-between max-[1126px]:grid max-[1126px]:grid max-[1126px]:grid-rows-2 max-[1126px]:grid-flow-col max-[500px]:grid-rows-4 w-full">
          <div className=" bg-[#F7FFDD] h-[150px] w-full  rounded-[20px] p-[25px] mt-[25px] ">
            <p className="font-medium text-[20px]">Rice</p>
            <p className=" text-[20px] mt-[10px]">Benue State</p>
            <p className="mt-[20px]">33% Growth</p>
          </div>
          <div className=" bg-[#204E51] h-[150px] w-full  rounded-[20px] p-[25px] mt-[25px] text-[#F7FFDD]">
            <p className="font-medium text-[20px]">Corn</p>
            <p className=" text-[20px] mt-[10px]">Benue State</p>
            <p className="mt-[20px]">18% Growth</p>
          </div>
          <div className=" bg-[#F7FFDD] h-[150px] w-full  rounded-[20px] p-[25px] mt-[25px]">
            <p className="font-medium text-[20px]">Chickpeas</p>
            <p className=" text-[20px] mt-[10px]">Benue State</p>
            <p className="mt-[20px]">90% Growth</p>
          </div>
          <div className=" border-dotted  h-[150px] border-[4px] border-[#204e51] cursor-pointer w-full  rounded-[20px] p-[25px] mt-[25px] flex flex-col items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="80"
              viewBox="0 0 80 80"
              fill="none"
            >
              <path
                d="M40 56.6667V23.3334"
                stroke="#204E51"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M23.3335 40H56.6668"
                stroke="#204E51"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
            <div className="text-[20px] mt-[10px]">Plant a Crop</div>
          </div>
        </div>
        <div className="flex gap-[60px] max-lg:flex-col ">
        <div className="bg-[#F7FFDD] h-[400px] w-[100%] max-w-[700px] mt-[50px] rounded-[20px] p-[25px]">
          <h1 className="text-[#204e51] font-bold text-[20px] ">
            Your Daily tasks
          </h1>
          <div>
            <p className="font-normal text-[21px] text-[#204e51] mt-[10px]">
              Rice
            </p>
            <div className="flex item-center gap-3 mt-[10px]">
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="29"
                  height="29"
                  rx="4.5"
                  fill="#F0F0F0"
                  stroke="#204E51"
                />
              </svg>

              <p className="font-thin  text-[15px]">
                Weed Control: Check for weeds and remove them
              </p>
            </div>
            <div className="flex item-center gap-3 mt-[10px]">
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="29"
                  height="29"
                  rx="4.5"
                  fill="#F0F0F0"
                  stroke="#204E51"
                />
              </svg>

              <p className="font-thin  text-[15px]">
                Water level: Check to make sure the water level is okay
              </p>
            </div>
            <div>
              <p className="font-normal text-[21px] text-[#204e51] mt-[10px]">
                Corn
              </p>
              <div className="flex item-center gap-3 mt-[10px]">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="29"
                    height="29"
                    rx="4.5"
                    fill="#F0F0F0"
                    stroke="#204E51"
                  />
                </svg>

                <p className="font-thin  text-[15px]">
                  Weed Control: Check for weed sand remove them
                </p>
              </div>
              <div className="flex item-center gap-3 mt-[10px]"></div>
            </div>
            <div>
              <p className="font-normal text-[21px] text-[#204e51] mt-[10px]">
                Chickpeas
              </p>
              <div className="flex item-center gap-3 mt-[10px]">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="29"
                    height="29"
                    rx="4.5"
                    fill="#F0F0F0"
                    stroke="#204E51"
                  />
                </svg>

                <p className="font-thin  text-[15px]">
                  Weed Control: Check for weeds and remove them
                </p>
              </div>
              <div className="flex item-center gap-3 mt-[10px]"></div>
            </div>
          </div>
        </div>
        <div className="bg-[#F7FFDD] h-[400px] w-[100%] max-w-[250px] mt-[50px] rounded-[20px] p-[25px]  ">
            <h1 className="text-[#204e51] font-bold text-[20px]">Temperature/<br/>Humidity</h1>
            <div className="relative">
            <svg className="absolute right-0 top-5 cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.6629 11.2121C21.029 11.5782 21.029 12.1718 20.6629 12.5379L15.6629 17.5379C15.2967 17.904 14.7032 17.904 14.3371 17.5379L9.33708 12.5379C8.97097 12.1718 8.97097 11.5782 9.33708 11.2121C9.7032 10.846 10.2968 10.846 10.6629 11.2121L15 15.5491L19.3371 11.2121C19.7032 10.846 20.2967 10.846 20.6629 11.2121Z" fill="#204E51"/>
</svg>
<input type='search' placeholder="Location" className='h-[50px] w-full max-w-[400px] border-b-[2px] mt-[8px] p-[20px] border-[#204e51]'/>


            </div>
            <div className="bg-[#204e51] px-[15px] rounded-[20px] py-[10px] items-center justify-center cursor-pointer flex text-[#ffff] mt-[20px] ">Get data</div>
            <div className="border-[#204e51] border px-[15px] rounded-[20px] py-[10px] items-center justify-center cursor-pointer flex text-[#204e51] gap-3 mt-[20px]">T : <p>37°C</p></div>
            <div className="border-[#204e51] border px-[15px] rounded-[20px] py-[10px] items-center justify-center cursor-pointer flex text-[#204e51] gap-3 mt-[20px]">H : <p>37°C</p></div>


        </div>

        </div>
       
        <div className="bg-[#F7FFDD] h-[60px] mt-[20px] w-[100%] max-w-[400px] rounded-[20px] p-[35px] flex items-center gap-7 ">
          <div className="flex items-center gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
            >
              <path
                d="M15 1.5625C15.5178 1.5625 15.9375 1.98224 15.9375 2.5V3.75C15.9375 4.26776 15.5178 4.6875 15 4.6875C14.4822 4.6875 14.0625 4.26776 14.0625 3.75V2.5C14.0625 1.98224 14.4822 1.5625 15 1.5625Z"
                fill="#FFC700"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.8125 15C7.8125 11.0304 11.0304 7.8125 15 7.8125C18.9695 7.8125 22.1875 11.0304 22.1875 15C22.1875 18.9695 18.9695 22.1875 15 22.1875C11.0304 22.1875 7.8125 18.9695 7.8125 15ZM15 9.6875C12.066 9.6875 9.6875 12.066 9.6875 15C9.6875 17.934 12.066 20.3125 15 20.3125C17.934 20.3125 20.3125 17.934 20.3125 15C20.3125 12.066 17.934 9.6875 15 9.6875Z"
                fill="#FFC700"
              />
              <path
                d="M6.82405 5.49822C6.45793 5.1321 5.86434 5.1321 5.49823 5.49822C5.1321 5.86434 5.1321 6.45793 5.49823 6.82405L6.3821 7.70793C6.74823 8.07405 7.34181 8.07405 7.70793 7.70793C8.07405 7.34182 8.07405 6.74822 7.70793 6.3821L6.82405 5.49822Z"
                fill="#FFC700"
              />
              <path
                d="M28.4375 15C28.4375 15.5178 28.0178 15.9375 27.5 15.9375H26.25C25.7322 15.9375 25.3125 15.5178 25.3125 15C25.3125 14.4822 25.7322 14.0625 26.25 14.0625H27.5C28.0178 14.0625 28.4375 14.4822 28.4375 15Z"
                fill="#FFC700"
              />
              <path
                d="M24.5019 6.82405C24.868 6.45793 24.868 5.86434 24.5019 5.49823C24.1358 5.1321 23.5422 5.1321 23.176 5.49823L22.2922 6.3821C21.926 6.74823 21.926 7.34181 22.2922 7.70793C22.6583 8.07405 23.2519 8.07405 23.618 7.70793L24.5019 6.82405Z"
                fill="#FFC700"
              />
              <path
                d="M15 25.3125C15.5178 25.3125 15.9375 25.7322 15.9375 26.25V27.5C15.9375 28.0178 15.5178 28.4375 15 28.4375C14.4822 28.4375 14.0625 28.0178 14.0625 27.5V26.25C14.0625 25.7322 14.4822 25.3125 15 25.3125Z"
                fill="#FFC700"
              />
              <path
                d="M23.6179 22.2919C23.2518 21.9258 22.6583 21.9258 22.2922 22.2919C21.926 22.6581 21.926 23.2517 22.2922 23.6178L23.176 24.5017C23.5422 24.8678 24.1357 24.8678 24.5018 24.5017C24.8679 24.1356 24.8679 23.5419 24.5018 23.1758L23.6179 22.2919Z"
                fill="#FFC700"
              />
              <path
                d="M4.6875 15C4.6875 15.5178 4.26776 15.9375 3.75 15.9375H2.5C1.98224 15.9375 1.5625 15.5178 1.5625 15C1.5625 14.4822 1.98224 14.0625 2.5 14.0625H3.75C4.26776 14.0625 4.6875 14.4822 4.6875 15Z"
                fill="#FFC700"
              />
              <path
                d="M7.70793 23.6178C8.07404 23.2517 8.07404 22.6581 7.70793 22.2919C7.3418 21.9258 6.74822 21.9258 6.3821 22.2919L5.49822 23.1758C5.1321 23.5419 5.1321 24.1356 5.49822 24.5017C5.86433 24.8678 6.45793 24.8678 6.82404 24.5017L7.70793 23.6178Z"
                fill="#FFC700"
              />
            </svg>
            <p>32°C</p>
          </div>
          <div className="flex items-center gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M6.70005 7.36797C5.20005 7.36797 3.70005 6.96797 2.40005 5.86797C2.00005 5.46797 1.90005 4.86797 2.30005 4.46797C2.70005 4.06797 3.30005 3.96797 3.70005 4.36797C6.00005 6.26797 8.60005 5.36797 11.6001 4.26797C14.7001 3.16797 18.3001 1.96797 21.6001 4.26797C22.1001 4.56797 22.2001 5.16797 21.8001 5.66797C21.5001 6.16797 20.9001 6.26797 20.4001 5.86797C17.9001 4.16797 15.1001 5.06797 12.2001 6.06797C10.4001 6.76797 8.50005 7.36797 6.70005 7.36797Z"
                fill="#204E51"
              />
              <path
                d="M6.70005 15.168C5.20005 15.168 3.80005 14.768 2.40005 13.668C2.00005 13.268 1.90005 12.668 2.30005 12.268C2.70005 11.868 3.30005 11.768 3.70005 12.168C6.00005 14.068 8.60005 13.168 11.6001 12.068C14.7001 10.968 18.3001 9.76803 21.6001 12.068C22.1001 12.368 22.2001 12.968 21.8001 13.468C21.5001 13.968 20.9001 14.068 20.4001 13.668C18.0001 11.968 15.2001 12.968 12.2001 13.968C10.4001 14.568 8.50005 15.168 6.70005 15.168Z"
                fill="#204E51"
              />
              <path
                d="M6.70005 22.9679C5.20005 22.9679 3.80005 22.5679 2.40005 21.4679C2.00005 21.0679 1.90005 20.4679 2.30005 20.0679C2.70005 19.6679 3.30005 19.5679 3.70005 19.9679C6.00005 21.8679 8.60005 20.9679 11.6001 19.8679C14.7001 18.7679 18.3001 17.5679 21.6001 19.8679C22.1001 20.1679 22.2001 20.7679 21.8001 21.2679C21.5001 21.7679 20.9001 21.8679 20.4001 21.4679C17.9001 19.7679 15.1001 20.6679 12.2001 21.6679C10.4001 22.2679 8.50005 22.9679 6.70005 22.9679Z"
                fill="#204E51"
              />
            </svg>
            <p>13 km/h</p>
          </div>
          <div className="cursor-pointer">see more</div>
        </div>
      </div>
    </DashboardLayout>
  );
};
