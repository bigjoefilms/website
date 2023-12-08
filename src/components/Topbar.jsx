import React from 'react'

const Topbar = () => {
  return (
    <div className=" flex relative h-[81px]  text-black">
      <div className=" mx-2 my-1  flex z-10 justify-between w-full items-center px-[20px]">
        <h1 className='text-[#204e51] text-[20px] font-semibold'>Overview</h1>
        <div className='relative'>
        <input type='search' className='h-[50px] w-full max-w-[400px] border-b-[2px] p-[20px] border-[#204e51]'/>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none" className='absolute top-3'>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.9813 19.3071C14.6684 21.9605 9.81913 21.7516 6.74814 18.6806C3.45309 15.3856 3.45309 10.0433 6.74814 6.74827C10.0432 3.45322 15.3855 3.45322 18.6805 6.74827C21.7515 9.81924 21.9604 14.6685 19.307 17.9814L25.7517 24.4259C26.1178 24.792 26.1178 25.3856 25.7517 25.7518C25.3855 26.1179 24.7919 26.1179 24.4258 25.7518L17.9813 19.3071ZM8.07397 17.3549C5.51116 14.792 5.51116 10.6369 8.07397 8.07409C10.6368 5.51128 14.7919 5.51128 17.3548 8.07409C19.9157 10.635 19.9175 14.7859 17.3604 17.3493C17.3585 17.3511 17.3567 17.3529 17.3547 17.3549C17.3528 17.3568 17.3509 17.3586 17.3492 17.3605C14.7858 19.9176 10.6349 19.9158 8.07397 17.3549Z" fill="#204E51"/>
</svg>
        </div>
       
        <div className='border h-[40px] w-[90px] text-[18px] flex items-center justify-center rounded-[15px]'>John</div>
      </div>
      </div>
  )
}

export default Topbar