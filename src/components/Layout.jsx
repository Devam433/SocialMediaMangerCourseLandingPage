import React, { useEffect } from 'react'
import Navbar from './Navbar';
import Circle from './ui/Circle';
import Footer from './ui/Footer.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';
function Layout({children}) {

    useEffect(() => {
      AOS.init();
    }, [])
  return (
    <div className='flex flex-col min-h-screen w-full bg-gradient-to-b from-[#FFD6DE] to-white'>
      <Navbar/>
      {/* <Circle className='absolute w-full md:w-[50%] rounded-br-[70px] rounded-bl-[70px] rounded-tl-[0px] sm:rounded-tl-[0px] rounded-tr-[70px] sm:rounded-tr-[240px] sm:rounded-br-[250px] sm:rounded-bl-[170px] h-[600px] sm:h-[650px] mt-[100px]  sm:ml-[5%]' data-aos="fade-down"
    //  data-aos-easing="linear"
     data-aos-duration="1000"/> */}
      <main className='flex-grow z-20'>
        <div className='max-w-7xl mx-auto w-full'>
          {children}
        </div>
      </main>
    <Footer/>
    </div>
  )
}

export default Layout;