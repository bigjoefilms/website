import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header w-[100vh]'>
      <div className='flex items-center justify-between px-[4rem] py-[1rem]' >
        <div className='text-[#204e51] font-bold text-[28px]'>Agrolux</div>

        <div className='flex max-[780px]:hidden items-center '>
           
          <ul className='flex items-center gap-[7rem] pr-[4rem] md:max-lg:gap-[3rem] md:max-lg:pr-[3rem]'>
            <li className='cursor-pointer'>Home</li>
            <li className='cursor-pointer'>About Us</li>
            <li className='cursor-pointer'>Pricing</li>
          </ul>
          <div className='flex items-center gap-[4rem] md:max-lg:gap-[1rem]'>
            <Link to="/login">
              <button className='bg-[#204E51] h-[45px] px-[25px] rounded-[10px] text-[#ffff]'>Login</button>
            </Link>
            <Link to="/signup">
              <button className='rounded-[10px] border-[#204E51] border h-[45px] px-[25px]'>Register</button>
            </Link>

           
          </div>
          
        </div>

        <div className='min-[780px]:hidden flex cursor-pointer  '>
            <svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 24 24" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M19.75 12C19.75 11.5858 19.4142 11.25 19 11.25H5C4.58579 11.25 4.25 11.5858 4.25 12C4.25 12.4142 4.58579 12.75 5 12.75H19C19.4142 12.75 19.75 12.4142 19.75 12Z" fill="#204E51"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M19.75 7C19.75 6.58579 19.4142 6.25 19 6.25H5C4.58579 6.25 4.25 6.58579 4.25 7C4.25 7.41421 4.58579 7.75 5 7.75H19C19.4142 7.75 19.75 7.41421 19.75 7Z" fill="#204E51"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M19.75 17C19.75 16.5858 19.4142 16.25 19 16.25H5C4.58579 16.25 4.25 16.5858 4.25 17C4.25 17.4142 4.58579 17.75 5 17.75H19C19.4142 17.75 19.75 17.4142 19.75 17Z" fill="#204E51"/>
</svg>
            </div>
       
      </div>
    </div>
  );
};

export default Header;
