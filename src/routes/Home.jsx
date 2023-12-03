import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'


const Home = () => {
  return (
    <div>
      <Header/>

      <div className='h-[100vh] bg-[black] justify-center flex flex-col'>
      <div className='flex justify-center items-center text-[90px] font-bold text-center text-[white] '>
      AN INTUITIVE CROP<br/> PRODUCTION SUITE <br/>FOR FARMERS
      </div>
      <div className='flex items-center justify-center gap-[4rem] mt-[30px]'>
      <button className='bg-[#204E51] h-[45px] w-[110px] rounded-[10px] text-[#ffff] text-[15px]'>Get Started</button>
      <button className='rounded-[10px] border-[#ffff] border h-[45px] w-[110px] text-[white] text-[15px]'>Learn more</button>
      </div>

      </div>
      <div className='h-[100vh] flex items-center justify-center gap-[5rem] '>
        <div className='max-w-[660px] w-[100%] font-normal text-[25px]'><p>Tailored for maximum crop yield, our system is meticulously designed to optimize agricultural output through strategic and data-driven 
          approaches. By leveraging advanced technologies, precision farming techniques, 
          and insightful analytics, we aim to enhance productivity and ensure the efficient utilization of resources, contributing to local and national  economy.</p>
          <button className='bg-[#204E51] h-[45px] w-[110px] rounded-[10px] text-[15px] text-[#ffff] mt-[15px]'>Get Started</button>          </div>
        <div className='h-[550px] w-[545px] rounded-[25px] bg-black'></div>
      </div>
      <div className='h-[100vh] justify-center flex '>
        <div className='flex  items-center flex-col'>
        <h1 className='text-[#204E51] text-[72px] font-bold'>Our Featured Product</h1>
        <p className=' font-light text-[20px] mt-[10px]'>Li Europan lingues es membres del sam familie. Lor separat existentie es un myth Por scientie, musica.</p>

        </div>
        
      </div>
      <div className='h-[100vh] '>
        <Footer/>

      </div>
     
     
    </div>
  )
}

export default Home