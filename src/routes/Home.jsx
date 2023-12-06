import React from 'react'
import { Link } from 'react-router-dom';
import Header from '../components/header'
import Footer from '../components/footer'


const Home = () => {
  return (
    <div>
      <Header/>

      <div className='h-[100vh] bg-[black] justify-center flex flex-col'>
      <div className='flex justify-center items-center text-[90px] font-bold text-center text-[white] flex-shrink-0 max-[955px]:text-[70px] max-[745px]:text-[45px]'>
      AN INTUITIVE CROP<br/> PRODUCTION SUITE <br/>FOR FARMERS
      </div>
      <div className='flex items-center justify-center gap-[4rem] mt-[30px]'>
      <Link to="/login">
      <button className='bg-[#204E51] h-[45px] px-[25px] rounded-[10px] text-[#ffff] text-[15px]'>Get Started</button></Link>
      <button className='rounded-[10px] border-[#ffff] border h-[45px] px-[25px] text-[white] text-[15px]'>Learn more</button>
      </div>

      </div>
      <div className='h-[100vh] flex items-center justify-center  max-[1331px]:flex-col  gap-[4rem] '>
        <div className='max-[1331px]:mx-[20px]'>
        <h1 className='text-[60px] text-[#204e51] font-bold justify-start mt-[25px]'>Our Product</h1>
        <div className='max-w-[660px] w-[100%] font-normal text-[25px] max-[1331px]:text-[20px] flex-shrink '><p>Tailored for maximum crop yield, our system is meticulously designed to optimize agricultural output through strategic and data-driven 
          approaches. By leveraging advanced technologies, precision farming techniques, 
          and insightful analytics, we aim to enhance productivity and ensure the efficient utilization of resources, contributing to local and national  economy.</p>
          <Link to="/login">
          <button className='bg-[#204E51] h-[45px] px-[25px] rounded-[10px] text-[15px] text-[#ffff] mt-[15px]'>Get Started</button> 

          </Link>
                  </div>

        </div>
        
        <div className='h-[550px] max-w-[545px] w-[100%] rounded-[25px] bg-black flex-shrink'></div>
      </div>
      <div className='h-[100vh] justify-center flex mt-[20px] '>
        <div className='flex items-center flex-col'>
        <h1 className='text-[#204E51] text-[72px] font-bold max-[745px]:text-[50px] mx-[20px]'>Our Featured Products</h1>
        <p className=' font-light text-[20px] mt-[10px] max-[745px]:text-[18px] max-[745px]:w-[80%]'>Li Europan lingues es membres del sam familie. Lor separat existentie es un myth Por scientie, musica.</p>

        </div>
        
      </div>
      <div className='h-[100vh] '>
        <div className='h-[688px] w-full bg-[#000] px-[150px] py-[10rem] max-[1331px]:px-[120px] max-[731px]:px-[2rem] justify-between text-white flex flex-col'>
          <h1 className='text-[72px] font-bold max-[1331px]:text-[60px] '> Farming Meets <br/>Technology</h1>
          <h1 className='text-[72px] font-semibold max-[1331px]:text-[35px] '>32°C Mostly sunny</h1>
          <div>
          <div className='flex items-center justify-start gap-[4rem] mt-[30px] max-[1331px]:mt-[30px] '>
      <Link to="/login">
      <button className='bg-[#204E51] h-[45px] w-[110px] rounded-[10px] text-[#ffff] text-[15px]'>Learn more</button></Link>
      <button className='rounded-[10px] border-[#ffff] border h-[45px] w-[110px] text-[white] text-[15px]'>View Forcast</button>
      </div>
           
          </div>
        </div>
        

      </div>
        <div className='h-[100vh] flex items-center justify-center gap-[5rem] max-[1331px]:flex-col max-[1331px]:mx-[30px] mb-[30px]'>
        <div className='max-w-[660px] w-[100%] font-normal text-[25px] '><h1 className='text-[72px] text-[#204e51] font-semibold max-[731px]:text-[50px]'>The Benefits of Choosing to Use Agrolux</h1>
        <p className='text-[15px] font-light '>What you stand to gain from using our product.</p>
          <Link to="/login">
          <button className='bg-[#204E51] h-[45px] px-[25px] rounded-[10px] text-[15px] text-[#ffff] mt-[35px] flex items-center gap-[7px]'>Learn more <svg xmlns="http://www.w3.org/2000/svg" width="21" height="18" viewBox="0 0 21 18" fill="none">
<path d="M12.9366 1L19.5656 8.83208L12.9366 16.6642M1 8.83208H19.3799" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg></button> 

          </Link>
                  </div>
        <div className='h-[550px] max-w-[545px] w-[100%] rounded-[25px] bg-black flex-shrink '></div>
        </div>
      <div className='h-[100vh] relative md:h-[50vh]'>
        <Footer/>

      </div>
     
     
    </div>
  )
}

export default Home