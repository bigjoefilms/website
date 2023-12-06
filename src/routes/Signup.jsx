import React from 'react'
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div className='flex items-center justify-center bg-[#204E51] h-[100vh] '>
          <div className='h-[70%] bg-white w-[35%] rounded-[20px] px-[55px] py-[38px]'>
            <div>
           < h1 className='text-[70px] text-[#204e51] font-semibold'>Login</h1>
            <p className=' font-light text-[15px] ml-[10px]'>Hello Welcome </p>
            </div>
            <div className='flex flex-col mt-[43px] gap-4'>
            <input type='text' placeholder='Full Name' className='border border-black rounded-[20px] h-[60px] w-full px-[25px] text-[20px] text-black'/>
                <input type='email' placeholder='Email' className='border border-black rounded-[20px] h-[60px] w-full px-[25px] text-[20px] text-black'/>
                <input type='password' placeholder='Password' className='border border-black rounded-[20px] h-[60px] w-full px-[25px] text-[20px] text-black'/>
            </div>
            <div className='flex items-center justify-between font-light mt-[30px]'>
                <p className='flex gap-[8px] items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect x="0.5" y="0.5" width="19" height="19" stroke="#204E51"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M16.8225 6.02069L7.98362 14.8596L3.17847 10.0544L4.06235 9.17049L7.98362 13.0917L15.9385 5.13681L16.8225 6.02069Z" fill="#204E51"/>
    </svg>
                    Show Password</p>
                
            </div>
            <div className='w-full h-[60px] rounded-[20px] text-[white] bg-[#204e51] text-[20px] flex items-center justify-center my-[15px] cursor-pointer'>
                Signup
            </div>
            <p className='text-[15px] font-light'> Have an account? <Link to='/login' ><span className='text-[#204e51] '> Login</span>  </Link></p>
          </div>
        </div>
      );
    };
    

export default Signup