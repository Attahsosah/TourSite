import React from 'react'
// import {CiTwitter} from 'react-icons/ci';
import {BiEnvelope} from 'react-icons/bi';
import {FaRegMap,FaTwitter,FaPhoneAlt} from 'react-icons/fa';
import { useState , useEffect } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
// import {FiPhone} from 'react-icons/fi';
function Navbar() {

    const [scrolled, setScrolled] = useState(false)

    const scrollChange = () => {
        if (window.scrollY > 60 && window.scrollY){
            setScrolled(true)

        }
        else{
            setScrolled(false)
        }
    }
   

    useEffect(() => {
        window.addEventListener("scroll", scrollChange)
        return () => {
            window.removeEventListener("scroll", scrollChange)
        }
    })

    


  return (
    <div className=' z-50  top-0 sticky '>
        <div className={scrolled? 'hidden' :' hidden   md:w-full md:flex  h-[48px] bg-[#00000021] bg-opacity-0 ml-0 z-100 mb-0'}>
               <div className='flex justify-between  pl-0'>

               
                    <div className='flex    p-[10px] text-[#F4F4F4] sans-serif '>
                        <h1 className=' pl-20 text-[14px] pr-[310px] '>Welcome to CountrySide!</h1>
                    </div>
                    
                    </div>
                    <div className='w-2/4 text-[#F4F4F4] flex justify-evenly items-center'>
                        {/* <second half> */}
                    <div className='flex items-center cursor-pointer '>
                    <div className='pr-[6px]'>
                        <BiEnvelope className='text-white'/>
                        </div>

                        <h1 className='text-bold text-white text-[13px]'>Contact Us</h1>
                    </div>
                    <div className='flex items-center cursor-pointer'>
                        <div className='pr-[6px]'>

                        
                        <FaRegMap className='text-white' />
                        </div>
                    
                        <h1 className='text-[13px]'>How  to Find US</h1>
                    </div>
                    <div className='flex items-center cursor-pointer'>
                        <div className='pr-[6px]'>
                            < FaPhoneAlt  className='text-white'/>
                        </div>
                        <h1  className='text-[13px]'>000-111-888</h1>

                    </div>
                    <div className='cursor-pointer'>
                        <FaTwitter className='text-white' />

                    </div>
                </div>

        </div>

        <div>
            {/* -----------------Second Navbar ----------------- */}

        </div>
        <div className={scrolled ? ' hidden   md:w-full md:flex  justify-between items-center bg-opacity-0 bg-[#1B1B1BE6] sticky top-0 z-50 pl-0 h-[66px] text-white py-[10px]' : 'w-full flex  justify-between items-center bg-opacity-10 bg-[#151515] pl-0 h-[66px] text-white py-[10px]'}>
            <div className='pr-96 pl-20'>
                <h1 className='font-Dancin text-[36px]'>Bellevue</h1>

            </div>
            <ul className=' flex  space-x-14 pr-28 items-center'>
                <li className='cursor-pointer'>Home</li>
                <li className='cursor-pointer'>Pages </li>
                <li className='cursor-pointer'>Blog</li>
                <li className='cursor-pointer'> Feautres </li>

            
            {/* <div className='pr-28 space-x-2'> */}
            <button className='hidden lg:flex lg:px-4 lg:py-2  text-center rounded-full  border-r-[40px,40px,40px,40px]  border-[1.5px]  background-[#FFFFFF00] border-white hover:bg-white hover:text-gray-500'>Buy Now $59</button>
            {/* </div> */}
            </ul>
        </div>

        
        
    </div>
  )
}

export default Navbar