import React from 'react'

const Header = () => {
  return (
    <div className='flex items-center justify-between px-[4rem] py-[1rem] '>
        <div className='text-[#204e51] font-bold text-[28px] '>Agrolux</div>
        <div className='flex'>
            <ul className='flex items-center gap-[7rem] pr-[6rem]'>
                <li className='cursor-pointer '>Home</li>
                <li className='cursor-pointer '>About Us</li>
                <li className='cursor-pointer '>Pricing</li>
            </ul>
            <div className='flex items-center gap-[4rem]'>
            <button className='bg-[#204E51] h-[45px] w-[110px] rounded-[10px] text-[#ffff]'>Login</button>
            <button className='rounded-[10px] border-[#204E51] border h-[45px] w-[110px]'>Register</button>

            </div>
           
        </div>
    </div>
  )
}

export default Header