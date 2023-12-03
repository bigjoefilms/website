import React from 'react'

const Footer = () => {
  return (
    <div class='flex justify-center items-center h-screen'>
    <div class='h-[688px] w-full bg-[#204E51] px-[150px] py-[10rem] flex justify-between'>
        <div className=' text-[white]'>
             <h1 className='text-[35px] font-semibold'>Agrolux</h1>
             <p className='text-[20px] font-thin'>Li Europan lingues es membres del sam <br/>familie. Lor separat existentie </p>
        </div>
        <div className='flex gap-[10rem] mr-[150px]'>
        <div className=' text-[white]'>
             <h1 className='text-[35px] font-semibold'>Pages</h1>
             <p className='cursor-pointer font-thin mt-[15px] '>Home</p>
             <p className='cursor-pointer font-thin mt-[15px] ' >About</p>
             <p className='cursor-pointer font-thin mt-[15px] '>Product</p>
             <p className='cursor-pointer font-thin mt-[15px] '>Blog</p>
        </div>
        <div className=' text-[white] '>
             <h1 className='text-[35px] font-semibold'>About</h1>
             <p className='cursor-pointer font-thin mt-[15px]'>Testimonial</p>
             <p className='cursor-pointer font-thin mt-[15px]'>Our Services</p>
             <p className='cursor-pointer font-thin mt-[15px]'>Contact Us</p>
             <p className='cursor-pointer font-thin mt-[15px]'>Benefits</p>
        </div>

        </div>
       
    </div>
</div>
  )
}

export default Footer